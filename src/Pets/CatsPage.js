import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Pet from './Pet'

class CatsPage extends Component {

    state = {
        data: [],
        error: null
    }

    render() {
        let thisData = [this.props.data]
        let data = thisData
        return (
            <div>
                {data.map((data, index) =>
                    <Pet key={index} id={index} name={data.name} gender={data.gender} age={data.age} breed={data.breed}
                        story={data.story} description={data.description} image={data.imageURL}
                    />)}
                <button>Adopt Me!</button><br />
                <Link to="/adoption" >
                    <button>Go Back</button>
                </Link>
            </div>

        )
    }
}

export default CatsPage