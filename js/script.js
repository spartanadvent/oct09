var time_today = new Date();
var current_element = new dom_element;

function dom_element(){


}

dom_element.prototype.create = function(element_type){

    this.element_type = element_type;
    document.createElement(element_type);

}

dom_element.prototype.append = function(parent_element){
    log_to_dom(this);
     log_to_dom(parent_element);
   return document.parent_element.appendChild(this);
   
}



function log_to_dom(message) {
    console.log(message);
}

function time_stamp() {
    return Date.now();
}

document.addEventListener('DOMContentLoaded',function(event){

    current_element.create('li')
    
    
});