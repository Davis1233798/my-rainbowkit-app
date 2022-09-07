import React,{useState} from 'react';
import Image from 'next/image';
import {
  useConnect,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import contractInterface from '../contract-abi.json';
import FlipCard, { BackCard, FrontCard } from '../components/FlipCard';
import Navbar from './Navbar';
import {Page,MintButton, MintContainer} from './Erc721Astyle';

const contractConfig = {
  addressOrName: '0x6DcCE01760645a49187a3a4EbeA05d657099c876',
  contractInterface: contractInterface,  
  args:[1],
};

const Erc721A = () => {
  const [totalMinted, setTotalMinted] = useState(0);
  const { isConnected } = useConnect();
  
  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
  } = useContractWrite(contractConfig, 'mint');

  const { data: totalSupplyData } = useContractRead(
    contractConfig,
    'totalSupply',
    { watch: true }
  );

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  React.useEffect(() => {
    if (totalSupplyData) {
      setTotalMinted(totalSupplyData.toNumber());
    }
  }, [totalSupplyData]);

  const isMinted = txSuccess;

  return (
      <div>
      <div>
      <Navbar />
      </div>
      <div>
      <Page>
        <MintContainer>
          <div style={{ flex: '1 1 auto' }}>
            <div style={{ padding: '24px 24px 24px 0' }}>
              <h1>NFT Demo Mint</h1>
              <p style={{ margin: '12px 0 24px' }}>
                {totalMinted} minted so far!
              </p>
              {isConnected && !isMinted && (
                <MintButton
                  style={{ marginTop: 24 }}
                  disabled={isMintLoading || isMintStarted}
                  className="button"
                  data-mint-loading={isMintLoading}
                  data-mint-started={isMintStarted}
                  onClick={() => mint()}
                >
                  {isMintLoading && 'Waiting for approval'}
                  {isMintStarted && 'Minting...'}
                  {!isMintLoading && !isMintStarted && 'Mint'}
                </MintButton>
              )}
            </div>
          </div>

          <div style={{ flex: '0 0 auto' }}>
            <FlipCard>
              <FrontCard isCardFlipped={isMinted}>
                <Image
                  layout="responsive"
                  src="/nft.png"
                  width="500"
                  height="500"
                  alt="RainbowKit Demo NFT"
                />
                <h1 style={{ marginTop: 24 }}>Rainbow NFT</h1>
                
              </FrontCard>
              <BackCard isCardFlipped={isMinted}>
                <div style={{ padding: 24 }}>
                  <Image
                    src="/nft.png"
                    width="80"
                    height="80"
                    alt="RainbowKit Demo NFT"
                    style={{ borderRadius: 8 }}
                  />
                  <h2 style={{ marginTop: 24, marginBottom: 6 }}>NFT Minted!</h2>
                  <p style={{ marginBottom: 24 }}>
                    Your NFT will show up in your wallet in the next few minutes.
                  </p>
                  <p style={{ marginBottom: 6 }}>
                    View on{' '}
                    <a href={`https://goerli.etherscan.io/tx/${mintData?.hash}`}>
                      Etherscan
                    </a>
                  </p>
                  <p>
                    View on{' '}
                    <a
                      href={`https://testnets.opensea.io/assets/goerli/${mintData?.to}/1`}
                    >
                      Opensea
                    </a>
                  </p>
                </div>
              </BackCard>
            </FlipCard>
          </div>
        </MintContainer>
      </Page>
    </div>
    </div>
    
  )
}

export default Erc721A