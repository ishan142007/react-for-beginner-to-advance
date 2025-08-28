//import { Children } from "react";

const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'click me to visit google'
}
function customrender(reactelement,container){
    const domElement=document.createElement(reactelement.type);
    /*version 1
    domElement.innerHTML = reactelement.Children;
    // domElement.textContent=reactelement.Children;
    domElement.setAttribute('href',reactelement.props.href);
    domElement.setAttribute('target',reactelement.props.target);
    container.appendChild(domElement);*/
    //version 2
    domElement.innerHTML=reactelement.Children;
    for (const prop in reactelement.props) {
        if(prop ==='children')continue;
        domElement.setAttribute(prop,reactelement.props[prop]);

    }
    container.appendChild(domElement);
}
//grab the elemtent 
const maincontainer=document.querySelector("#root");
customrender(reactelement,maincontainer);