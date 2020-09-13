import React, { Component } from 'react'
import BusinessItem from '../businessItem/BusinessItem';

class Businesses extends Component {
 state = {
     businesses: [
         {
            id: 'WavvLdfdP6g8aZTtbBQHTw',
            name: "Gary Danko",
            image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg',
            url: 'https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg',
            display_phone: '(415) 749-2060'
         },
         {
            id: 'E8RJkjfdcwgtyoPMjQ_Olg',
            name: "Four Barrel Coffee",
            image_url: 'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
            url: 'https://www.yelp.com/biz/four-barrel-coffee-san-francisco',
            display_phone: '(415) 252-0800'

         }
     ]
 }
    render() {
        return (
            <div style={businessStyle}>
                {this.state.businesses.map(business => (
                    <BusinessItem key={business.id} business={business}/>
                ))}
            </div>
        )
    }
}

const businessStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Businesses
