import React from 'react'

export default function BasePage(props) {
    return (
        <div style={{margin: '1rem 3rem', fontSize: '26px'}}>
            <h3>{props.title}</h3>
            <hr></hr>
            {props.component}
        </div>
    )
}
