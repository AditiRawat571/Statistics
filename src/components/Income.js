import React from 'react'
import MyChart from './MyChart'
import CircularProgressBar from './CircularProgressBar';

const Income = () => {
    const progressPercentage1 = 78;
    const progressPercentage2 = 95;
    const progressPercentage3 = 58;

  return (
    <>
      <div className='md:w-[70%] w-[90%] h-[90%] content-center flex flex-col justify-between '>

        <div className='first'>
        <h2 className='font-bold text-blue-700 md:text-sm'>Retirement Income</h2>
        <p className='font-bold text-lg pb-8'>Starting Year 2056</p>
        <div className='flex md:flex-row flex-col justify-between'>
            <div className='flex flex-col'>
                <h2 className='font-bold md:text-xl text-2xl pb-2'>$300,000</h2>
                <p className='text-slate-400 pb-2 text-sm'>My Goal</p>
                <div class="border-t md:w-[10vw] border-blue-700 h-2px pb-1"></div>
            </div>
            <div className='md:flex flex-col hidden'>
                   <h2 className='font-bold text-xl pb-2'>59%</h2>
                   <p className='text-slate-400 pb-2 text-sm'>Goal achived</p>
                   <div class="border-t w-[10vw] border-blue-700 h-2px pb-1"></div>
            </div>
            <div className='md:flex flex-col hidden'>
                   <h2 className='font-bold text-xl pb-2'>$300</h2>
                   <p className='text-slate-400 pb-2 text-sm'>Est monthly Income</p>
                   <div class="border-t w-[10vw] border-blue-700 h-2px pb-1"></div>
            </div>
            <div className='flex flex-row md:hidden justify-between mt-5'>
                <div className='flex flex-col'>
                   <h2 className='font-bold text-2xl pb-2 '>59%</h2>
                   <p className='text-slate-400 pb-2 text-sm'>Goal achived</p>
                   <div class="border-t w-[30vw] border-blue-700 h-2px pb-3"></div>
                </div>
                <div className='flex flex-col'>
                   <h2 className='font-bold text-2xl pb-2'>K 300</h2>
                   <p className='text-slate-400 pb-2 text-sm'>Est monthlyIncome</p>
                   <div class="border-t w-[30vw] border-blue-700 h-2px pb-3"></div>
                </div>
            </div>
        </div>
        </div>

        <div className='second'>
        <h2 className='font-bold md:text-md text-xl md:pb-2 pb-4 md:pt-0 '>Contributions Overtime</h2>
        <div className='flex flex-row justify-between pb-4 md:mb-0 mb-5'>
            <div className='flex md:flex-row flex-col'>
                <div className='w-[20px] h-[15px] rounded-3xl bg-blue-900 md:mb-0 mb-2 mt-1.5 ml-2'></div>
                <h2 className='text-slate-400 md:pb-0 pb-1 text-sm ml-2'>Employee</h2>
                <p className='ml-2 font-bold text-sm'>$72,500</p>
            </div>
            <div className='flex md:flex-row flex-col'>
                <div className='w-[20px] h-[15px] rounded-3xl bg-blue-700 md:mb-0 mb-2 mt-1.5 ml-2'></div>
                <h2 className='text-slate-400 md:pb-0 pb-1 text-sm ml-2'>Employee</h2>
                <p className='ml-2 font-bold text-sm'>$72,500</p>
            </div>
            <div className='flex md:flex-row flex-col'>
                <div className='w-[20px] h-[15px] rounded-3xl bg-blue-500 md:mb-0 mb-2 mt-1.5 ml-2'></div>
                <h2 className='text-slate-400 md:pb-0 pb-1 text-sm ml-2'>Employee</h2>
                <p className='ml-2 font-bold text-sm'>$72,500</p>
            </div>
        </div>

        <div className='w-[100%] h-[30vh] '>
            <MyChart />
        </div>
        </div>

        <div className='third'>
        <h2 className='font-bold md:text-lg text-xl md:pt-0 md:pb-0 pb-2'>How do I compare to my peers?</h2>
        <p className='text-slate-400 pb-4 text-sm'>These numbers represent current goal achievement</p>
        <div className='flex md:flex-row flex-col justify-between'>
            <div className='flex flex-col'>
                <div className='flex flex-row pb-2'>
                    <h2 className='text-sm font-bold'>Age: </h2>
                    <p className='text-slate-400 text-sm ml-2 mr-2'>Under 30</p>
                    <i className='fa fa-angle-down'></i>
                </div>
                <div class="border-t border-slate-400 h-px pt-3"></div>
                <div className='flex flex-row pb-2'>
                    <h2 className='text-sm font-bold'>Salary: </h2>
                    <p className='text-slate-400 text-sm ml-2 mr-2'>K-20 - K-30</p>
                    <i className='fa fa-angle-down'></i>
                </div>
                <div class="border-t border-slate-400 h-px pt-3"></div>
                <div className='flex flex-row'>
                    <h2 className='text-sm font-bold'>Gender: </h2>
                    <p className='text-slate-400 text-sm ml-2 mr-2'>Male</p>
                    <i className='fa fa-angle-down'></i>
                </div>
            </div>
            <div className='flex flex-row justify-between'> 
                <div className=' md:ml-2 md:mt-0 mt-10'>
                   <CircularProgressBar percentage={progressPercentage1} />
                   <h2 className='text-center text-sm font-bold'>Average</h2>
                </div>              
                <div className=' md:ml-2 md:mt-0 mt-10'>
                   <CircularProgressBar percentage={progressPercentage2} />
                   <h2 className='text-center text-sm font-bold'>Top</h2>
                </div>
                <div className='md:ml-2 md:mt-0 mt-10'>
                   <CircularProgressBar percentage={progressPercentage3} />
                   <h2 className='text-center text-sm font-bold'>Me</h2>
                </div>
            </div>

        </div>
        </div>


        

       

        

      </div>
    </>
  )
}

export default Income
