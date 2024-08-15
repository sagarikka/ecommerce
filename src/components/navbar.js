import { Icon } from '@iconify-icon/react';

export function Navbar(){
    return (
          <div className="flex bg-lime-500 font-bold text-white p-2 justify-between w-full">
          <div className='flex justify-center items-center w-1/3'>+91 2378891823</div>
          <div className='flex justify-start items-center w-1/3'>info@gmail.com</div>
          <div className="text-white flex justify-center items-center w-1/3 space-x-6 ">
          <Icon icon="ri:facebook-fill"  width={20}/>
          <Icon icon="ant-design:instagram-outlined" width={20}/>
          <Icon icon="ri:linkedin-fill" width={20}/>
          <Icon icon="ri:youtube-fill"  width={20} />
          </div>
            
          </div>
    )
}