import React, { Component } from 'react'

class BusinessItem extends Component {
    constructor () {
        super();
        this.state = {
            id: 'id',
            name: "Gary Danko",
            image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg',
            url: 'https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg',
            display_phone: '(415) 749-2060'

        }
    }
    render() {
        return (
            <div className="card text-center">
                <img src={this.state.image_url}
                    alt="name" className="round-img"
                    style={{ width: '60px'}} 
                    />
                    <h3>{this.state.name}</h3>
                    <div>
                        <a href={this.state.url} className="btn btn-light btn-sm my-1">More</a>
                    </div>

            </div>
        )
    }
}

export default BusinessItem
