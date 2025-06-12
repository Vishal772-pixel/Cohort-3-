
  //hooks to manage local state ( wallet , balance etc)
import { useEffect,useState} from 'react'
//  connection => solana blockchain se connection banane ke liye is ko import karna important hai 
// publicKey , Key pair => solana wallet banane ke liye and address ko handle karne ke liye 
// LAMPORTS_PER_SOL => 1 solana = 1,000,000,000 lamports
import {Connection,PublicKey,clusterApiUrl,LAMPOTS_PER_SOL,Keypair} from '@solana/web3.js'
//bs58 => base58 encode/decode ( optional, use for secret key exports)
import bs58 from 'bs58'
 export default function App (){


 const [keypair,setKeypair]=useState(null) // current wallet ka private and public key pair store karne ke liye
 const [balance,setbalance]=useState(0) // current sol balance store karne ke liye 
  const[recipient,setRecipient]=useState("") // jisko solana bhejna hai uska address manage karne ke liye 
  const[amount,setAmount]=useState("") // kitna solana bhejna hai uska amount mange karne ke liye 


  // devnet => Free test network for development (not real solana )
  const connection =new Connection(clusterApiUrl("devnet"),"confirmed")

  const generateWallet =()=>{
    const newKeypair =Keypair.generate()setKeypair(newKeypair)} // keypair.generate => ye naya wallet create karta hai 
  }







 

  return (
    <>
     
    </>
  )
}

