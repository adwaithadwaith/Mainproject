import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashCard from '../components/DashCard'
import MetamaskButton from '../components/MetamaskButton'
import InitateElection from '../components/InitateElection';

function Dashboard() {
  
  return (
    <>
    <div className='flex flex-row-reverse mr-[8%]'>
      <MetamaskButton/>
      {/* <InitateElection/> */}
      </div>
    <div className=' max-w-[650px] mx-auto my-[8%] py-5 px-8  bg-blue-200 rounded-lg flex flex-wrap justify-around'>
      <DashCard cardname={'Active Elections'} data={0}/>
      <DashCard cardname={'Total Elections'} data={2}/>
      <DashCard cardname={'Registered Voters'} data={23}/>
      <DashCard cardname={'Election Type'}  data = {4}/>
    </div>
    </>
  )
}

export default Dashboard
