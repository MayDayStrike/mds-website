import React from "react"
import SplashPage from "./SplashPage.inline.svg"
import * as SplashModule from "./Splash.module.css"

const Splash = () => (
  <section className={SplashModule.container}>
    <div className={SplashModule.svgContainer}>
      <SplashPage />
    </div>
  </section>
)

export default Splash
