import React from 'react'
import { Navbar } from '../components/navbar';
import { Header } from '../components/header';
import { useParams } from 'react-router';
import Boots from '../helper/Boots';

function Product() {
  const {id}=useParams();
  const product=Boots.find((boot) => boot.id === parseInt(id));
  console.log(product);
  return (
    <div>
      <Navbar/>
      <Header/>
      {product?(
      <div className='flex flex-col justify-center items-center'>
        <div className=' flex flex-wrap  space-x-16 w-11/12'>
            {/*image */}
            <div className='md:w-1/3 w-full'><img src={product.image} alt='product'/></div>
            {/*image about */}
            <div className='md:w-1/3 w-full  space-y-8'>
                <div className='text-2xl font-bold '>{product.bootName}</div>
                <div className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</div>
                <div className='flex flex-col w-1/2'>
                    <div className='p-2 flex font-semibold border border-gray-300 justify-between'><div >Price</div> <div>{product.price}</div></div>
                    <div className='p-2 flex font-semibold justify-between border-gray-300 border'><div>Stock</div> <div>In Stock</div></div>
                    <div className='p-2 flex font-semibold justify-between border-gray-300 border'><div>Quantity</div> <div>1</div></div>
                    <div className="bg-black text-white p-2  rounded  hover:bg-lime-500 cursor-pointer my-2 w-full">ADD TO CART</div>
                </div>
                
            </div>
        </div>
      
      </div>):(<p className='p-4 font-bold text-4xl'>product not found</p>)}
    </div>
  )
}

export default Product
