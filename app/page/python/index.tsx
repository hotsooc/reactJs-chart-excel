import { useState } from 'react';
import { Upload, Card, Col, Row, Statistic, Table, Alert, Typography, Divider, App, Button } from 'antd';
import { InboxOutlined, ArrowUpOutlined, TableOutlined, ReloadOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';
import { Waterfall, Column, Area, Radar } from '@ant-design/plots';

const { Dragger } = Upload;
const { Title, Text } = Typography;

export default function FeaturePage() {
  const { message } = App.useApp();
  const [data, setData] = useState<{
    summary: any[];
    details: any[];
    topProducts: any[];
    insights: string[];
  } | null>(null);

  const getDynamicColumns = (rawList: any[]) => {
    if (!rawList || rawList.length === 0) return [];
    const firstItem = rawList[0];
    return Object.keys(firstItem).map((key) => ({
      title: key,
      dataIndex: key,
      key: key,
      ellipsis: true,
    }));
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const bstr = e.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        const requiredSheets = ["Summary", "Details", "TopProducts"];
        const missingSheets = requiredSheets.filter(s => !wb.SheetNames.includes(s));
        
        if (missingSheets.length > 0) {
          message.error(`Thiếu Sheet: ${missingSheets.join(", ")}`);
          return;
        }

        const summary = XLSX.utils.sheet_to_json(wb.Sheets["Summary"]);
        const details: any[] = XLSX.utils.sheet_to_json(wb.Sheets["Details"]);
        const topProducts = XLSX.utils.sheet_to_json(wb.Sheets["TopProducts"]);
        
        const insights = details.slice(17, 21).map((row: any) => {
            const values = Object.values(row);
            return (values[10] as string) || "Ghi chú phân tích dữ liệu";
        });

        setData({ summary, details, topProducts, insights });
        message.success("Đọc dữ liệu thành công!");
      } catch (err) {
        message.error("Lỗi khi đọc file Excel. Vui lòng kiểm tra lại định dạng.");
        console.error(err);
      }
    };
    reader.readAsBinaryString(file);
    return false;
  };

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <Title level={2} className="text-gray-400">Hệ Thống Báo Cáo</Title>
        <Dragger 
          beforeUpload={handleFileUpload} 
          maxCount={1} 
          accept=".xlsx" 
          className="w-full max-w-xl bg-white p-10"
        >
          <p className="ant-upload-drag-icon"><InboxOutlined style={{ color: '#1677ff' }} /></p>
          <p className="ant-upload-text">Nhấp hoặc kéo tệp Excel vào khu vực này</p>
          <p className="ant-upload-hint">Hỗ trợ file .xlsx chứa các Sheet: Summary, Details, TopProducts</p>
        </Dragger>
      </div>
    );
  }

  return (
    <div className="max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar space-y-6">
      <div className="flex justify-between items-center">
        <Title level={3} style={{ margin: 0 }}>📊 Dashboard Phân Tích Tổng Thể</Title>
        <Text type="secondary">Dữ liệu được trích xuất từ file Excel vừa tải</Text>
      </div>
      <Button 
        type="primary" 
        danger 
        icon={<ReloadOutlined />} 
        onClick={() => setData(null)}
        className='mb-4!'
      >
        Tải file khác
      </Button>

      <Row gutter={[16, 16]}>
        {data.summary.map((item: any, idx) => (
          <Col xs={24} sm={12} lg={6} key={idx}>
            <Card bordered={false} className="shadow-sm border-l-4 border-blue-500">
              <Statistic
                title={<span className="font-medium text-gray-500">{item['Chỉ số'] || 'N/A'}</span>}
                value={item['Giá trị'] || 0}
                valueStyle={{ color: '#1677ff', fontWeight: 'bold' }}
                prefix={<ArrowUpOutlined />}
                suffix={<span className="text-xs text-green-500 ml-1">({item['KPI_MTD'] || 0}%)</span>}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Divider />

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="1. Phân tích Biến động (Waterfall)" size="small" className="shadow-sm">
            <Waterfall
              data={data.details}
              xField="Tháng"
              yField="Biến động"
              style={{ fill: '#1890ff' }}
              label={{ position: 'middle', style: { fill: '#fff' } }}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="2. Doanh thu Deal vs Mass (Stacked)" size="small" className="shadow-sm">
            <Column
              data={data.details.flatMap((d: any) => [
                { month: d.Tháng, value: d['Doanh thu Deal'] || 0, type: 'Deal' },
                { month: d.Tháng, value: d['Doanh thu Mass'] || 0, type: 'Mass' }
              ])}
              xField="month"
              yField="value"
              colorField="type"
              stack={true}
              tooltip={{ shared: true, showMarkers: false }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card title="3. Xu hướng Thực tế" size="small" className="shadow-sm">
            <Area 
              data={data.details} 
              xField="Tháng" 
              yField="Thực tế"
              style={{ fill: 'l(90) 0:#1890ff 1:#ffffff' }}
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="4. Thị phần (Radar)" size="small" className="shadow-sm">
            <Radar
              data={data.details.slice(0, 6)}
              xField="Tháng"
              yField="Thị phần"
              area={{ style: { fillOpacity: 0.2 } }}
              point={{ size: 3 }}
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="5. Top Sản phẩm & Insights" size="small" className="shadow-sm">
            <Table 
              dataSource={data.topProducts.slice(0, 5)} 
              columns={getDynamicColumns(data.topProducts.slice(0, 1))}
              pagination={false} 
              size="small"
              rowKey={(_, i) => `top-${i}`}
            />
            <div className="mt-4 space-y-2">
              {data.insights.map((text, i) => (
                <Alert key={i} message={text} type="info" showIcon className="py-1 text-[12px]" />
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      <Card 
        title={<span><TableOutlined className="mr-2" />Toàn bộ bảng dữ liệu chi tiết</span>} 
        className="shadow-sm"
      >
        <Table 
          dataSource={data.details} 
          columns={getDynamicColumns(data.details)} 
          scroll={{ x: 1200 }} 
          size="small" 
          bordered
          rowKey={(_, i) => `detail-${i}`}
          pagination={{ pageSize: 10, showSizeChanger: false }}
        />
      </Card>
    </div>
  );
}