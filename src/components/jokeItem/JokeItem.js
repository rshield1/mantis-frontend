import React  from 'react'

const JokeItem = (props) => {
    const { id, category, joke } = props.joke
        return (
            <div className="card text-center">
                <p>{id}</p>
                <br/>
                <p>{category}</p>
                <br/>
                <p>{joke}</p>
            </div>
        )

}

export default JokeItem
