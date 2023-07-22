import React from 'react'
import LineProgressBar from './LineProgressBar';

const Retirement = () => {
  const progressPercentage1 = 12;
  const progressPercentage2 = 65;
  return (
    
    <>
      <div className='md:w-[70%] w-[90%] h-[90%] content-center'>

        <div className='flex flex-col bg-slate-100 p-5 rounded-lg font-bold'>
            <h2 className='pb-4'>Retirement Strategy</h2>
            <h3 className='pb-2'>Employee Contribution</h3>
            <div className='flex flex-row pb-2'>
               <LineProgressBar percentage={progressPercentage1} />
               <p>12%</p>
            </div>
            <h2 className='pb-2'>Retirement Age</h2>
            <div className='flex flex-row pb-4'>
               <LineProgressBar percentage={progressPercentage2} />
               <p>65%</p>
            </div>
            <div class="border-t border-slate-400 h-px pb-4"></div>
            <div className='flex flex-row pb-2 justify-between'>
                <h2>Employee Contribution</h2>
                <p>8.4%</p>
            </div>
            <div className='flex flex-row pb-6 justify-between'>
                <h2>Retirement Age</h2>
                <p>8.4%</p>
            </div>
            <button className='text-center text-white bg-blue-700 w-[100%] rounded-2xl p-2'>Update</button>
            <div className='text-blue-700 text-center pt-6'>View help docs
                <i className='fa fa-angle-right ml-2'></i>
            </div>
        </div>

        <div className='flex flex-row mt-5 '>
            <div className='w-[2px] rounded-lg bg-blue-700 mr-5'></div>
            <div className='flex flex-col'>
                <h2 className='text-slate-800 font bold'>Are you considering a</h2>
                <h2 className='font-bold'>Housing Advance ?</h2>
                <p className='pt-2 text-slate-500'>Limited time reduced interest</p>
                <div className='text-blue-700 pt-4 font-bold'>Learn more
                <i className='fa fa-angle-right ml-2'></i>
            </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Retirement
