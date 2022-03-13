import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import * as HeaderStyles from "./header.module.css"
import MenuBar from "../MenuBar"

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(100)

  return (
    <>
      <header id="header-container" className={HeaderStyles.headerContainer}>
        <div style={{ marginLeft: '0.5rem' }}>
          <Link className={HeaderStyles.siteTitleLink} to="/">
            <StaticImage
              src="../../images/mayday-logo-circle.png"
              width={60}
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

export default Header
