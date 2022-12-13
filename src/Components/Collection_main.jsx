import React, { useEffect, useState } from 'react'

import { wireNftContractAddress, wireNftContractAbi } from '../contracts/contract';
import { toast } from "react-toastify";
import { loadWeb3 } from '../Api/Api';
// import Spinner from '../../Loading_Spinner/Spinner';
import axios from 'axios';
import '../Components/Carde/Carde'
function Collection_main() {
  let [Array_NFT, setArray_NFT] = useState([])


  const Nft_Collection = async () => {
    let acc = await loadWeb3();
    try {
      const web3 = window.web3
      let Data_Array = []
      let contractOf_Own = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress)
      console.log('metamaskadress', acc)
      let WalletOwnOf = await contractOf_Own.methods.walletOfOwner(acc).call();
      let wallet_Length = WalletOwnOf.length
      console.log("collection", WalletOwnOf);
      let Wallet_URI
      for (let i = 1; i < wallet_Length; i++) {
        console.log("WalletOwnOf", i);
        let ArryData = WalletOwnOf[i]
        // let ArryData = i

        Wallet_URI = await axios.get(`https://teal-high-elephant-254.mypinata.cloud/ipfs/QmRN9mG46UtACjCmtwjnqz2pmDei2tUP6zB23NpFw8wk8C/${WalletOwnOf[i]}.png`);
       


        let Image_Url = Wallet_URI.config.url
        // let NFT_Name = res.data.title

        Data_Array = [...Data_Array, { Url: Image_Url, address: acc,ArryData:ArryData }]
        setArray_NFT(Data_Array)
      }
      // console.log("Wallet_URI", Wallet_URI);

    } catch (e) {
      console.log("Erroe while Call My_cooletion Fuction", e);
    }


  }
  console.log('what is collection', Array_NFT)
  useEffect(() => {
    Nft_Collection()

  }, []);

  return (
    <div>
      <main class="pt-[5.5rem] lg:pt-24 bnnr">
        {/* <!-- Banner --> */}
        <section class="relative bnnr" >
          <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            {/* <img src="banner.jpg" alt="gradient" class="h-full w-full" /> */}
          </picture>
          <div class="container">
            {/* <!-- Page Title --> */}
            <div class="mx-auto max-w-2xl py-16 text-center">
              <h1 class="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white banner_p" style={{ color: "#fff" }}>ArchieMeta NFT  </h1>
              <p class="dark:text-jacarta-300 text-lg leading-normal banner_p" style={{ color: "#fff" }}>
                An Exclusive Avatar Collection<br />
              </p>
            </div>
          </div>
        </section>
        <div className="container">
        <div class="grid gap-8 md:grid-cols-4" >
          {
            Array_NFT.map((items, idex) => {
       
              let index = idex + 1;
              return (
                <>
                  <div class="dark:bg-jacarta-800 rounded-2.5xl  p-2 text-center transition-shadow hover:shadow-xl" style={{backgroundColor:"#7c2f6e"}} >
                    <h3 class="font-display   " >
                      <img src={items.Url} alt="img" style={{borderRadius:"15px"}} />

                    </h3>

                  <p className='text-white'>  Token ID : {items.ArryData}</p>

                  </div>
                </>)
            }
            )}



        </div>
        </div>

        
        {/* <!-- end banner -->  */}
        {/* <!-- Process / Newsletter --> */}
        {/* <section class="dark:bg-jacarta-800 colct_main relative py-24">
          <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="gradient.jpg" alt="gradient" class="h-full w-full" />
          </picture>
          <picture class="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
            <img src="gradient_dark.jpg" alt="gradient dark" class="h-full w-full" />
          </picture>
          <div class="container">
            <h5 class="font-display text-center dark:text-white" style={{ color: "#F067D8" }}>Join Jutto Club</h5>
            <h2 class="font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white">
              Become a member of the exclusive<br></br>Jutto Club
            </h2>
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            </div>
            <div class="grid gap-8 md:grid-cols-4">
              {
                Array_NFT.map((items, idex) => {
                  let index = idex + 1;
                  return (
                    <>
                      <div class="dark:bg-jacarta-800 rounded-2.5xl bg-white p-6 text-center transition-shadow hover:shadow-xl">

                        <h3 class="font-display carde_hhh text-jacarta-700 mx-auto mb-4 max-w-[9.625rem] text-lg dark:text-white">
                          <img src={items.Url} alt="img" />

                        </h3>
                      </div>
                    </>)
                }
                )}



            </div>

          </div>
        </section> */}

        {/* <!-- end process / newsletter --> */}
      </main>
    </div>
  );
}

export default Collection_main;
