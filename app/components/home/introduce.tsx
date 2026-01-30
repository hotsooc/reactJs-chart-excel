import { Button } from "antd";

export default function Introduce() {
  return (
    <>
        <div className='grid grid-cols-2 items-center bg-[#247981] p-4 gap-4'>
            <div className='flex flex-col'>
                <span className='flex text-[78px] items-center justify-center text-white font-bold mb-10'>Từ Gạo nếp Tú Lệ</span>
                <div className="flex flex-col gap-10 mx-10">
                    <span className='text-[16px] text-white font-medium'>
                        Được trưng cất thủ công, từ gạo nếp Tú Lệ kết hợp với men lá được tạo bởi các loại lá tự nhiên có khả năng chuyển hoá egymer cao và các loại cây trái tự nhiên vùng Tây bắc tạo nên hương vị đánh thức tất cả các giác quan khi thưởng thức.
                    </span>
                    <span className='text-[16px] text-white font-medium'>
                        Ở 25 độ cồn nhưng khi uống cảm giác dưới 20 độ cồn, rất phù hợp với ẩm thực phương đông, khi uống giữ cho rượu mát ( như khi uống vang trắng).
                    </span>
                    <span className='text-[16px] text-white font-medium'>
                        Men được làm từ các lá cây và nhiều loại thảo dược khác. Rượu men lá không chỉ có hương vị độc đáo mà còn có rất nhiều tác dụng đối với sức khỏe con người.
                    </span>
                    <span className='text-[16px] text-white font-medium'>
                        Men lá là một loại men chứa nhiều enzyme có lợi giúp cân bằng tiêu hóa và hỗ trợ trao đổi chất. Vì vậy, rượu men lá được xem là một loại thức uống bổ dưỡng...
                    </span>
                </div>
                <Button className="flex! items-center! justify-center! mt-10! w-20! h-10! ml-10!">Đọc tiếp</Button>
            </div>
            <div className="flex items-center justify-center">
                <img src="/image/introduce1.png" className="w-[90vh] h-[90vh] rounded-2xl object-cover" />
            </div>
        </div>
    </>
  )
}
