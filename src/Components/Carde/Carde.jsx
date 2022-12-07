import React from 'react';
import './Carde.css'

function Carde() {
  return (
    <div>
        <section class="relative benifits_mmm carde_main pt-32 pb-24">
  {/* <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
    <img src="gradient.jpg" alt="gradient" class="h-full w-full"/>
  </picture>
  <picture class="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
    <img src="gradient_dark.jpg" alt="gradient dark" class="h-full w-full"/>
  </picture> */}
  <div class="container">
    <div class="mx-auto max-w-xl text-center">
      <h5 class="font-display text-center dark:text-white" style={{color:"#F067D8"}}>Our Speciality</h5>
      <h1 class="font-display text-jacarta-700  text-center text-4xl font-medium dark:text-white">
        BENEFITS OF ARCIHIENEKO
      </h1>
      <p class="dark:text-jacarta-200 mb-16 para_graph text-lg leading-normal pppp">
      ArchieChain (ARC) is a decentralized public blockchain that has high performance and EVM compatibilities.

      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-4">
      <div class="dark:bg-jacarta-800 rounded-2.5xl  iinn p-6 text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent i_emg inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
            <img src="eye.jpg" alt="img"/>
          </div>
        </div>
        <h3 class="font-display carde_hhh hhh text-jacarta-700 mx-auto mb-4 max-w-[9.625rem] text-lg dark:text-white">
         ArchieScan
        </h3>
        <p className='para_graph'>ArchieScan is a block explorer for ARC
ArchieScan is a service on which any user can view ARC network statistics. </p>
      </div>

      <div class="dark:bg-jacarta-800 rounded-2.5xl  iinn p-6 text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent i_emg inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
             <img src="swap.jpg" alt="img"/>
          </div>
        </div>
        <h3 class="font-display carde_hhh text-jacarta-700 mx-auto max-w-[9.625rem] text-lg dark:text-white">
          ArchieSwap
        </h3>
     <p className='para_graph'>ArchieSwap is a cryptocurrency exchange which uses a decentralized network protocol
</p>
      </div>

      <div class="dark:bg-jacarta-800 rounded-2.5xl iinn p-6 text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent i_emg inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
            <img src="arc.jpg" alt="img"/>
          </div>
        </div>
        <h3 class="font-display text-jacarta-700 mx-auto  max-w-[9.625rem] carde_hhh text-lg dark:text-white">
          ArcCoin
        </h3>
        <p className='para_graph'>ArcCoin ($ARC) will be the native coin of ARC Network.
The entirety of the $ARC coins supply will be pre-mined upon the release of the main net. $ARC is used for fueling transactions, smart contracts, and dApps.</p>
      </div>
	  <div class="dark:bg-jacarta-800 rounded-2.5xl iinn p-6 text-center transition-shadow hover:shadow-xl">
        <div class="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
          <div class="bg-accent i_emg inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
              <img src="warc.jpg" alt="img"/>
          </div>
        </div>
        <h3 class="font-display carde_hhh text-jacarta-700 mx-auto  max-w-[9.625rem] text-lg dark:text-white">
         WarcCoin
        </h3>
        <p className='para_graph'>Users can lock their ArcCoin(ARC) on the cross-chain protocol to receive $WARC on the ArchieChain blockchain. Users can destroy $WARC and reclaim their native ArcCoin($ARC).

</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Carde