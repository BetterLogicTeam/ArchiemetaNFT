import React, { useEffect, useState } from "react";
import "./Mint_main.css";
import { loadWeb3 } from "../Api/Api";
import { wireNftContractAddress, wireNftContractAbi } from "../contracts/contract";
import { toast } from "react-toastify";
import Web3 from "web3";
const webSupply = new Web3("https://rpc.ankr.com/eth")
function Mint_main() {

  let [value, setValue] = useState(1);
  let [mintPriceBnb, setMintPriceBnb] = useState(0);
  let [btnOne, setButtonOne] = useState("Mint With ETH");

  const increaseValue = () => {
    if (value < 5000) {
      setValue(++value);
    }
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(--value);
    }
  };


  // const myMintBNB = async () => {
  //   let acc = await loadWeb3();

  //   if (acc == "No Wallet") 
  //   {
  //     toast.error("No Wallet Connected")
  //   }
  //   else if (acc == "Wrong Network")
  //   {
  //     toast.error("Wrong Newtwork please connect to Ethereum")
  //   }
  //   else {

  //     try {
  //       setButtonOne("Please Wait While Processing")
  //       const web3 = window.web3;
  //       let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
  //       let mintingarcPrice = await nftContractOf.methods.minting_price().call()
  //       mintingarcPrice = webSupply.utils.fromWei(mintingarcPrice);
  //       setMintPriceBnb(mintingarcPrice)
  //       let totalMintingPriceARC = value * mintingarcPrice
  //       let payableAmount = webSupply.utils.toWei(totalMintingPriceARC.toString())
  //       await nftContractOf.methods.mint(value).send({
  //         from: acc,
  //         value: payableAmount.toString()

  //       })
  //       toast.success("Transaction Confirmed")
  //       setButtonOne("Mint With ETH")
  //     }
  //     catch (e) {
  //       console.log("Error while minting ", e)
  //       toast.error("Transaction failed")
  //       setButtonOne("Mint With ETH")

  //     }

  //   }
  // }

  const mint = async () => {
    

    let acc = await loadWeb3();
    if (acc == "No Wallet") {

    }
    else if (acc == "Wrong Network") {

    } else {

        try {
            

          setButtonOne("Please Wait While Processing")
          const web3 = window.web3;
          let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
          let mintingarcPrice = await nftContractOf.methods.minting_price().call()
          mintingarcPrice = web3.utils.fromWei(mintingarcPrice);
          setMintPriceBnb(mintingarcPrice)
          let totalMintingPriceARC = value * mintingarcPrice
          let payableAmount = web3.utils.toWei(totalMintingPriceARC.toString())
          await nftContractOf.methods.mint(value).send({
            from: acc,
            value: payableAmount.toString()
  
          })
          toast.success("Transaction Confirmed")
          setButtonOne("Mint With ETH")

        } catch (e) {
          console.log("Error while minting ", e)
          toast.error("Transaction failed")
          setButtonOne("Mint With ETH")
        }
        
    }
}











  const getmintpricebnb = async () => {
    const web3 = webSupply;

    let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
    console.log('nftContractOf', nftContractOf)


    let mintingbnbPrice = await nftContractOf.methods.minting_price().call()
    mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
    console.log('mintingbnbPrice', mintingbnbPrice)
    mintingbnbPrice = parseFloat(mintingbnbPrice)

    setMintPriceBnb(mintingbnbPrice)
  }
  
  useEffect(() => {
    getmintpricebnb()
  }, [])

  return (
    <div>
      <main class="pt-[5.5rem] lg:pt-24 bnnr">

        <section class="relative bnnr" style={{ paddingTop: "50px" }}>

          <div class="container">

            <div class="mx-auto max-w-2xl pt-16 text-center">
              <h1 class="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white banner_p" style={{ color: "#fff" }}>MINT NFT</h1>
              <p class="dark:text-jacarta-300 banner_p text-lg leading-normal" style={{ color: "#fff" }}>
                An exclusive private<br></br>-members club by ARCHIENEKO
              </p>
            </div>
          </div>
        </section>
        <section className="relative mint_main " >
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            {/* <img src="gradient_light.jpg" alt="gradient" className="h-full" /> */}
          </picture>
          <div className="container">
            {/* <!-- Item --> */}

            <div className="md:flex ">
              {/* <!-- Image --> */}
              <figure className="mb-8 mint_girl md:w-3/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
                <img
                  src="Girl3.png"
                  alt="item"
                  className="rounded-2.5xl cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#imageModal"
                  width="50%"
                />

              
              </figure>

            
              <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">


                <div className="mb-8 mint_in space-x-4 whitespace-nowrap">
                  <div className="btn mint_bttn plus" onClick={() => decreaseValue()}>
                    -
                  </div>{" "}
                  <div className="">
                    <input
                      className="count-form"
                      type="text"
                      id="qa"
                      // value="1"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>{" "}
                  <div className="btn mint_bttn minus" onClick={() => increaseValue()}>
                    +
                  </div>
                </div>
                

                <div className="d-lg-flex flexxx mt-5">
                  <div className="mr-8  mint_bbbb2 ms-5 ms-md-0 ">
                    <figure className="mr-4 shrink-0 bttn">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#placeBidModal"
                        className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                        onClick={() => mint()}
                      >
                        {btnOne}
                      </a>
                    </figure>

                  </div>
                  <div>
    
                    <div className="  mint_bbbb ">


                      <div className="">
                        <a href="user.html" className="text-accent ">
                          <p className="text-sm price_eth font-bold">
                            <h1 style={{ fontSize: "28px", color: "white" }}>
                              {/* {mintingtokenPrice} */}
                              Price : {mintPriceBnb} ETH
                            </h1>
                          </p>
                        </a>
                      </div>

                    </div>
                  </div>

                </div>



              </div>

            </div>
          </div>
        </section>



      </main>

    </div>
  );
}

export default Mint_main;
