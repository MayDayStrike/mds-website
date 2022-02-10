import { Link } from "gatsby"
import * as React from "react"
import DemandList from "../components/DemandList"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import SignupForm from "../components/SignupForm"

const IndexPage = () => (
  <Layout>
    <Seo title="May Day Strike" />
    <div style={{ marginBottom: "3rem" }}>
      <h2>Who We Are</h2>
      <p>
        May Day Strike is a grassroots movement focused on establishing economic
        security, dignity, and fairness for workers of every nationality, race,
        and political affiliation.
      </p>
      <p>
        May 1 will mark the beginning of a general strike, a debt strike, and a
        series of protests & demonstrations that will last until workers’
        demands are met.
      </p>
      <p>What are we asking for, exactly?</p>
    </div>
    <DemandList />
    <p>
      Join us on Discord and social media to become part of the new era of labor
      organization in the United States and across the globe.
    </p>
    <p>
      <Link to="/faq">Frequently Asked Questions</Link>
    </p>
    <SignupForm />
  </Layout>
)

export default IndexPage
