/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useLayoutEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import "./layout.css"
import Footer from "../Footer"

const Layout = ({ location, children }) => {
  const [isExemptFromMaxWidth, setIsExemptFromMaxWidth] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useLayoutEffect(() => {
    const exemptRoutes = ["/"]
    const isExempt = exemptRoutes.some(route => location.pathname === route)

    setIsExemptFromMaxWidth(isExempt)
  }, [location])

  return (
    <div className="content">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          minHeight: "calc(100vh - (305.75px + 244px))", // make sure the footer always touches the bottom of the page by subtracting the height of the header and footer from the height of the page
          maxWidth: isExemptFromMaxWidth ? "none" : 960,
          padding: isExemptFromMaxWidth ? "0" : `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer className="footer" />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
