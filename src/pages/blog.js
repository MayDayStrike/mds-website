import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"


const BlogPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="The Origin of May Day" />
    <Link to="/" style={{ position: 'absolute', top: 65, left: 18 }}>
      <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 4 }} />
      Back
    </Link>
    <h1 style={{ marginTop: "3rem" }}>The Origin of May Day</h1>
    <div className="blog-container" style={{ marginBottom: '3rem' }}>
      <p>
        May 1st, known around the world as International Workers Day or May Day for short, is a celebration of the rights won by the working class of the world. Like many other days of recognition, workers earned May Day.
      </p>
      <h3>The Fight for an 8 Hour Work Day</h3>
      <p>
        The predecessor to what is now the AFL-CIO, the Federation of Organized Trades and Labor Unions, called for a nationwide movement to demand an 8-hour workday in 1884. Laws already enacted protected the 8-hour workday, but the federal government failed to enforce them. In Illinois, employers forced workers to sign a waiver exempting them from the 8-hour day by their employers across the board.
      </p>
      <p>
        Laborers, socialists, communists, and anarchists worked together for two years to organize protests across the nation. They selected May 1st, 1886 as the day of action.
      </p>
      <p>
        On the third day of protests, workers gathered at the McCormick Harvesting Machine Company to protect strikers from strikebreakers and protest working conditions. Police opened fire on strikers, leaving several injured and one dead.
      </p>
      <h3>The Haymarket Affair</h3>
      <p>
        August Spies, a German immigrant and editor of anarchist publication “Arbieter-Zeitung,” witnessed the violence. He published a leaflet, “Workingmen, to Arms,” denouncing the incident and inspiring anarchist groups to organize a mass protest against the police brutality in the center of Chicago's food market, Haymarket Square.
      </p>
      <p>
        The next day, on May 4th 1886, over 2,000 activists filled Haymarket Square. Chicago Mayor Carter Harrison declared the protest as peaceful and attended it in person.
      </p>
      <p>
        Most protestors had left the event when at around 10: 30 PM armed Chicago police moved in to disperse around 200 activists from Haymarket Square. A dynamite bomb was thrown into the encroaching police and gunfire followed. The violence left seven police officers and at least four civilians dead. An eighth police officer died from his injuries two years later.
      </p>
      <h3>Over 100 Injured</h3>
      <p>
        The number of injured was difficult to confirm, as some did not seek medical attention for fear of arrest. Some reports said up 70 civilians and 50 police officers sustained injuries. Also disputed is how many civilians fired weapons. Some reports say that friendly fire among police officers occurred in the chaos.
      </p>
      <p>
        A grand jury indicted eight men for criminal conspiracy, accessory to the murder of police officer Mathias Degan and many other charges.
      </p>
      <p>
        Three charged were associated with “Arbeiter-Zeitung”:
      </p>
      <ul>
        <li>August Spies, editor</li>
        <li>Michael Schwab, editorial assistant</li>
        <li>Adolph Fischer, typesetter</li>
      </ul>
      <p>
        Four were arrested as known radicals
      </p>
      <ul>
        <li>Albert Parsons, a speaker at the rally;</li>
        <li>ev. Samuel Fielden, a speaker at the rally;</li>
        <li>Geoge Engel, did not attend the event</li>
        <li>Oscar Neebe, did not attend the event.</li>
      </ul>
      <p>
        The eighth man, Louis Lingg, also did not attend the event. Police searched his home and found bomb-making materials. Lingg’s landlord, William Seliger, was also arrested, but charges were dropped after he agreed to testify as a witness for the prosecution.
      </p>
      <p>
        Rudolf Schnaubelt, who police suspected as the bomb thrower, fled the country.
      </p>
      <h3>Conviction and Execution</h3>
      <p>
        All eight men were tried together and convicted. The judge sentenced Neebe to 15 years in prison. The other seven men were sentenced to death by hanging.
      </p>
      <p>
        Outraged labor groups across the world protested in response to the verdict.
      </p>
      <p>
        Despite several concerns about the trial, including a hostile judge, jury selection practices, and a lack of evidence, courts denied all appeals. The U.S. Supreme Court declined to hear the case.
      </p>
      <p>
        On November 10, 1887, Illinois Governor Richard James Oglesby commuted Fielden’s and Schwab’s sentences to life in prison. Lingg committed suicide the night in prison. Engel, Fischer, Parsons, and Spies were executed by hanging the next day, November 11.
      </p>
      <p>
        In June 1893, Illinois Governor John Peter Altgeld signed pardons for Fielden, Neebe, and Schwab, which set them free.
      </p>
      <p>
        In 1889, the American Federation of Labor requested May 1st to be set aside as International Labor Day at an international labor conference in Paris.
      </p>
    </div>
  </Layout>
)

export default BlogPage
