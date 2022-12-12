import React from 'react'
import About from './About/About'

function About_main() {
  return (
    <div>
      <main class="pt-[5.5rem] lg:pt-24 bnnr">
        <section class="bnnr relative" style={{ paddingTop: "75px" }}>
          {/* <picture class="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img src="banner.jpg" alt="gradient" class="h-full w-full"/>
        </picture> */}
          <div class="container">
            {/* <!-- Page Title --> */}
            <div class="mx-auto max-w-2xl pt-16 text-center">
              <h1 class="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white banner_p" style={{ color: "#fff" }}>About ARCHIENEKO</h1>
              <p class="dark:text-jacarta-300  text-lg leading-normal" style={{ color: "#fff" }}>
                An exclusive private<br></br>-members club by ArchieMeta.
              </p>
            </div>
          </div>
        </section>
        <About />
      </main>
    </div>
  )
}

export default About_main