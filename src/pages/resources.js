import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import AirtableLoader from "../components/AirtableLoader"

const ResourcesPage = ({ location }) => {
  const [protestInfoDidLoad, setProtestInfoDidLoad] = useState(false)
  const [mutualAidOrgsByStateDidLoad, setMutualAidOrgsByStateDidLoad] =
    useState(false)
  const [usUnionsDidLoad, setUSUnionsDidLoad] = useState(false)
  const [ukUnionsDidLoad, setUKUnionsDidLoad] = useState(false)
  const [
    organizingAndCoordinatingDidLoad,
    setOrganizingAndCoordinatingDidLoad,
  ] = useState(false)
  const [usefulToolsAndWebsitesDidLoad, setUsefulToolsAndWebsitesDidLoad] =
    useState(false)

  return (
    <Layout location={location}>
      <Seo title="Resource Library" />
      <h1 style={{ marginTop: "3rem" }}>Resource Library</h1>
      <div style={{ marginBottom: "3rem" }}>
        <p>
          The May Day Library is a collaborative effort to consolidate and
          categorize educational resources pertaining to protests, strikes,
          other forms of action necessary for change.
        </p>
        <b>Resource Library Contact:</b> Reave (
        <span style={{ color: "#C73A26" }}>
          <FontAwesomeIcon icon={faDiscord} />
        </span>
        : Reave#2665)
      </div>

      <h2>Protest Info</h2>
      <AirtableLoader contentDidLoad={protestInfoDidLoad}>
        <iframe
          onLoad={() => setProtestInfoDidLoad(true)}
          title="Protest Info"
          className="airtable-embed"
          src="https://airtable.com/embed/shrJwKDHVAnVNs40w?backgroundColor=yellow&viewControls=on"
          frameBorder={0}
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        />
      </AirtableLoader>

      <h2>Mutual Aid Orgs by State</h2>
      <AirtableLoader contentDidLoad={mutualAidOrgsByStateDidLoad}>
        <iframe
          onLoad={() => setMutualAidOrgsByStateDidLoad(true)}
          title="Mutual Aid Orgs by State"
          className="airtable-embed"
          src="https://airtable.com/embed/shrWssU2O1aMl3gzD?backgroundColor=yellow&viewControls=on"
          frameBorder={0}
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        />
      </AirtableLoader>

      <h2>US Unions</h2>
      <AirtableLoader contentDidLoad={usUnionsDidLoad}>
        <iframe
          onLoad={() => setUSUnionsDidLoad(true)}
          title="US Unions"
          className="airtable-embed"
          src="https://airtable.com/embed/shrI5FYFGM34EQSQE?backgroundColor=teal&viewControls=on"
          frameBorder="0"
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        />
      </AirtableLoader>

      <h2>UK Unions</h2>
      <AirtableLoader contentDidLoad={ukUnionsDidLoad}>
        <iframe
          onLoad={() => setUKUnionsDidLoad(true)}
          title="UK Unions"
          className="airtable-embed"
          src="https://airtable.com/embed/shr9lrjVADN8hr7ho?backgroundColor=red&viewControls=on"
          frameBorder="0"
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        />
      </AirtableLoader>

      <h2>Organizing &amp; Coordinating</h2>
      <AirtableLoader contentDidLoad={organizingAndCoordinatingDidLoad}>
        <iframe
          onLoad={() => setOrganizingAndCoordinatingDidLoad(true)}
          title="Organizing & Coordinating"
          className="airtable-embed"
          src="https://airtable.com/embed/shrMArNGj0J1BMx6t?backgroundColor=yellow&viewControls=on"
          frameBorder={0}
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        />
      </AirtableLoader>
      <h2>Useful tools &amp; Websites</h2>
      <AirtableLoader contentDidLoad={usefulToolsAndWebsitesDidLoad}>
        <iframe
          onLoad={() => setUsefulToolsAndWebsitesDidLoad(true)}
          title="Useful tools & Websites"
          className="airtable-embed"
          src="https://airtable.com/embed/shr9mDTeWpuHPTSCS?backgroundColor=yellow&viewControls=on"
          frameBorder={0}
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        />
      </AirtableLoader>
    </Layout>
  )
}

export default ResourcesPage
