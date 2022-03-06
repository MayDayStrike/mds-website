import React from "react"
import DemandList from "../../DemandList"
import * as WhatDoWeWantModule from "./WhatDoWeWant.module.css"

const WhatDoWeWant = () => (
  <section className={WhatDoWeWantModule.whatDoWeWantContainer}>
    <div className={WhatDoWeWantModule.textContainer}>
      <h1>What do we want?</h1>
      <DemandList />
    </div>
  </section>
)

export default WhatDoWeWant
