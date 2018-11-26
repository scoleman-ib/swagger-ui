import React from "react"
import PropTypes from "prop-types"

export default class AppsContainer extends React.Component {

  render () {

    const Apps = getComponent("AvailableApps")

    return (
      <div>
          <Apps domain={"swag.sdp.infoblox.com"} externalDocs={["contacts-app", "authn"]}
                getComponent={getComponent}/>
      </div>
    )
  }
}
