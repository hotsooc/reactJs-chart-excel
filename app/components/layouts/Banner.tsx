import { ShoppingCartOutlined } from '@ant-design/icons'

export default function Banner() {
  return (
    <>
        <div className='flex flex-col'>
            <div className='bg-[#05545B] text-white h-18'>
                <div className='flex flex-row m-4 ml-10 gap-4 text-3xl'>
                    <ShoppingCartOutlined />
                    <span>Shop</span>
                </div>
            </div>
            <div className='bg-[#A0BCCA] h-8'></div>
        </div>
    </>
  )
}
