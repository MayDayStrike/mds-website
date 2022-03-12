import React from "react"
import * as WhenDoWeWantItModule from "./WhenDoWeWantIt.module.css"
import * as WhenBG from "./when-svg.inline.svg"

const WhenDoWeWantIt = () => (
  <section className={WhenDoWeWantItModule.whenDoWeWantItContainer}>
    <div className={WhenDoWeWantItModule.contentContainer}>
      <h1 className={WhenDoWeWantItModule.heading}>When do we want it?</h1>
      <div className={WhenDoWeWantItModule.svgContainer}>
        <WhenBG />
      </div>
    </div>
  </section>
)

export default WhenDoWeWantIt
