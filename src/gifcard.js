import React from 'react'
import './gifcard.css'

export default function Gifcard(props) {
   
    return (
        <div>
            <img id = "jifs" src = {props.url}></img>
            
        </div>
    )
}