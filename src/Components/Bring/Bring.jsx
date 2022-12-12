import React from 'react';
import './Bring.css'

function Bring() {
  return (
    <div>
      <section class="relative benifits_mmm road_main pt-32 pb-24">
        {/* <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
    <img src="gradient.jpg" alt="gradient" class="h-full w-full"/>
  </picture>
  <picture class="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
    <img src="gradient_dark.jpg" alt="gradient dark" class="h-full w-full"/>
  </picture> */}
        <div class="container">
          <div class="mx-auto max-w-xl text-center">
            <h5 class="font-display text-center dark:text-white" style={{ color: "#F067D8" }}>Road Map</h5>
            <h1 class="font-display text-jacarta-700 mb-6 text-center text-4xl font-medium dark:text-white">
              The Journey of the ArchieMeta </h1>
          </div>
          {/* <!--section2-->  */}
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline5">
                <div class="timeline">
                  <div class="timeline-icon"><span class="year">01.</span></div>
                  <div class="timeline-content">
                    <h3 class="title">Launch ArchieMeta NFTs</h3>
                    <p class="description">
                      Many non-utility NFTs have no real value other than the value a buyer or community believes it to have, based upon the rarity of its collectability or current hype surrounding the subject.

                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon"><span class="year">02.</span></div>
                  <div class="timeline-content">
                    <h3 class="title">Island of Archie </h3>
                    <p class="description">
                      Island of Archie is a 13000 acres (20 Sq Miles) island system to represent our ArchieMeta.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon"><span class="year">03.</span></div>
                  <div class="timeline-content">
                    <h3 class="title">Archie Metaverse</h3>
                    <p class="description">
                      Archie Metaverse (Island of Archie ), a photorealistic metaverse island built on its own unique Archie blockchain.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <div class="timeline-icon"><span class="year">04.</span></div>
                  <div class="timeline-content">
                    <h3 class="title">Archie Wallet</h3>
                    <p class="description">
                      Security at the topmost priority. 3FA wallet with the ability to create upto 100 sub-wallets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Bring