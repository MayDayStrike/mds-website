import * as React from "react"
import Events from "../components/Events"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const EventsPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Events" />
    <Events />
  </Layout>
)

export default EventsPage
