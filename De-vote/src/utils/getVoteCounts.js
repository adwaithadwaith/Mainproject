const getVoteCount = async (postIndex, contract) => {
    console.log("Fetching vote count...");
  
    try {
      const votes = await contract.methods.getVoteCount(postIndex).call();
      return votes;
      
      // return votes;
      
    } catch (error) {
      console.error("Error fetching vote count:", error);
      // Handle error getting vote count (e.g., display error message)
      return null;
    }
  };

  export default getVoteCount