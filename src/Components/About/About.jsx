import React from 'react';
import './About.css'

function About() {
  return (
    <div>
      <section Class="bg-accent about_main dark:bg-jacarta-800 relative py-24">
        <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="gradient_light.jpg" alt="gradient" class="h-full w-full" />
        </picture>
        <div class="container">
          <div class="lg:flex lg:justify-between">
            <div className="home_maine_div achaaww">
              <img src="Girl3.png" className="gift2" alt="" />

            </div>


            <div class="py-20 lg:w-[45%] ">
              <h5 class="font-display dark:text-white About_Heading_1 text-left" style={{color:"#F067D8"}}s >About Us</h5>
              <h2 class="text-jacarta-700 font-display mb-6 text-2xl light:text-white d-flex justify-center items-center" style={{ color: "#fff", fontWeight: "600" }}>
                <img className='w-50' src="history.png" alt="" />
              </h2>
              <p class="dark:text-jacarta-300 mb-8 text-lg leading-normal About_Heading_1 text-left" style={{ color: "#fff" }}>
                Our project was created with our holder in mind and we have done everything in our ability to keep that word and yet volatile pricing in the crypto market caused our chart a lot
              </p>
              <p class="dark:text-jacarta-300 text-lg mb-10 text-left About_Heading_1" style={{ color: "#fff" }}>
                We have decided as a community to create our own Layer 1 Block Chain and support upcoming Metaverse (ARCHIE META) project.
                The need exists to change the current crypto space where the value of your project is only tied to hype and buying or selling the coin/token

              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About