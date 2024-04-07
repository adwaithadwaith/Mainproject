import React, { useState, useEffect, useContext } from 'react';
import getVoteCount from '../utils/getVoteCounts';
import { ContractContext } from '../context/electionContext';

const ResultCard = ({ postName, postIndex, candidates }) => {
  const [votes, setVotes] = useState({}); // Object to store candidate-vote pairs
  const { contract } = useContext(ContractContext);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const votesArray = await getVoteCount(postIndex, contract);
        console.log('printing inside fetchvote');
        console.log(votesArray);

        // Create an object mapping candidate names to vote counts
        const candidateVotes = {};
        votesArray.forEach((vote, index) => {
          candidateVotes[candidates[index]] = vote.toString();
        });

        setVotes(candidateVotes);
      } catch (error) {
        console.error("Error fetching votes:", error);
      }
    };

    fetchVotes();
  }, [postIndex, contract]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h3 className="text-xl font-semibold mb-2">{postName}</h3>
      <div className="grid grid-cols-2 gap-4">
        {candidates.map((candidate, index) => (
          <div key={index} className="flex items-center">
            <p className="text-gray-700 mr-2">{candidate}:</p>
            <p className="font-semibold">{votes[candidate] || '0'} votes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
