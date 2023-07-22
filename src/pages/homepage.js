import React from 'react';
import Nav from '../components/Nav'
import Welcome from '../components/welcome';
import Retirement from '../components/Retirement';
import Income from '../components/Income';
import Notify from '../components/Notify';

const Homepage = () => {
  return (
    <>
      <div className='w-[100vw] flex md:flex-row flex-col-reverse relative min-h-screen'>
        <div className='md:w-[5%] md:h-[100vh] h-[10vh] w-[100%] md:relative fixed' style={{bottom:'0',left:'0'}}><Nav /></div>
        <div className='md:w-[5%] md:h-[100vh] h-[5vh] w-[100%] md:relative fixed md:hidden flex ' style={{top:'0',left:'0'}} ><Notify /></div>
        <div className='md:w-[95%] w-[100%] flex md:flex-row flex-col items-center overflow-y-auto '>
            <div className='md:w-[25%] w-[90%] md:h-[100vh]  flex justify-center items-center h-screen md:bg-slate-100'><Welcome /></div>
            <div className='md:w-[50%] w-[90%] md:h-[100vh] h-[160vh] md:pt-0 pt-[10%] justify-center items-center flex '><Income /></div>
            <div className='md:w-[25%] w-[90%] md:h-[100vh] h-screen justify-center items-center flex'><Retirement /></div>
        </div>
      </div>
    </>
  )
}

export default Homepage
