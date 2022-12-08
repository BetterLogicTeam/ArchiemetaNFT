import React, { useEffect, useState } from "react";
import "./Mint_main.css";
import { loadWeb3 } from "../Api/Api";
import { wireNftContractAddress, wireNftContractAbi } from "../contracts/contract";
import { wireTokenAddress, wireTokenAbi } from "../contracts/contract";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
function Mint_main() {
  // let [btnOne, setButtonOne] = useState("Mint With BNB");
  let [value, setValue] = useState(1);
  // let [mintPriceBnb, setMintPriceBnb] = useState(0);
  let [mintingtokenPrice, setMintingtokenPrice] = useState(0);
  const [userid, setuserid] = useState()
  let [mintPriceWire, setmintPriceWire] = useState(0);
  let [mintPriceBnb, setMintPriceBnb] = useState(0);
  let [btnOne, setButtonOne] = useState("Mint With ARC");
  let [btnTwo, setButtonTwo] = useState("Mint With JTO");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const increaseValue = () => {
    if (value < 5000) {
      setValue(++value);
      console.log("setValue", value);
    }
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(--value);
      console.log("setValue", value);
    }
  };
  // const [users, setUsers] = useState([])
  // let [btnOne, setButtonOne] = useState("Mint With BNB");
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
        console.log("mintFor BNB");
        const web3 = window.web3;
        let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
        let maxSupply = await nftContractOf.methods.maxsupply().call();
        let ttlSupply = await nftContractOf.methods.totalSupply().call();
        let paused = await nftContractOf.methods.paused().call();
        let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
        let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_MATIC().call()
        console.log("jjjjj", mintingbnbPrice);
        mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
        mintingbnbPrice = parseFloat(mintingbnbPrice)
        setMintPriceBnb(mintingbnbPrice)
        let totalMintingPriceBNB = value * mintingbnbPrice
        console.log("maxSupply", maxSupply);
        console.log("ttlSupply", maxLimitprTransaction);

        console.log("mintingbnbPrice", mintingbnbPrice);

        let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
        console.log("iswhitelist", typeof llisted_check);


        if (llisted_check == true) {
          if (parseInt(ttlSupply) < parseInt(maxSupply)) {
            if (paused == false) {
              if (value < parseInt(maxLimitprTransaction)) {
                console.log("Minting Value= ", value);
                console.log("Minting totalMintingPriceBNB= ", totalMintingPriceBNB);

                totalMintingPriceBNB = web3.utils.toWei(totalMintingPriceBNB.toString())


                await nftContractOf.methods.mint_with_MATIC(value).send({
                  from: acc,
                  value: 0

                })
                toast.success("Transaction Confirmed")
                setButtonOne("Mint With BNB")

              } else {
                toast.error("No of Minting is Greater than maximum limit Per Transaction")
                setButtonOne("Mint With BNB")

              }
            } else {
              toast.error("Paused is False")
              setButtonOne("Mint With BNB")

            }

          } else {
            toast.error("Max Supply is Greater than total Supply")
            setButtonOne("Mint With BNB")

          }
        }
        else {
          let BusdPrice = await nftContractOf.methods.WhitelistMintingPricein_MATIC().call();

          await nftContractOf.methods.mint_with_MATIC(value).send({
            from: acc,
            value: value * BusdPrice.toString()
          })


          toast.success("Transaction Confirmed")
          setButtonOne("Mint With BNB")


        }




      } catch (e) {
        console.log("Error while minting ", e)
        toast.error("Transaction failed")
        setButtonOne("Mint With BNB")

      }

    }
  }
  const myMintWire = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected")
    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")
    } else {
      try {
        setButtonTwo("Please Wait While Processing")
        console.log("mintFor Wire");
        const web3 = window.web3;
        let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
        let wireContractOf = new web3.eth.Contract(wireTokenAbi, wireTokenAddress);
        let userBusdBalance = await wireContractOf.methods.balanceOf(acc).call();
        userBusdBalance = web3.utils.fromWei(userBusdBalance)
        let maxSupply = await nftContractOf.methods.maxsupply().call();
        let ttlSupply = await nftContractOf.methods.totalSupply().call();
        let paused = await nftContractOf.methods.paused().call();
        let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
        let mintingWirePrice = await nftContractOf.methods.MinitngPricein_MMX().call()
        mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
        alert(mintingWirePrice)
        mintingWirePrice = parseFloat(mintingWirePrice)
        setmintPriceWire(mintingWirePrice);
        let totalMintingPriceWire = value * mintingWirePrice
        console.log("maxSupply", maxSupply);
        console.log("ttlSupply", maxLimitprTransaction);

        console.log("mintingWirePrice", mintingWirePrice);
        let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
        console.log("iswhitelist", llisted_check);


        if (llisted_check == 'true') {

          if (parseInt(ttlSupply) < parseInt(maxSupply)) {
            if (paused == false) {
              if (value < parseInt(maxLimitprTransaction)) {
                if (parseFloat(userBusdBalance) >= totalMintingPriceWire) {
                  console.log("Minting Value= ", value);
                  console.log("Minting totalMintingPriceWire= ", totalMintingPriceWire);

                  totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
                  await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
                    from: acc
                  })
                  toast.success("Transaction Confirmed")
                  setButtonTwo("Please Wait for Second Confirmation")
                  await nftContractOf.methods.mint_with_MMX(value, totalMintingPriceWire.toString()).send({
                    from: acc,
                  })
                  toast.success("Transaction Succefful")
                  setButtonTwo("Mint With JTO")

                } else {
                  toast.error("Out Of Balance")
                  setButtonTwo("Mint With JTO")

                }

              } else {
                toast.error("No of Minting is Greater than maximum limit Per Transaction")
                setButtonTwo("Mint With JTO")

              }
            } else {
              toast.error("Paused is False")
              setButtonTwo("Mint With JTO")

            }

          } else {
            toast.error("Max Supply is Greater than total Supply")
            setButtonTwo("Mint With JTO")

          }

        }
        else {

          let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_MMX().call();

          totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
          await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
            from: acc
          })

          let a = web3.utils.fromWei(BusdPrice);


          a = parseFloat(a)
          let b = a * value;
          let c = web3.utils.toWei(b.toString());


          await nftContractOf.methods.mint_with_MMX(value, c).send({
            from: acc,
          })


          setButtonTwo("Mint With JTO")


        }


      } catch (e) {
        console.log("Error while minting ", e)
        toast.error("Transaction failed")
        setButtonTwo("Mint With JTO")

      }

    }
  }







  // const myMintBNB = async () => {
  //   // console.log("res",inputValue)
  //   // setShowModal(false)
  //   let acc = await loadWeb3();
  //   // console.log("ACC=",acc)
  //   if (acc == "No Wallet") {
  //     toast.error("No Wallet Connected");
  //   } else if (acc == "Wrong Network") {
  //     toast.error("Wrong Newtwork please connect to test net");
  //   } else {
  //     try {
  //       let res = await axios.get(
  //         `https://whebuynft.herokuapp.com/checkuser?id=${inputdatahere}`
  //       );
  //       // console.log("resdatahere", res.data);
  //       res = res.data.data;

  //       if (res == 1) {
  //         try {
  //           setButtonOne("Please Wait While Processing");
  //           // console.log("mintFor BNB");
  //           const web3 = window.web3;
  //           let nftContractOf = new web3.eth.Contract(
  //             wirecontractabi,
  //             wirecontractadress
  //           );

  //           let tokenContractOf = new web3.eth.Contract(
  //             tokencontractabi,
  //             tokencontractadress
  //           );


  //           let totalnft = await nftContractOf.methods
  //             .MinitngPricein_MMX()
  //             .call();

  //           // console.log("totalnft", totalnft);

  //           if (value > totalnft) {
  //             toast.error(`Maximum Limit is ${totalnft} `);
  //           } else {
  //             let maxSupply = await nftContractOf.methods.maxsupply().call();

  //             let ttlSupply = await nftContractOf.methods.totalSupply().call();
  //             let paused = await nftContractOf.methods.paused().call();
  //             let maxLimitprTransaction = await nftContractOf.methods
  //               .MaxLimitPerTransaction()
  //               .call();
  //             let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_MMX().call();
  //             let mintingtokenPrice = await nftContractOf.methods.MinitngPricein_MATIC().call();

  //             mintingbnbPrice = parseFloat(mintingbnbPrice);
  //             mintingtokenPrice = parseFloat(mintingtokenPrice);

  //             let totalMintingPriceBNB = value * mintingbnbPrice;
  //             let totalMintingPriceToken = value * mintingtokenPrice;


  //             totalMintingPriceBNB = totalMintingPriceBNB + 0.0001;
  //             totalMintingPriceToken = totalMintingPriceToken + 0.0001;




  //             // let getdata = await axios.get(
  //             //   "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
  //             // );
  //             // getdata = getdata.data.price;
  //             // let usid = totalMintingPriceBNB * getdata;
  //             console.log("Here");

  //             // if (parseInt(ttlSupply) < parseInt(maxSupply)) {
  //             // if (paused == false) {
  //             //   if (value < parseInt(maxLimitprTransaction)) {


  //             let tkkn = await tokenContractOf.methods
  //               .approve(wirecontractadress, totalMintingPriceToken.toString())
  //               .send({ from: acc });



  //             let hash = await nftContractOf.methods
  //               .mint_with_MMX(value, totalMintingPriceToken.toString())
  //               .send({
  //                 from: acc,
  //                 value: totalMintingPriceBNB.toString(),
  //               });
  //             setButtonOne("Mint With BNB");
  //             // console.log("hash", hash.transactionHash);
  //             // tkkn = tkkn.transactionHash;
  //             hash = hash.transactionHash;
  //             mintingbnbPrice = web3.utils.fromWei(
  //               mintingbnbPrice.toString()
  //             );
  //             let postapi = await axios.post(
  //               "https://whebuynft.herokuapp.com/buynfttoken",
  //               {
  //                 uid: inputdatahere,
  //                 address: acc,
  //                 nft: value,
  //                 token: mintingbnbPrice,
  //                 txn: "hash",
  //               }
  //             );
  //             toast.success("Transaction Confirmed");

  //             // console.log("postapi", postapi);
  //             toast.success(postapi.data.data);
  //             setinputdatahere(" ");
  //             //   } else {
  //             //     toast.error(
  //             //       "No of Minting is Greater than maximum limit Per Transaction"
  //             //     );
  //             //     setButtonOne("Mint With BNB");
  //             //   }
  //             // } else {
  //             //   toast.error("Paused is False");
  //             //   setButtonOne("Mint With BNB");
  //             // }
  //             // } else {
  //             //   toast.error("Max Supply is Greater than total Supply");
  //             //   setButtonOne("Mint With BNB");
  //             // }

  //           }
  //         } catch (e) {
  //           console.log("Error while minting ", e);
  //           toast.error("Transaction failed");
  //           setButtonOne("Mint With BNB");
  //         }
  //       } else {
  //         toast.error("User Is Not Exists");
  //         setinputdatahere(" ");
  //       }
  //     } catch (e) {
  //       setinputdatahere(" ");
  //       toast.error("User Is Not Exists");
  //     }
  //   }
  // };

  // let bnb_mint = async () => {
  //   let acc = await loadWeb3();
  //   // console.log("ACC=",acc)
  //   if (acc == "No Wallet") {
  //     alert("No Wallet");
  //   } else if (acc == "Wrong Network") {
  //     alert("Wrong Network");
  //   } else {
  //     const web3 = window.web3;
  //     let wire_contract_instance = new web3.eth.Contract(
  //       wirecontractabi,
  //       wirecontractadress
  //     );

  //     const maxlimite = await wire_contract_instance.methods
  //       .MinitngPricein_MMX()
  //       .call();
  //     console.log("token_valu", maxlimite);
  //   }
  // };


  // const getMydata = async () => {
  //   let acc = await loadWeb3();

  //   try {
  //     const web3 = window.web3;
  //     let nftContractOf = new web3.eth.Contract(
  //       wirecontractabi,
  //       wirecontractadress
  //     );

  //     let mintingtokenPrice = await nftContractOf.methods.MinitngPricein_MMX().call();
  //     let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_MATIC().call();
  //     console.log("Value", mintingbnbPrice);
  //     console.log("tokenValue", mintingtokenPrice);


  //     mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
  //     mintingbnbPrice = parseFloat(mintingbnbPrice).toFixed(3);
  //     setMintPriceBnb(mintingbnbPrice);

  //     mintingtokenPrice = web3.utils.fromWei(mintingtokenPrice);
  //     mintingtokenPrice = parseFloat(mintingtokenPrice).toFixed(4);
  //     setMintingtokenPrice(mintingtokenPrice);

  //   } catch (e) {
  //     console.log("Error while getting minting Price", e);
  //   }

  // };

  const getMydata = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected")
    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")
    } else {

      try {
        console.log("mintFor BUSD");
        const web3 = window.web3;
        let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
        // let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()
        // mintingBusdPrice = web3.utils.fromWei(mintingBusdPrice);
        // mintingBusdPrice = parseFloat(mintingBusdPrice)
        // setMintPriceBUSD(mintingBusdPrice)

        let mintingWirePrice = await nftContractOf.methods.MinitngPricein_MMX().call()
        mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
        mintingWirePrice = parseFloat(mintingWirePrice)
        setmintPriceWire(mintingWirePrice);

        let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_MATIC().call()
        mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
        mintingbnbPrice = parseFloat(mintingbnbPrice)
        setMintPriceBnb(mintingbnbPrice)
      } catch (e) {
        console.log("Error while getting minting Price");
      }
    }
  }




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
  useEffect(() => {
    getMydata();
  }, []);

  return (
    <div>
      <section class="relative mint_main lg:py-24" style={{ paddingTop: "130px" }}>
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          {/* <img src="gradient_light.jpg" alt="gradient" class="h-full" /> */}
        </picture>
        <div class="container">
          {/* <!-- Item --> */}
          <div class="md:flex md:flex-wrap">
            {/* <!-- Image --> */}
            <figure class="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
              <img
                src="Girl2.png"
                alt="item"
                class="rounded-2.5xl cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
                width="40%"
              />

              {/* <!-- Modal --> */}
              <div
                class="modal fade"
                id="imageModal"
                tabindex="-1"
                aria-labelledby="buyNowModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                  <img
                    src="assets/img/hero/item-11.png"
                    alt="item"
                    width="80%"
                  />
                </div>

                <button
                  type="button"
                  class="btn-close absolute top-6 right-6"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="h-6 w-6 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                  </svg>
                </button>
              </div>
              {/* <!-- end modal --> */}
            </figure>

            {/* <!-- Details --> */}
            <div class="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
              <h1 class="font-display text-jacarta-700 mb-4 text-4xl font-semibold text-white">
                MINT
              </h1>

              <div class="mb-8 mint_in items-center space-x-4 whitespace-nowrap">
                <div className="btn mint_bttn plus" onClick={() => decreaseValue()}>
                  -
                </div>{" "}
                <div class="">
                  <input
                    class="count-form"
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

              <div className="d-lg-flex mt-5">
                <div class="mr-8  mint_bbbb2 ms-5 ms-md-0 ">
                  <figure class="mr-4 shrink-0 bttn">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                      class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                      onClick={() => myMintBNB()}
                    >
                      {btnOne}
                    </a>
                  </figure>

                </div>
                <div>
                  <div class="token_price">
                    <a href="user.html" class="text-accent">
                      <p class="text-sm font-bold">
                        <h1 style={{ fontSize: "28px" }}>

                          {/* Price : {mintPriceBnb} BNB */}
                        </h1>
                      </p>
                    </a>
                  </div>
                  <div class="  mint_bbbb ">


                    <div class="">
                      <a href="user.html" class="text-accent ">
                        <p class="text-sm font-bold">
                          <h1 style={{ fontSize: "28px", color: "white" }}>
                            {/* {mintingtokenPrice} */}
                            Price : {mintPriceBnb} ARC
                          </h1>
                        </p>
                      </a>
                    </div>

                  </div>
                </div>

              </div>



              {/* <div className="d-lg-flex mt-5">
                <div class="mr-8  mint_bbbb2 ms-5 ms-md-0 ">
                  <figure class="mr-4 shrink-0 bttn">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                      class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                    onClick={() => myMintWire()}
                    >
                      {btnTwo}
                    </a>
                  </figure>

                </div>
                <div>
                  <div class="token_price">
                    <a href="user.html" class="text-accent">
                      <p class="text-sm font-bold">
                        <h1 style={{ fontSize: "28px" }}>
                         
                          
                        </h1>
                      </p>
                    </a>
                  </div>
                  <div class="  mint_bbbb ">


                    <div class="">
                      <a href="user.html" class="text-accent ">
                        <p class="text-sm font-bold">
                          <h1 style={{ fontSize: "28px" }}>
                            
                            Price :{mintPriceWire} JTO
                          </h1>
                        </p>
                      </a>
                    </div>
                    
                  </div>
                </div>

              </div> */}

              {/* <!-- Creator / Owner --> */}


              {/* <div class="mb-8 flex flex-wrap">
                <div class="mr-8 mb-4 flex">
                  <figure class="mr-4 shrink-0">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#placeBidModal" 
                    class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all">Mint With JTO</a>
                  </figure>
                  <div class="flex flex-col justify-center">
                     <a href="user.html" class="text-accent block">
                      <span class="text-sm font-bold"><h1 style={{fontSize:"28px"}}> {mintingtokenPrice} Jutto Token</h1></span>
                    </a>
                  </div>
                </div>
             </div> */}
              {/* <!-- Creator / Owner --> */}
              {/* <div class="mb-8 flex flex-wrap">
                <div class="mr-8 mb-4 flex">
                  <figure class="mr-4 shrink-0">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#placeBidModal" 
                    class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full 
                    rounded-full py-3 px-8 text-center font-semibold text-white transition-all">Mint With Busd</a>
                  </figure>
                  <div class="flex flex-col justify-center">
                     <a href="user.html" class="text-accent block">
                      <span class="text-sm font-bold"><h1 style={{fontSize:"28px"}}>Price : 0 Busd</h1></span>
                    </a>
                  </div>
                </div>
             </div> */}
            </div>
            {/* <!-- end details --> */}
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

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>Password</Form.Label>
                                                            <Form.Control type="text" className='text-white' placeholder="enter here" />
                                                        </Form.Group> */}
          {/* <a href="#" class="default-btn move-right" onClick={() => { CheckSponserid() }}>
            <span >submit</span>{" "}
          </a> */}
          <div className="btn minus" onClick={() => { CheckSponserid() }}>
            submit
          </div>

        </Modal.Body>

      </Modal>
    </div>
  );
}

export default Mint_main;





// let totalMintingPriceBNB = value * mintingbnbPrice;
// let totalMintingPriceToken = value * mintingtokenPrice;


// totalMintingPriceBNB = totalMintingPriceBNB + 0.0001;
// totalMintingPriceToken = totalMintingPriceToken + 0.0001;