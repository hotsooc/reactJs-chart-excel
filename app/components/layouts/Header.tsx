import { MenuOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <>
      <div className="bg-[url('/image/image_1.png')] h-120 bg-cover bg-center flex items-center justify-center">
        <div className="flex items-start justify-between w-full px-10">
          <MenuOutlined className="text-white! text-[24px]" />
          <img src="/image/image_2.png" />
          <div className="flex gap-4">
            <SearchOutlined className="text-white! text-[24px]" />
            <ShoppingOutlined className="text-white! text-[24px]" />
            <UserOutlined className="text-white! text-[24px]" />
          </div>
        </div>
      </div>
    </>
  )
}
