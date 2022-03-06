import React from "react"
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
    </div>
  </section>
)

export default WhoWeAre
