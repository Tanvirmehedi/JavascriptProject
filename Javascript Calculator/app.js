/*
Code By : Tanvir Jishan
App Name : Javascript Calculator
Date: 03/11/2021
Tech: Html,Js
*/

window.addEventListener("DOMContentLoaded", init);

const opts = [
    "-",
    "+",
    "*",
    "/",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
];

const spae = ["*", "+", "/", "-"];

function init() {
    document.title = "Javascript Calculator";
    console.log("ready");

    let dec = false;
    let eva = false;
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.maxWidth = "400px";
    container.style.padding = "0 15px";
    container.style.margin = "auto";
    document.body.appendChild(container);
    document.body.style.overflowX = "hidden";

    // output Start

    const output = document.createElement("input");
    output.setAttribute("type", "text");
    output.classList.add("output");
    output.setAttribute("placeholder", "Input Here");
    output.style.width = "100%";
    output.style.borderRadius = "5px";
    output.style.fontSize = "3rem";
    output.style.lineHeight = "50px";
    output.style.textAlign = "right";
    container.appendChild(output);

    // Main Div Start

    const main = document.createElement("div");
    main.classList.add("main");
    main.style.width = "100%";
    container.appendChild(main);
    opts.forEach((val) => {
        buttonMaker(val, addOutput);
    });

    buttonMaker("=", evalOutput);
    buttonMaker("C", clrOutput);
    function cOutput(v) {
        output.style.color = v;
      }
    function evalOutput() {
        output.style.border = "2px solid #000";
        if (output.value === "") {
            output.style.border = "2px solid red";
        }else if (eva) {
            cOutput('red');
          } else {
            output.value = eval(output.value);
        }
        dec = output.value.includes('.');

    }

    function clrOutput() {
        output.style.border = "2px solid #000";
        output.value = "";
    }

    function buttonMaker(txt, myFunction) {
        let btn = document.createElement("button");
        btn.setAttribute("type", "btn");
        btn.style.width = "23%";
        btn.style.lineHeight = "50px";
        btn.style.margin = "1%";
        btn.style.fontSize = "2rem";
        btn.style.cursor = "pointer";
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener("click", myFunction);
        main.appendChild(btn);
    }

    function addOutput(e) {
        output.style.border = "2px solid #000";
        let char = e.target.val;
        if(char =='.'){
            if(dec){
                char ='';
                output.style.border = "2px solid red";
            }else{
                dec=true;
            }
        }eva =spae.includes(char);
         if(eva){
                dec=false ;  
            } output.value += char;
    }
}

