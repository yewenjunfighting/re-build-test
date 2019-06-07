import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import indexPage from '../../assets/imgs/indexPage.jpg'
import Cloud from '../Cloud'

import './index.css'

class Home extends Component {
    render() {
        return (
           <div className="container">
               <Cloud />
               <div id="home">
                   <Link to="/levelChoose">
                       <img src={indexPage} alt="indexPage"/>
                   </Link>
               </div>
               <div id="homeButton">
                   点击图片开始游戏
               </div>
           </div>
        )
    }
}

export default Home;
