import React, { Component } from 'react'

class BusinessItem extends Component {
    constructor () {
        super();
        this.state = {
            links: 'https://api.data.gov/sam/v3/registrations?qterms=GSA&start=1&length=10"',
            samAddress: '"zip":"20164","stateOrProvince":"VA","city":"STERLING","countryCode":"USA","zip4":"2706","line1":"1310 E MAPLE AVE"'

        }
    }
    render() {
        return (
            <div className="card text-center">
                BusinessItem
            </div>
        )
    }
}

export default BusinessItem
