import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import * as EventStyles from "./events.module.css"

const Events = () => (
  <div className={EventStyles.eventContainer}>
    <h1 style={{ marginTop: "3rem" }}>Upcoming Events</h1>
    <div style={{ marginBottom: '2rem' }}>
      <b>
        Outreach Coordinator:
      </b> Mary Jane (<span style={{ color: '#C73A26'}}><FontAwesomeIcon icon={faDiscord} /></span>: Mary Jane#1208)
    </div>
    <div>
      <h2>April</h2>
      <ul>
        <li>
          <span className={EventStyles.date}>4.04 •</span> Washington, DC - <a href="https://debtcollective.org/" target="_blank">The Debt Collective</a> - March on Washington to Cancel Student Debt
        </li>
        <li>
          <span className={EventStyles.date}> 4.24 •</span> Richmond, VA - SBWorkers United and Bernie Sanders - Unity Fest
        </li>
      </ul>
      <h2>May</h2>
      <ul>
        <li><span className={EventStyles.date}> 5.01 •</span> Little Rock, Arkansas - WithoutUs Strike - May Day Event</li>
        <li><span className={EventStyles.date}> 5.01 •</span> Kansas City, Missouri - WithoutUs Strike  - May Day Event</li>
        <li><span className={EventStyles.date}> 5.01 •</span> Los Angeles, California - WithoutUs Strike - May Day Event</li>
        <li><span className={EventStyles.date}> 5.01 •</span> San Antonio, Texas - WithoutUs Strike - May Day Event</li>
        <li><span className={EventStyles.date}> 5.01 •</span> Dallas, Texas - WithoutUs Strike  - May Day Event</li>
        <li><span className={EventStyles.date}> 5.01 •</span> Athens, Georgia - WithoutUs Strike - May Day Event</li>
        <li><span className={EventStyles.date}> 5.01 •</span> Boston, Massachusetts - May Day Strike - May Day Event</li>
        <li><span className={EventStyles.date}> 5.01 •</span> Atlanta, Georgia - May Day Strike - May Day Event</li>
        <li><span className={EventStyles.date}> 5.01 •</span> Chicago, Illinois - <a href="https://www.proletariatusa.org/events/unite-the-left-2022" target="_blank">Proletariat Representation USA - Unite The Left</a></li>
        <li><span className={EventStyles.date}> 5.01 •</span> Washington, DC - <a href="https://debtcollective.org/" target="_blank">The Debt Collective</a> - <a href="https://actionnetwork.org/forms/cant-pay-wont-pay-join-the-student-debt-strike" target="_blank">Student Debt Strike</a></li>
        <li><span className={EventStyles.date}> 5.08 - 5.15 • </span> Atlanta, Georgia - <a href="https://defendtheatlantaforest.com" target="_blank">Atlanta Forest Defense</a> - May Week of Action</li>
      </ul>
      <h2>June</h2>
      <ul>
        <li>
          <span className={EventStyles.date}> 6.18 •</span> Washington, DC - <a href="https://www.poorpeoplescampaign.org/june-18-2022/" target="_blank">Poor People's Campaign - March on Washington</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Events