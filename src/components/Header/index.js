import React, { useLayoutEffect, useState } from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import * as HeaderStyles from "./header.module.css"
import MenuBar from "../MenuBar"

const Header = ({ siteTitle }) => {
  const [headerHeight, setHeaderHeight] = useState(
    document.querySelector("header#header-container")?.getBoundingClientRect()
      .height ?? 0
  )

  return (
    <>
      <header id="header-container" className={HeaderStyles.headerContainer}>
        <div style={{ minWidth: 100 }}>
          <Link className={HeaderStyles.siteTitleLink} to="/">
            <StaticImage
              src="../../images/mayday-logo-circle.png"
              width={100}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="May Day Strike"
            />
          </Link>
        </div>
        <MenuBar emitHeightChange={height => setHeaderHeight(height)} />
      </header>

      <div style={{ height: `${headerHeight}px` }} className="spacer" />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
