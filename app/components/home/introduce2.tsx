import { Button } from 'antd'
import React from 'react'

export default function Introduce2() {
  return (
    <>
        <div className='grid grid-cols-2 items-center bg-[#05545B] p-4 gap-4'>
            <div className='flex flex-col'>
                <span className='flex text-[78px] items-center justify-center text-white font-bold mb-10'>Men lá là gì?</span>
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
                </div>
                <Button className="flex! items-center! justify-center! mt-10! w-20! h-10! ml-10!">Đọc tiếp</Button>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <img src="/image/introduce2.png" className="w-[90vh] h-[50vh] rounded-2xl object-center" />
                <div className='flex flex-row gap-4'>
                    <img src="/image/introduce2_1.png" className="w-[44vh] h-[50vh] rounded-2xl object-center" />
                    <img src="/image/introduce2_2.png" className="w-[44vh] h-[50vh] rounded-2xl object-center" />
                </div>
            </div>
        </div>
    </>
  )
}
