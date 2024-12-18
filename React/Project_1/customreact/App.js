// import { Children } from "react";

// import React from "react";

function ReactRender(reactelement, container){
    /*
    const domElement =  document.createAttribute(reactelement.tag);
    domElement.innerHTML = reactelement.Children;
    domElement.setAttribute('href', reactelement.props.href);
    domElement.setAttribute('target', reactelement.props.target);
    container.append(domElement);
    */

    const domElement =  document.createElement(reactelement.tag);
    domElement.innerHTML = reactelement.Children;
    for (const item in reactelement.props) {
        domElement.setAttribute(item, reactelement.props[item]);
    }
    container.appendChild(domElement);

}

const reactelement =   {
    tag : "a",
    props : {
        href : "https://www.google.com",
        target : "_blank",

    },
    Children : "Search in Google"
}


const container =  document.getElementById("root");
ReactRender(reactelement, container )