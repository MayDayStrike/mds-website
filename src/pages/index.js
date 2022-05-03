import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Splash from "../components/Homepage/Splash"
import WhoWeAre from "../components/Homepage/WhoWeAre"
import WhatDoWeWant from "../components/Homepage/WhatDoWeWant"
import WhenDoWeWantIt from "../components/Homepage/WhenDoWeWantIt"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="May Day Strike" />
      <Splash />
      <WhoWeAre />
      <WhatDoWeWant />
      <WhenDoWeWantIt />
    </Layout>
  )
}

export default IndexPage
