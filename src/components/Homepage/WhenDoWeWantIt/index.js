import React from "react"
import * as WhenDoWeWantItModule from "./WhenDoWeWantIt.module.css"
import * as Details from "./Details.inline.svg"
import * as Fist from "./Fist.inline.svg"

const WhenDoWeWantIt = () => (
  <section className={WhenDoWeWantItModule.whenDoWeWantItContainer}>
    <div className={WhenDoWeWantItModule.contentContainer}>
      <h1 className={WhenDoWeWantItModule.heading}>When do we want it?</h1>

      <div className={WhenDoWeWantItModule.svgContainer}>
        <Fist />
        <Details />
      </div>
    </div>
  </section>
)

export default WhenDoWeWantIt
