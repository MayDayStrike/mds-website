import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import * as AirtableLoaderModule from "./AirtableLoader.module.css"

const AirtableLoader = ({ contentDidLoad, children, height = 533 }) => (
  <div
    style={{ height: `${height}px` }}
    className={AirtableLoaderModule.container}
  >
    <div className={AirtableLoaderModule.iconPosition}>
      {!contentDidLoad && (
        <FontAwesomeIcon icon={faCircleNotch} spin size="4x" color="#C73A26" />
      )}
    </div>
    {children}
  </div>
)

AirtableLoader.propTypes = {
  contentDidLoad: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default AirtableLoader
