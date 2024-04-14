import { useContext } from 'react';

import { ContractContext } from '../context/electionContext';
import deployContract from '../utils/Deploy'
function InitateElection() {
    const { account,updateContract } = useContext(ContractContext);

  return (
    <div>
      <button onClick={()=>{updateContract(deployContract(account))}} className="bg-blue-500 h-8 w-[180px] flex mt-6 rounded-lg text-white font-bold text-sm hover:bg-blue-700 cursor-pointer">Initiate Election</button>
    </div>
  )
}

export default InitateElection
