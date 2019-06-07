import React, { Component } from 'react'
import reStart from '../../assets/imgs/reStart.jpg'
import levelChoose from '../../assets/imgs/levelChoose.jpg'
import { Link } from 'react-router-dom'

import './index.css'

class PlayChoose extends Component {
    render() {
        return (
            <div id="playChoose">
                <button onClick={this.props.playAgain}>
                     <img src={reStart} alt="图片"/>
                </button>
                <Link to="/levelChoose">
                    <img src={levelChoose} alt="图片"/>
                </Link>
            </div>
        )
    }
}

export default PlayChoose;
