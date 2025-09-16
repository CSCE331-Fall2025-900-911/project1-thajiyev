function toggleStyleSheet(){
    var styleElement = document.getElementById("usedStylesheet");
    var styleValue = styleElement.getAttribute("href");
    var newStyleValue = 'alternative.css'
    if(styleValue === "alternative.css"){
        newStyleValue = "main.css";
    }
    styleElement.setAttribute("href", newStyleValue);
    localStorage.setItem("style", newStyleValue);
  
}


window.onload = function(){
    var stylesheetName= localStorage.getItem("style");
    if(!stylesheetName){
        stylesheetName = "main.css";
    }
    
    var styleElement = document.getElementById("usedStylesheet");
    styleElement.setAttribute("href", stylesheetName);
    
}
