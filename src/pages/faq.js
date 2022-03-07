import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import FAQList from "../components/FAQList"

const FAQPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Frequently Asked Questions" />
    <FAQList />
  </Layout>
)

export default FAQPage
