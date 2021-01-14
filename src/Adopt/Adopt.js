import React, { Component } from 'react'
import Pet from '../Pets/Pet'
import Person from '../People/Person'
import './Adopt.css'

class Adopt extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    constructor(props) {
        super(props);
        this.handleDogAdoption = this.handleDogAdoption.bind(this);
        this.handleCatAdoption = this.handleCatAdoption.bind(this);
        this.continueProcess = this.continueProcess.bind(this);
    }
    state = {
        data: [],
        count: 0,
        selection: false,
        selected: false,
        error: null
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            let currentCount = this.state.count + 1
            this.setState({ count: currentCount })
            if (this.state.count === 1) {
                if (this.props.people[0] !== this.props.user) {
                    let decision = Math.floor(Math.random() * Math.floor(2))
                    if (decision === 0) {
                        currentCount = 0
                        this.setState({ count: currentCount })
                        this.props.removeCat(this.props.user.name)
                    } else
                        if (decision === 1) {
                            currentCount = 0
                            this.setState({ count: currentCount })
                            this.props.removeDog(this.props.user.name)
                        }
                } else
                    if (this.props.people[0] === this.props.user) {
                        let { selection } = this.state
                        clearInterval(this.intervalId)
                        if (!selection) {
                            this.setState({ selection: selection = true })
                        }
                    }
            }
        }, 5000)
    }


    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    handleUsage(params) {
        return
    }

    handleCatAdoption = (ev) => {
        ev.preventDefault();
        let { selection, selected } = this.state
        let newselected = true
        let newselection = false
        let currentCount = 0
        this.setState({ count: currentCount })
        this.props.removeCat(this.props.user.name)
        this.setState({ selection: selection = newselection, selected: selected = newselected })
        this.handleUsage(selection, selected)
    }

    handleDogAdoption = (ev) => {
        ev.preventDefault()
        let { selection, selected } = this.state
        let newselected = true
        let newselection = false
        let currentCount = 0
        this.setState({ count: currentCount })
        this.props.removeDog(this.props.user.name)
        this.setState({ selection: selection = newselection, selected: selected = newselected })
        this.handleUsage(selection, selected)
    }

    continueProcess = (ev) => {
        ev.preventDefault()
        let { selected } = this.state
        this.props.history.push('/adoption')
        let newselected = false
        this.setState({ selected: selected = newselected })
        this.handleUsage(selected)
    }

    render() {
        let { selected, selection } = this.state
        let dog = this.props.dogs
        let cat = this.props.cats
        let people = this.props.people
        return (
            <div>
                {(selection) ? <div className="form-popup" id="myForm">
                    <form className="form-container">
                        <h1>Your Turn To Adopt Your New Animal!</h1>
                        <button onClick={this.handleDogAdoption.bind(this)}>Adopt Dog</button>
                        <button onClick={this.handleCatAdoption.bind(this)}>Adopt Cat</button>
                    </form>
                </div> : <div></div>}
                {(selected) ? <div className="form-popup" id="myForm">
                    <form className="form-container">
                        <h1>Congratulations On Adopting Your New Pet!</h1>
                        <button onClick={this.continueProcess.bind(this)}>Continue</button>
                    </form>
                </div> : <div></div>}
                {people.map((data, index) =>
                    <Person className="person-list" key={index} name={data.name}
                    />)}
                <h2>Available Pets</h2>
                <div className="container">
                    <div className="pets">
                        <Pet name={dog.name} gender={dog.gender} age={dog.age} breed={dog.breed}
                            story={dog.story} description={dog.description} image={dog.imageURL}
                        />
                        <Pet name={cat.name} gender={cat.gender} age={cat.age} breed={cat.breed}
                            story={cat.story} description={cat.description} image={cat.imageURL}
                        />
                    </div>
                </div>
            </div>
        )

    }
}

export default Adopt