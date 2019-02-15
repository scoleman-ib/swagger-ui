import React from "react"
import PropTypes from "prop-types"

export default class AvailableApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apps: ["loading..."]};
  }

  static propTypes = {
    domain: PropTypes.string,
    app_names: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    domain: "http://swag.sdp.infoblox.com",
    app_names: ["contacts-app", "authn"]
  }

  async getAppList() {
    if (this.state.apps[0] == "loading...") {
      fetch('/ENDPOINT/docs/list/allapps', { method: "GET", headers: {"Accept": "application/json"}}).then(resp => resp.json()).then(res => this.setState({apps: res.apps}));
      console.log(this.state.apps);
    }
  }

  render() {
    this.getAppList()
    console.log(this.state.apps)
    let domain = window.location.origin;
    if (this.state.apps[0] == "loading...") {
      return (
      <div className="availableapps">
        <h1>BloxOne API</h1>
            <li>loading...</li>
      </div>
      )
    }
    const listItems = this.state.apps.map((name) =>
          <li><a href={domain +'/ENDPOINT/?url=' + domain + '/ENDPOINT/docs/'+ name}>{name}</a></li>);
    console.log(window.location)

    return (
      <div className="availableapps">
        <h1>BloxOne API</h1>
            {listItems}
      </div>
    )
  }
}
