import React, { Component } from 'react'
import Person from '../People/Person'
import Pet from '../Pets/Pet'
import './AdoptionPage.css'

class AdoptionPage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    state = {
        people: [],
        person: '',
        error: null
    }

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({ ...this.state, [event.target.name]: value })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        let myPerson = { name: this.state.person }
        this.props.addPerson(myPerson)
        this.props.history.push('/adopt')
    }

    render() {
        let cats = [this.props.cats]
        let dogs = [this.props.dogs]
        let people = this.props.people
        return (
            <div className="adopt-content">
                <h2>People In Line</h2>
                <div className="people">

                    {people.map((person, index) =>
                        <Person key={index} id={index} name={person.name}
                        />)}
                </div>
                <br />
                <form className="name_entry" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="person" className="name" >Name:</label>
                        <input type="text" id="person" name="person" onChange={this.handleChange} />
                    </div>
                    <br />
                    <button type="submit">Get In Line</button>
                </form>

                <h2>Available Pets</h2>
                <div className="container">
                    <div className="pets">
                        {dogs.map((pet, index) =>
                            <Pet key={index} id={index} name={pet.name} gender={pet.gender} age={pet.age} breed={pet.breed}
                                story={pet.story} description={pet.description} image={pet.imageURL}
                            />)}
                        {cats.map((pet, index) =>
                            <Pet key={index} id={index} name={pet.name} gender={pet.gender} age={pet.age} breed={pet.breed}
                                story={pet.story} description={pet.description} image={pet.imageURL}
                            />)}
                    </div>
                </div>
            </div>
        )

    }
}

export default AdoptionPage
