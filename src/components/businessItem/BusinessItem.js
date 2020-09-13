import React  from 'react'

const BusinessItem = (props) => {
        const { name, image_url, url, display_phone } = props.business
        return (
            <div className="card text-center">
                <img src={image_url}
                    alt="name" style={{ width: '80px'}} 
                    />
                    <h3>{name}</h3>
                    <br />
                    <h5>{display_phone}</h5>
                    <div>
                        <a href={url} className="btn btn-light btn-sm my-1">More</a>
                    </div>

            </div>
        )

}

export default BusinessItem
