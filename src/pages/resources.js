import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const ResourcesPage = () => (
  <Layout>
    <Seo title="Resource Library" />
    <div>
      <h1>Resource Library</h1>
      <p>
        The May Day Library is a collaborative effort to consolidate and categorize educational resources pertaining to protests, strikes, other forms of action necessary for change.
      </p>
      <b>
        Resource Library Contact:
      </b> Reave (<span style={{ color: '#C73A26'}}><FontAwesomeIcon icon={faDiscord} /></span>: Reave-Eye#2665)
      <br/>
      <br/>
      <h2>Protest Info</h2>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrJwKDHVAnVNs40w?backgroundColor=yellow&viewControls=on"
        frameborder={0}
        onmousewheel=""
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
    </div>
    <h2>Organizing & Coordinating</h2>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrMArNGj0J1BMx6t?backgroundColor=yellow&viewControls=on"
        frameborder={0}
        onmousewheel=""
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
    <h2>Useful tools & Websites</h2>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shr9mDTeWpuHPTSCS?backgroundColor=yellow&viewControls=on"
        frameborder={0}
        onmousewheel=""
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
  </Layout>
)

export default ResourcesPage
