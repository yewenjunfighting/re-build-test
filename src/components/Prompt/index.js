import React, { Component } from 'react'
import $ from 'jquery'

import './index.css'

class Prompt extends Component {
    componentDidMount() {
        if(this.props.title === '恭喜你过了最难的一关！回首页看看吧!') {
            $('#prompt').css('top', 500);
            $('#prompt').css('left', 800);
        }
    }
    render() {
        return (
            <div id="prompt">
                <div className="title">{this.props.title}</div>
                <div className="Button">
                    <button onClick={this.props.playAgain}>再玩一次</button>
                    <button onClick={this.props.nextLevel}>确定</button>
                </div>
            </div>
        )
    }
}

export default Prompt;
