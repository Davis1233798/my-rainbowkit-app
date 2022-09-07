import React from 'react'
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const myLoader=({})=>{
  return `https://opensea.mypinata.cloud/ipfs/QmfPC9jKTBUuqybsvExPswhx42hbL9QwFtqczKS6S9nBx7`;
}
const Navbar = () => {
  return (
    <header className={styles.header} >  
    
        <Image
          style={{borderRadius:'500px'}}         
          loader={myLoader} 
          src={`https://opensea.mypinata.cloud/ipfs/QmfPC9jKTBUuqybsvExPswhx42hbL9QwFtqczKS6S9nBx7`} 
          alt="siteicon"
          width={50}
          height={50}         
          />          
        
         <div className={styles.functions}>
        <Link href="/Erc20"><a className={styles.function}>ERC20</a></Link>        
        <Link href="/Erc721"><a className={styles.function}>ERC721</a></Link>
        <Link href="/Erc721A"><a className={styles.function}>ERC721A</a></Link>
        <Link href="/Erc721R"><a className={styles.function}>ERC721R</a></Link>
        <Link href="/Erc677"><a className={styles.function}>ERC677</a></Link>
        <Link href="/Erc1155"><a className={styles.function}>ERC1155</a></Link>
         </div>
         
        <div className={styles.wallet}>
        <ConnectButton />
        </div>
      </header>
  )
}

export default Navbar