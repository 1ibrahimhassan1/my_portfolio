import React, { Component } from 'react';
import './project.css'

class Project extends Component {

    toGithub(event){
        window.location.href=event.target.getAttribute('url');
    }

    render() {
        let hrStyle = {
            height: "3px",
            border: "none",
            backgroundColor:"grey"
        }
        
        let topDiv = {
            fontSize: (()=>{
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
            })(),
            backgroundColor: '#24292e',
        }

        return (
            <div className="container-fluid main-font" style={topDiv}>

                <h1 style={{paddingTop: "6px"}} id='project'>My Projects</h1>

                <hr style={hrStyle}></hr>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>

                    <tbody onClick={this.toGithub}>
                        <tr>
                            <td url='https://github.com/1ibrahimhassan1/League-App'>League of Legends in-game checker</td>
                            <td url='https://github.com/1ibrahimhassan1/League-App'>This web app, using react, express, and node, communicates with Riot Game's API to query 1-5 summoners on their current
                        in game status. I made this specifically because all other websites with similar functionality were also "bogged down" with plenty of other
                        features and design decisions that made simply using the website for that specific functionality really slow and cumbersome.</td>
                        </tr>
                    
                        <tr>
                            <td url='https://github.com/1ibrahimhassan1/Discord-Bot'>Discord bot</td>
                            <td url='https://github.com/1ibrahimhassan1/Discord-Bot'>As the name implies, this is a bot I created for me and my friends to play around with on <a href="https://discord.gg">discord.gg</a>. It does,
                        among other things, communicate with Reddit's API to return posts from any subreddit's hotpage. It also, using Puppeteer, scrapes Instagram's website
                        to return Instagram posts from any user's page. I opted for Puppeteer here because Instagram's website is dynamically generated upon fetching the webpage
                        therefore any attempts to navigate through it wihout first "opening the page in a browser" or directly accessing their API is futile.</td>
                        </tr>
                    </tbody>
                </table>    
            
            </div>//closing top div
        )
    }
}

export default Project;