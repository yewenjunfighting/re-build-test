import React, { Component } from 'react'
import firecracker from '../../assets/fireWork/firecracker.png'
import fireworks from '../../assets/fireWork/fireworks.jpg'

import './index.css'

class FireWork extends Component{
    render() {
        return (
            <div id="container">
                <div id="fireworks"><img src={ fireworks } alt="烟火"/></div>
                <div id="firecracker"><img src={ firecracker } alt="爆竹" width="8px"/></div>
            </div>
        )
    }
}

export default FireWork;
