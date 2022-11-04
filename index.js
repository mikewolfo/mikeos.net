

function initialize() {

    document.getElementById("homecontent").hidden = false;
    document.getElementById("servermapcontent").hidden = true;
    document.getElementById("filescontent").hidden = true;
    document.getElementById("guestbookcontent").hidden = true;

    if(window.location.href.includes("?")){
        var params = window.location.href.split('?');
    }
        

   console.log(params);

    switch(params[1]){
        case "":
        case "view=home":
            console.log("works");
        home();
        break;
        case "view=servermap":
            serverMap();
            break;
        case "view=files":
            files();
            break;
        case "view=guestbook":
            guestbook();
            break;
    }

}

function home(){
    document.getElementById("homecontent").hidden = false;
    document.getElementById("servermapcontent").hidden = true;
    document.getElementById("filescontent").hidden = true;
    document.getElementById("guestbookcontent").hidden = true;
}

function serverMap() {

    document.getElementById("homecontent").hidden = true;
    document.getElementById("servermapcontent").hidden = false;
    document.getElementById("filescontent").hidden = true;
    document.getElementById("guestbookcontent").hidden = true;
    //document.getElementById("servermap").hidden = false;
}

function files(){
    document.getElementById("homecontent").hidden = true;
    document.getElementById("servermapcontent").hidden = true;
    document.getElementById("filescontent").hidden = false;
    document.getElementById("guestbookcontent").hidden = true;
}

function guestbook(){
    document.getElementById("homecontent").hidden = true;
    document.getElementById("servermapcontent").hidden = true;
    document.getElementById("filescontent").hidden = true;
    document.getElementById("guestbookcontent").hidden = false;
}