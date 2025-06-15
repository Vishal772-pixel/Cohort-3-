pragma solidity ^0.8.20;
// Solidity Version define kar raha hai 


// FROM where Contract starts 
contract Voting {
struct Candidate {
string name;
uint voteCount; // uint => unsigned integer(cant be negative)
}

// The one deployed Contract is Owner of Contract
address public owner ; // only Owner can change 

//Record of every wallet ..is voted or not 
Mapping(address=>bool)public
has voted ;


// Array of all Candidates 
Candidate[] public candidates;
