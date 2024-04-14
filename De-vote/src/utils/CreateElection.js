const creatElection = async (account,contract,postNames, candidateNames) => {
    console.log(`election type: ${postNames}`)
    console.log(`candidate nmaes: ${candidateNames}`)
    console.log(`account:${account}`)
    console.log('printing contract')
    console.log(contract)
    const durationInMinutes = 10;
    console.log("hello1");
    
     account ? console.log(account) : console.log('not found')
    // await contract.methods.createElection(postNames, candidateNames, durationInMinutes).send({from:'0x5c4b1c4E6B46d397af3bee1E879072396cE6b904'});
    await contract.methods
      .createElection(postNames, candidateNames, durationInMinutes)
      .send({
        from: account,
        // gas: 3000000,
      }) 
      .then((result) => {
        console.log("Election created successfully:", result);
        alert("Election created successfully")
      })
      .catch((error) => {
        console.error("Error creating election:", error);
        
      });
  };

  export default creatElection;
