import React, {Component} from 'react';
import './about.css'

class About extends Component {
    render() {
        let hrStyle = {
            height: "3px",
            border: "none",
            backgroundColor:"grey"
        }

        let topDiv = {
            fontSize:(()=>{
                let width = window.innerWidth;
                if(width < 576){
                    return '10px';
                } else if(width >= 576 && width < 768){
                    return '14px';
                } else if(width >= 768 && width < 992){
                    return '15px';
                } else if(width >= 992){
                    return '17px';
                }
            })(),
            backgroundColor: "#111e2a",
        }

        return (
            <div className="container-fluid main-font" style={topDiv}>

                <h1 style={{paddingTop: "6px"}} id='about'>About me!</h1>

                <div className="row">
                    <div className='col-md-12'>
                        My name is Ibrahim Hassan. I am a computer science student at Ryerson University, with a diploma in Computer Programming (CPD) from Seneca College. 
                    </div>
                </div>

                <hr style={hrStyle}></hr>
            
                <div className="row">
                    <div className="col-md-4">
                        Technologies I am comfortable with include:
                    </div>
                        <ul>
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>HTML</li>
                            <li>ES6+/JavaScript</li>
                            <li>Puppeteer</li>
                            <li>Cheerio</li>
                        </ul>
                    
                </div>

                <div className="row">
                    <div className="col-md-4">
                        Technologies I am somewhat knowledgeable of include: 
                    </div>
                    <ul>
                        <li>CSS/Bootstrap</li>
                        <li>C++</li>
                        <li>Java</li>
                    </ul>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        My hobbies include: 
                    </div>
                    <ul>
                        <li>Your usual watching of television shows (Netflix is a godsend).</li>
                        <li>Gaming.</li>
                        <li>Developing better scraping scripts for a much more 
                            customizable method of using the web and sometimes simply tinkering with web apps.</li>
                        <li>And, of course, learning new, web related things everyday.</li>
                    </ul>
                </div>

                <hr style={hrStyle}></hr>

                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-4 text-center">
                        Contact me at 1ibrahimhassan1@gmail.com
                    </div>
                </div>
        </div>
        )
    }
}

export default About;