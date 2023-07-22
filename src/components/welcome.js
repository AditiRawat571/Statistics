import React from 'react'


const Welcome = () => {
  return (
    <>
      <div className='md:w-[70%] w-[90%] h-[90%] content-center'>


        <div className='flex flex-row'>
            <img src='images/closer.jpg' alt='hey' className='w-[70px] h-[70px] rounded-full' />
            <div className='flex flex-col pl-5'>
                <h2 className='pt-3 text-xl font-bold'>Hi Aditi,</h2>
                <h2 className='font-bold text-slate-400'>welcome back</h2>
            </div>
        </div>

        <div className='flex flex-col mt-[10%] p-5 rounded-lg md:mb-[5%] mb-[15%]  bg-slate-100'>
            <h2 className='pb-3 font-bold'>Today</h2>
            <div className='flex flex-col'>
                <h2 className='text-2xl font-bold'>$19,892</h2>
                <p className='text-slate-400 text-md pt-1 pb-3'>Amount balance</p>
            </div>
            <div className='flex md:flex-col flex-row'>
                <div className='flex flex-col'>
                    <h2 className='font-bold'>$4000</h2>
                    <p className='text-slate-400 pb-3'>Year-to-date-contributions</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-bold'>$1892</h2>
                    <p className='text-slate-400 text-md pb-3'>Total Interest</p>
                </div>
            </div>
            <button className='text-center text-white bg-blue-700 md:w-[100px] rounded-2xl p-2 overflow-hidden'>I want to <i className='fa fa-angle-down'></i></button>
        </div>

        <div className=' h-[40%] overflow-auto bg-slate-100 p-5 rounded-lg'>
            <h2 className='pb-2 font-bold'>Recent transactions</h2>
            <div className='flex flex-col'>
                <p className='text-slate-400 text-md pt-1 '>Amount balance</p>
                <h2 className='text-lg font-bold pt-1 pb-3'>$19,892</h2>
            </div>
            <div class="border-t border-slate-400 h-px pt-3"></div>
            <div className='flex flex-col'>
                <p className='text-slate-400 text-md pt-1 '>Amount balance</p>
                <h2 className='text-lg font-bold pt-1 pb-3'>$19,892</h2>
            </div>
            <div class="border-t border-slate-400 h-px pb-3"></div>
            <div className='flex flex-col'>
                <p className='text-slate-400 text-md pt-1 '>Amount balance</p>
                <h2 className='text-lg font-bold pt-1 pb-3'>$19,892</h2>
            </div>
           
        </div>
      </div>
    </>
  )
}

export default Welcome
