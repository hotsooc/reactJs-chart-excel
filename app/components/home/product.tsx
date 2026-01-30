import { Button, Carousel } from 'antd'

export default function Product() {
  return (
    <>
      <div className='bg-linear-to-r from-[#D6A988] to-[#A47B51] h-screen'>
        <div className='flex justify-between mx-30'>
          <span className='flex text-[78px] text-[#3C2313]'>Sản phẩm của Lủi</span>
          <span className='flex! mt-20! text-[16px]! border-none! text-white! hover:underline! cursor-pointer!'>Xem thêm</span>
        </div>
        <Carousel arrows infinite className='flex! mt-20! flex-row! mx-30! gap-10!'>
            <div className='flex! flex-row! items-center! justify-center! mb-10! gap-10'>
              <div className='border rounded-2xl px-20 py-4'>
                <img src='/image/product.png' />
                <span>abc</span>
              </div>
              <div className='border rounded-2xl px-20 py-4'>
                <img src='/image/product.png' />
                <span>abc</span>
              </div>
              <div className='border rounded-2xl px-20 py-4'>
                <img src='/image/product.png' />
                <span>abc</span>
              </div>
            </div>
            <div className='flex! flex-row! items-center! justify-center! mb-10! gap-10'>
              <div className='border rounded-2xl px-20 py-4'>
                <img src='/image/product.png' />
                <span>abc</span>
              </div>
              <div className='border rounded-2xl px-20 py-4'>
                <img src='/image/product.png' />
                <span>abc</span>
              </div>
              <div className='border rounded-2xl px-20 py-4'>
                <img src='/image/product.png' />
                <span>abc</span>
              </div>
            </div>
            <div className='flex! flex-row! items-center! justify-center! mb-10! gap-10'>
              <div className='border rounded-2xl px-20 py-4'>
                <img src='/image/product.png' />
                <span>abc</span>
              </div>
              <div className='border rounded-2xl px-20 py-4'>
                <img src='/image/product.png' />
                <span>abc</span>
              </div>
              <div className='border rounded-2xl px-20 py-4'>
                <img src='/image/product.png' />
                <span>abc</span>
              </div>
            </div>
        </Carousel>
      </div>
    </>
  )
}
