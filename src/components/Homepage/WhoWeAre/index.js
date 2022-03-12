import React from "react"
import { Link } from "gatsby"
import * as WhoWeAreStyles from "./WhoWeAre.module.css"

const WhoWeAre = () => (
  <section className={WhoWeAreStyles.whoWeAreContainer}>
    <div className={WhoWeAreStyles.textContainer}>
      <h1>Who are we?</h1>
      <p>
        {" "}
        May Day Strike is a grassroots movement focused on establishing economic
        security, dignity, and fairness for workers of every nationality, race,
        and political affiliation.
      </p>
      <p>
        May 1st kicks off a series of direct action events supporting workers
        everywhere who are organizing for better conditions and demanding basic
        human rights. These actions will include a wave of protests, economic
        strikes, debt strikes, and union action{" "}
        <a href="https://twitter.com/search?q=%23UntilDemandsAreMet&src=typed_query&f=top">
          #UntilDemandsAreMet
        </a>
        !
      </p>
      <p style={{ marginTop: '3rem', textAlign: 'center', padding: '0 2px' }}>
        Learn how May Day came to exist, what it represents, and who lost their lives to establish it
      </p>
      <Link to="/blog">
        <button style={{ margin: '0 auto', display: 'block' }}>Learn More</button>
      </Link>
    </div>
  </section>
)

export default WhoWeAre
