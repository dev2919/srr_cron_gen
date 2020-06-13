import React, {Component} from 'react';
import cronstrue from 'cronstrue';
import {isValidCron} from 'cron-validator'
import NavBar from '../components/Navbar'



let c = 0;


class InputBox extends Component {

    state = {
        char: [],
        mchar:"* */5 * * *",
        mobile:false,
    }



    componentDidMount = () => {




        //If URL has a valid Cron Expression the cron function will execute on load

        if (window.location.href.match(/[_]?[*][/]?[/d]?\w*|[_]\d\w*|[,]\d\w*|[-]\d\w*/g))
         {
            
            //Regex for matching only the part that is needed from URL
            let hrefArr = window
                .location
                .href
                .match(/[_]?[*][/]?[/d]?\w*|[_]\d\w*|[,]\d\w*|[-]\d\w*/g)   
                .join("")
                .toString()
                .split('_');

            let href2 = []
            hrefArr.forEach((item, index) => href2.length < 5
                ? href2[index] = hrefArr[index + 1]
                : null);

             //Checking the scrapped Expression from URL

            if (isValidCron(href2.join(" ").toString())) {

                if (hrefArr.length === 6) {

                    this.setState({char: href2})
                    document.getElementById("value").value = href2.join(" ").toString();
                    document.getElementById("ans").innerHTML= cronstrue.toString(`${href2.join(" ").toString()}`)
                    c = 5;

                    for (let index = 0; index <  document.getElementsByClassName("label").length; index++) {

                        document.getElementsByClassName("label")[index].style.backgroundColor = "#4fff75";
                        
                    }
                }

            }

        }

        //Checking if user has a mobile
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
        this.setState({
            mobile:true
        })
        }
    }


    handleCopy = () => {

        var copyText = document.getElementById("value");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999);/*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand("copy");

    }

    handleChange = (e) => {
        let final = e.target.value;
        console.log(final);
        
        isValidCron(final)? document.getElementById("ans").innerHTML = cronstrue.toString(final) : document.getElementById("ans").innerHTML = "Enter valid statement" ;

        if(isValidCron(final)) {
            let stateObj = {id: "100"};
            let link = final.trim().replace(/ /g, "_");
            window.history.replaceState(stateObj, `/`, "/#_" + link)
        }   

    }

    //The keyDown method will be used to push and pop the parts of expression as soon as certain keys are pressed

    handleKeyDown = (e) => {
        let val = e.target.value
        let temp = this.state.char; //Temporary Value used in for poping

        c >= 0? c = c: c = 0;

        //Prevent non required Characters to be used in the input field (To do - FIX THIS)


        // if(this.state.char.length === 5 && e.key != "Backspace"){ e.preventDefault() }

        // If SpaceBar is Pressed the ending characters just before a space is pushed in the Expression Array state
        if (e.key == " " && val.match(/\d*\d$|[*]$|[*]?[/]?[-]?\d[/]?[-]?[,]?\d*$/g) != null && this.state.char.length < 5) {
            this.setState({
                char: [
                    ...this.state.char,val.match(/\d*\d$|[*]$|[*]?[/]?[-]?\d[/]?[-]?[,]?\d*$/g).toString()
                ]
            })

            document.getElementsByClassName("label")[c].style.backgroundColor = "#4fff75";  //Logic for trigering the CSS of the buttons

            c >= 0 && c < 5? c ++: c = 5;

           //The Final expression is stored below
            
            let final = ([...this.state.char,val.match(/\d*\d$|[*]$|[*]?[/]?[-]?\d[/]?[-]?[,]?\d*$/g).toString()]).join(" ").toString();

            //Final expression is then checked and passed to the in the cronstrue method which is then passed as a prop

            // isValidCron(final)? this.props.humanFormat(cronstrue.toString(final)): this.props.humanFormat("Enter valid statement");


            
            
        }
        
        


        //When a Backspace is triggered the last item is poped out of the array and also the input field

        if (e.key == "Backspace" && (val.match(/\s$/g) || this.state.char.length == 1) && !this.state.mobile) {

            temp.pop();
            this.setState({char: temp}) //The temp variable is used for the exression state
            c > 0? c--: c = 0;
            document.getElementsByClassName("label")[c].style.color = "white";
            document.getElementsByClassName("label")[c].style.backgroundColor = "#ffa48f";
            // e.target.value = temp.join(" ").toString() + "  ";  //Input target is updated

        //    if(temp.length !=5 ){
        //     this.props.humanFormat("Enter valid statement");
        //    }

        }

        //For mobile 

        // if((e.keyCode == 229 || e.keyCode == 8) && this.state.mobile){
        //     this.setState({
        //         mchar:e.target.value
        //     })

        //     let mfinal = e.target.value;
        //     isValidCron(mfinal)? this.props.humanFormat(cronstrue.toString(mfinal)): this.props.humanFormat("Enter valid statement");


        // }

        //The switch Case is used to disable the arrow keys 

        // switch (e.which) {
        //     case 37:
        //         e.preventDefault();
        //         break;

        //     case 38:
        //         e.preventDefault();
        //         break;

        //     case 39:
        //         e.preventDefault();
        //         break;

        //     case 40:
        //         e.preventDefault();
        //         break;
        // }

    }

    handleClick = () => {
       
        // var inp = document.getElementById('value');
        // inp.focus(); //sets focus to element
        // var val = inp.value; //store the value of the element
        // inp.value = ''; //clear the value of the element
        // inp.value = val; //set that value back.

    }

    handleSelect = () => {

        // var inp = document.getElementById('value');
        // inp.addEventListener('select', function () {
        //     this.selectionStart = this.selectionEnd;
        // }, false);

    }

    handleMin = () => {
        document
            .getElementById("info-cont")
            .innerHTML = " <ul>	<li> *   any value</li> <li>,	value list separator</li><li> -	  range of values" +
                "</li> <li>/	step values</li> <li> 0-59	allowed value </li> </ul>"
    }

    handleHr = () => {
        document
            .getElementById("info-cont")
            .innerHTML = " <ul>	<li> *   any value</li> <li>,	value list separator</li><li> -	range of values" +
                "</li> <li>/	step values</li> <li> 0-23	allowed value </li> </ul>"
    }

    handleDm = () => {
        document
            .getElementById("info-cont")
            .innerHTML = " <ul>	<li>* any value</li> <li>,	value list separator</li><li> -	range of values" +
                "</li> <li>/	step values</li> <li> 1-31	allowed value </li> </ul>"
    }

    handleMon = () => {
        document
            .getElementById("info-cont")
            .innerHTML = " <ul>	<li>* any value</li> <li>,	value list separator</li><li> -	range of values" +
                "</li> <li>/	step values</li> <li> 1-12	allowed value </li> </ul>"
    }

    handleDw = () => {
        document.getElementById("info-cont").innerHTML = " <ul>	<li>* any value</li> <li>,	value list separator</li><li> -	range of values" +
                "</li> <li>/	step values</li> <li> 0-6	allowed value </li> </ul>"
    }

 


    render() {

        // console.log(this.state.char);
        

        // if (this.state.char.length === 5 && isValidCron(this.state.char.join(" "))) {

        //     let stateObj = {id: "100"};
        //     let link = this.state.char.join("_");
        //     window.history.replaceState(stateObj, `/`, "/#_" + link)

        // }

        return (
          <div>
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
            <div className="main">
                <div className="input-wrapper">
                <p id="ans">Every 3 minutes</p>
                    <input
                        id="value"
                        txt={this.state.text}
                        defaultValue= '*/3 * * * *'
                        type="text"
                        onClick={this.handleClick}
                        onFocus={this.handleSelect}
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}
                        ></input>
                    <i class="fas fa-copy" onClick={this.handleCopy}></i>

                </div>

                <div className="label-main">

                    <p className="label" onClick={this.handleMin}>Minute</p>
                    <p className="label" onClick={this.handleHr}>Hour</p>
                    <p className="label" onClick={this.handleDm}>Day (Month)</p>
                    <p className="label" onClick={this.handleMon}>Month</p>
                    <p className="label" onClick={this.handleDw}>Day (Week)</p>
                    <p id="label">{this.displaylink}</p>

                </div>

                <div className="info-cont" id="info-cont">

                    <ul>
                        
                        <li>* any value</li>
                        <li>, value list separator</li>
                        <li>- range of values</li>
                        <li>/ step values</li>

                    </ul>

                </div>


            </div>
            </div>
        );
    }
}

export default InputBox;