import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className='w-[100%] h-[100%] bg-white flex justify-between flex-col'>
        <div className='one'>
        <div className='flex md:flex-col flex-row justify-around items-center pt-5 '>
        <img src='images/butterfly.png' alt='hry' className='md:flex w-[50px] h-[50px] pb-3 hidden'/>
            <i class="fa fa-search md:mt-3 md:mb-10 text-slate-400 text-xl hover:bg-blue-700 p-2 hover:rounded-lg hover:text-white "></i>
            <i class="fa fa-home md:mb-3 md:mt-3 text-slate-400 text-xl hover:bg-blue-700 p-2 hover:rounded-lg hover:text-white "></i>
            <i class=" fa fa-id-card-o md:mb-3 text-slate-400 text-xl hover:bg-blue-700 p-2 hover:rounded-lg hover:text-white "></i>
            <i class="fa fa-file-text-o md:mb-3 text-slate-400 text-xl hover:bg-blue-700 p-2 hover:rounded-lg hover:text-white "></i>
            <i class="fa fa-user-o md:mb-3 text-slate-400 text-xl hover:bg-blue-700 p-2 hover:rounded-lg hover:text-white "></i>
          
        </div>
        </div>
        <div className='two flex flex-col items-center'>
            <i class="fa fa-bell-o md:mb-3 text-slate-400 text-xl hover:bg-blue-700 p-2 hover:rounded-lg hover:text-white "></i>
            <i class="fa fa-sign-out md:mb-3 text-slate-400 text-xl hover:bg-blue-700 p-2 hover:rounded-lg hover:text-white "></i>
        </div>
        
      </nav>
    </>
  )
}

export default Nav
