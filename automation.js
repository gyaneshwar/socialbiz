function GetNormalWindow(workID, url, nextTrId, lnkFlag) {
    var lnkFlag = JSON.stringify(lnkFlag);
    myWindow = window.open(url, this.href, "myWindow", "scrollbars=1,width=1024,height=700");
    //myWindow.document.title = "Website Popup will automatically be close after 30 seconds. you don't need to close the popup.";
    CloseTimeout = setTimeout('CloseWindowOnUpdateTask(' + workID + ',' + nextTrId + ',' + lnkFlag + ');', 30000);
    interval = window.setInterval(function() {
        try {
            if (myWindow == null || myWindow.closed) {
                window.clearInterval(interval);
                clearTimeout(CloseTimeout);
            }
        } catch (e) {}
    }, 1000);
}

function basicOperation() {
try{
    var x = $("span[onclick]");
    var handler = "#" + x[x.length - 2].id;
    if(debug){
    console.log(x);
    console.log(x[x.length - 2]);
    console.log(handler);
    }
    if(handler.search("hand") === 1){
    $("#" + x[x.length - 2].id).click();
    }
    else{
    console.log("Operation completed with process Id:"+processId);
    clearInterval(processId);    
    }
}
catch(e){console.log(e);}
}
var processId = setInterval(basicOperation, 32000);
var debug = false;
console.log("Started process with process Id:"+processId);
