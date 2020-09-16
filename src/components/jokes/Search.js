import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }


    onChange = (event) =>( this.setState({ text: event.target.value}))
    // onSubmit = (event) =>   
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" placeholder="search jokes" 
                        style={{color: "black"}} value={this.state.text} 
                        onChange={this.onChange}/>
                    <input type="submit" value="Search" 
                        className="btn btn-success btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
