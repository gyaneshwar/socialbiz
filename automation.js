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

var monitor = "";

function refreshOperation(){
    try{
         var refreshHandler = monitor.replace("hand","refresh");
         if(debug){
            console.log("refresh operation");
            console.log(monitor);
            console.log("relative refresh handler:"+refreshHandler);
         }
         $(refreshHandler).click();
         monitor = "";
    }
    catch(e){console.log(e);}
}

function basicOperation() {
try{
    var x = $("span[onclick]");
    var handler = "#" + x[x.length - 2].id;
    if(monitor === handler){
        refreshOperation();
    }else{
        monitor = handler;
    }
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
catch(e){console.log(e); refreshOperation();}
}
var processId = setInterval(basicOperation, 45000);
var debug = false;
console.log("Started process with process Id:"+processId);
