import React, {Component} from 'react';
import NavBar from '../components/Navbar'

class Expressions extends Component {
    render() {
        return (
            <div className="main-expression">
               <NavBar/>
                  <style jsx>{`
                  #root {
                    overflow: hidden;
                  }
                  
                  .main {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                            flex-direction: column;
                    -ms-flex-line-pack: center;
                        align-content: center;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                  }
                  
                  .main input {
                    font-size: 4vw;
                    border-radius: 10px;
                    text-align: center;
                    padding: 0.5vw 12vw;
                    margin-bottom: 2rem;
                  }
                  
                  .main .label-main {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                  }
                  
                  .main .label-main .label {
                    margin: 0.5vw;
                    font-size: 2vw;
                    background-color: #ffa48f;
                    color: white;
                    padding: 1.5vw;
                    width: 15vw;
                    text-align: center;
                    border-radius: 10px;
                    cursor: pointer;
                    max-height: 3vw;
                  }
                  
                  .main .label-main .label:active {
                    border: 5px greenyellow inset;
                  }
                  
                  .main .info-cont {
                    height: 30vh;
                    width: 100vw;
                    border: 2px solid;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                    font-size: 2vw;
                  }
                  
                  .main .fas {
                    position: relative;
                    bottom: 10px;
                    font-size: 2vw;
                    right: 6vw;
                    top: -0.5vw;
                    cursor: pointer;
                  }
                  
                  .main .fas:active {
                    color: lawngreen;
                  }
                  
                  .human-text {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                    position: relative;
                    font-size: 3vw;
                    font-family: sans-serif;
                    padding: 0 16vw;
                    margin-top: 2vw;
                  }
                  
                  .human-text p {
                    text-align: center;
                  }
                  
                  nav {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: distribute;
                        justify-content: space-around;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    min-height: 10vh;
                    background-color: #494f52;
                    color: white;
                    width: 100%;
                  }
                  
                  .nav-link {
                    width: 40%;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: distribute;
                        justify-content: space-around;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                  }
                  
                  .main-expression {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                            flex-direction: column;
                  }
                  
                  .main-expression h2 {
                    font-size: 4vw;
                  }
                  
                  .main-expression h3 {
                    font-size: 2.5vw;
                  }
                  
                  .main-expression .links-main {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                        -ms-flex-pack: center;
                            justify-content: center;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;
                  }
                  
                  .main-expression ul {
                    margin: 1vw 5vw;
                  }
                  
                  .main-expression a {
                    color: black;
                    font-size: 2vw;
                  }
                  
                  #ans{
                    font-size: 3vw;
                    text-align: center;
                    font-family: sans-serif;
                  }

                  
                  @media (max-width: 503px) {
                    #ans{
                      font-size: 4vw;
                      text-align: center;
                      font-family: sans-serif;
                    }

                    .main-expression h2 {
                      font-size: 6vw;
                    }
                    .main-expression h3 {
                      font-size: 3.5vw;
                    }
                    .main-expression .links-main {
                      -ms-flex-wrap: wrap;
                          flex-wrap: wrap;
                    }
                    .main-expression a {
                      color: black;
                      font-size: 4vw;
                    }
                    .main input {
                      font-size: 5vw;
                    }
                  }
                  `}</style>
                <h2>USEFULL LINKS</h2>
                <h3>How to write a crontab schedule expression for:</h3>

                <div className="links-main">
                    <ul>

                    <a href="/every-5-min">
                            <li>Every 5-minute</li>
                        </a>
                        <a href="/every-10-min">
                            <li>Every 10-minute</li>
                        </a>
                        <a href="/every-minute">
                            <li>Every minute</li>
                        </a>
                        <a href="/every-2-min">
                            <li>Every 2-minute</li>
                        </a>
                        <a href="/every-3-min">
                            <li>Every 3-minute</li>
                        </a>
                        <a href="/every-4-min">
                            <li>Every 4-minute</li>
                        </a>
                        
</ul>
                </div>

            </div>
        );
    }
}

export default Expressions;