import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <section className="relative hero_main pb-10  md:pt-32 lg:h-[88vh]">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src="gradient.jpg" alt="gradient" />
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src="gradient_dark.jpg" alt="gradient dark" />
        </picture>

        <div className="container h-full">
          <div className="grid h-full items-center  md:grid-cols-12">

          


            <div className="col-span-6 hero flex h-full flex-col items-center  justify-center py-10 md:items-start md:py-20 xl:col-span-6">
              <h1 className="text-jacarta-700  font-display mb-6  text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl">
                Hello ArchieNeko Family
              </h1>
              <p className="dark:text-white-200 para_grap mb-8  text-lg md:text-left">
                We are creating an NFT collection called “ArchieMeta NFT”. As you all requested, it will be based on ETH  and be available to mint.
              </p>
              
            </div>

            <div class="col-span-6 xl:col-span-6 hero_div items-end">
              <div className="home_maine_div">
                <img src="Girl3.png" className="gift" alt="" />
                {/* <img src="3D_elements.png" alt="" class="animate-fly hero2  " /> */}
              </div>

              <div className="col-span-6 hero note_2 flex h-full flex-col items-center  justify-center py-10 md:items-start md:py-20 xl:col-span-6">
              <h6 className="text-jacarta-700  font-display mb-6 text-white  text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl">
                NOTE:
              </h6>
              <p className="dark:text-white-200 para_grap mb-8  text-lg md:text-left">
              If you are using a mobile device (phone or tablet) please sign into your wallet and connect the dapp <a className="blue" href="https://archiemetanft.com/" target="_blank">www.archiemetanft.com</a> in the wallet browser and then mint.
              </p>
              
              <a className="blue" href="https://www.youtube.com/watch?v=IInLiMEsv0k" target="_blank">How To Mint?</a>
            </div>

            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
