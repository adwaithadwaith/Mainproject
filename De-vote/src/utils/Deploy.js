import Web3 from "web3";
import configuration from "../contracts/MultiPostVoting.json"
const web3 = new Web3(window.ethereum);
const contractABI = configuration.abi // Your contract's ABI
const contractBytecode = configuration.bytecode
const contract = new web3.eth.Contract(contractABI);

const deployContract = async (account) => {
    try {
    //   const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    //   const sender = accounts[0];
      const deployedContract = await contract.deploy({ data: contractBytecode }).send({ from: account });
      console.log("Contract deployed at address:", deployedContract.options.address);
      return deployedContract
    } catch (error) {
      console.error("Error deploying contract:", error);
    }
  };

  export default deployContract