import React, { Component } from 'react';
import Project from './component/project/project';
import About from './component/about/about'

import profilePic from './images/profile.jpg';

class App extends Component {
  focusMe(event){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  focusProject(event){
    document.getElementById('project').scrollIntoView();
    window.scrollBy(0,-50);
  }

  focusAbout(event){
    document.getElementById('about').scrollIntoView();
    window.scrollBy(0,-50);
  }

  render() {
    let mainPage = {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: '-10px',
      marginLeft: '15px',
    }

    let profileImage = window.innerWidth >= 768 ? 
        <div className="col-md-4">
            <img id="profile" src={profilePic} alt="profile"></img>
        </div>
        :
        ''

    return (
      <div>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark' style={{position:"fixed", width:"100%", zIndex: 1}}>
            <button onClick={this.focusMe} className="navbar-brand">Ibrahim Hassan</button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button onClick={this.focusProject} className="nav-link">Projects</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.focusAbout} className="nav-link">About</button>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="container-fluid bg1">
            <div className="rowMain justify-content-center align-items-center" style={mainPage}>
                <div className="col-md-4 main-font" style={{fontSize: (()=>{
                let width = window.innerWidth;
                if(width < 576){
                    return '13px';
                } else if(width >= 576 && width < 768){
                    return '14px';
                } else if(width >= 768 && width < 992){
                    return '15px';
                } else if(width >= 992){
                    return '17px';
                }
                })()}}>
                    I'm Ibrahim Hassan. A computer science student and a budding full-stack web developer, I seek to expand my horizons everyday by learning something new.
                </div>
                
                {profileImage}
                
            </div>
        </div>
        <Project/>
        <About/>
      </div>//closing tag of top div
    );
  }
}

/*
let mainPage = {
    height: 100%,
    width: 100%,
    display: -ms-flexbox,
    display: flex,
    -ms-flex-wrap: wrap,
    flex-wrap: wrap,
    margin-right: -10px,
    margin-left: 30px
}
*/

export default App;