import React from 'react'
import './Person.css'

function Person(props) {

    return (
        <div className="people-container">
            <ul className='ul-people'>
                <li className='li'>{props.name}</li>
            </ul>
        </div>
    )
}

export default Person