const MultiPostVoting = artifacts.require('../contracts/MultiPostVoting.sol')
const deployedAddress = '0x1601CcB0E6b390a0dC15E37D9C0f3b2A5f6D8cf3'
module.exports = function (deployer){
    deployer.deploy(MultiPostVoting)
}