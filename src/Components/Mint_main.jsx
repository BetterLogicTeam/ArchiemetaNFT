import React, { useEffect, useState } from "react";
import "./Mint_main.css";
import { loadWeb3 } from "../Api/Api";
import { wireNftContractAddress, wireNftContractAbi } from "../contracts/contract";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
// import web3 from "web3";
import Web3 from "web3";
const webSupply = new Web3("https://rpc.ankr.com/eth")
function Mint_main() {
  // let [btnOne, setButtonOne] = useState("Mint With BNB");
  let [value, setValue] = useState(1);
  // let [mintPriceBnb, setMintPriceBnb] = useState(0);
  let [mintingtokenPrice, setMintingtokenPrice] = useState(0);
  const [userid, setuserid] = useState()
  let [mintPriceWire, setmintPriceWire] = useState(0);
  let [mintPriceBnb, setMintPriceBnb] = useState(0);
  let [btnOne, setButtonOne] = useState("Mint With ETH");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const increaseValue = () => {
    if (value < 5000) {
      setValue(++value);
      // console.log("setValue", value);
    }
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(--value);
      // console.log("setValue", value);
    }
  };

  const [inputdatahere, setinputdatahere] = useState("100");



  const myMintBNB = async () => {

    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected")
    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")
    } else {
      try {




        setButtonOne("Please Wait While Processing")
        // console.log("mintFor BNB");
        const web3 = window.web3;
        let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);




        let paused = await nftContractOf.methods.paused().call();
        // let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
        let mintingbnbPrice = await nftContractOf.methods.minting_price().call()

        mintingbnbPrice = parseFloat(mintingbnbPrice)

        let totalMintingPriceBNB = value * mintingbnbPrice

        // let payableAmount = webSupply.utils.toWei(totalMintingPriceBNB.toString())


        if (paused !== false) {


          let hash = await nftContractOf.methods.mint(value).send({
            from: acc,
            value: totalMintingPriceBNB.toString()

          })
          setButtonOne("Mint With BNB")

          toast.success("Transaction Confirmed")


          setinputdatahere(" ")



        } else {
          toast.error("No of Minting is Greater than maximum limit Per Transaction")
          setButtonOne("Mint With BNB")

        }









      } catch (e) {
        setinputdatahere(" ")
        console.log("Error", e);
        setButtonOne("Mint With BNB")


      }

    }
  }



  // const myMintBNB = async () => {
  //   let acc = await loadWeb3();

  //   if (acc == "No Wallet") {
  //     toast.error("No Wallet Connected")
  //   }
  //   else if (acc == "Wrong Network") {
  //     toast.error("Wrong Newtwork please connect to Ethereum")
  //   }
  //   else {
  //     try {
  //       setButtonOne("Please Wait While Processing")
  //       const web3 = window.web3;
  //       let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
  //       let mintingarcPrice = await nftContractOf.methods.minting_price().call()

  //       // console.log("mintForB",nftContractOf.methods);
  //       mintingarcPrice = webSupply.utils.fromWei(mintingarcPrice);

  //       setMintPriceBnb(mintingarcPrice)
  //       let totalMintingPriceARC = value * mintingarcPrice

  //       // console.log("mintingbnbPrice", totalMintingPriceARC);
  //       let payableAmount = webSupply.utils.toWei(totalMintingPriceARC.toString())
  //       // console.log("payableAmount", payableAmount);
  //       // alert(payableAmount)


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










  const CheckSponserid = async () => {
    console.log('what is user id inside function', userid)
    handleClose()
    let res = await axios.get(`https://metahorse.herokuapp.com/checkuser?id=${userid}`);
    console.log("res", res.data.data);
    if (res.data.data == 1) {
      myMintBNB()
    }
    else {
      toast.error("user is not exsist")
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
    // getMydata();
  }, []);
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

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="imageModal"
                  tabindex="-1"
                  aria-labelledby="buyNowModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                    <img
                      src="assets/img/hero/item-11.png"
                      alt="item"
                      width="80%"
                    />
                  </div>

                  <button
                    type="button"
                    className="btn-close absolute top-6 right-6"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-6 w-6 fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                    </svg>
                  </button>
                </div>
                {/* <!-- end modal --> */}
              </figure>

              {/* <!-- Details --> */}
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
                {/* <!-- Creator / Owner --> */}

                <div className="d-lg-flex flexxx mt-5">
                  <div className="mr-8  mint_bbbb2 ms-5 ms-md-0 ">
                    <figure className="mr-4 shrink-0 bttn">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#placeBidModal"
                        className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                        onClick={() => myMintBNB()}
                      >
                        {btnOne}
                      </a>
                    </figure>

                  </div>
                  <div>
                    <div className="token_price">
                      <a href="user.html" className="text-accent">
                        <p className="text-sm font-bold">
                          <h1 style={{ fontSize: "28px" }}>

                            {/* Price : {mintPriceBnb} BNB */}
                          </h1>
                        </p>
                      </a>
                    </div>
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
        <Modal show={show} onHide={handleClose} className="" centered >
          {/* <Modal.Header closeButton style={{ backgroundColor: "#3a1f05" }}>
                                                        <Modal.Title className='text-white'>Sponser ID</Modal.Title>
                                                    </Modal.Header> */}
          <Modal.Body >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Id</Form.Label>
              <Form.Control type="number" value={userid} onChange={(e) => setuserid(e.target.value)} className='' placeholder="Enter here" />

            </Form.Group>


            <div className="btn minus" onClick={() => { CheckSponserid() }}>
              submit
            </div>

          </Modal.Body>

        </Modal>


      </main>

    </div>
  );
}

export default Mint_main;
