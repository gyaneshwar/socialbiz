function basicOperation() {
try{
    var x = $("span[onclick]");
    var handler = "#" + x[x.length - 1].id;
    if(debug){
    console.log(x);
    console.log(x[x.length - 1]);
    console.log(handler);
    }
    if(handler.search("hand") === 1){
    $("#" + x[x.length - 1].id).click();
    }
    else{
    console.log("Operation completed with process Id:"+processId);
    clearInterval(processId);    
    }
}
catch(e){console.log(e);}
}
var processId = setInterval(basicOperation, 20000);
var debug = false;
console.log("Started process with process Id:"+processId);
