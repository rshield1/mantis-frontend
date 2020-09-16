import React, { Component } from 'react'
import JokeItem from '../jokeItem/JokeItem';

class Jokes extends Component {

    render() {
        return (
            <div style={ jokesStyle }>
                console.log(this)
                {this.props.jokes.map(joke => (
                    <JokeItem key={joke.id} joke={joke}/>
                ))}
            </div>
        )
    }
}

const jokesStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Jokes
