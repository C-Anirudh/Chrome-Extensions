var menu1 = {
    id: "define",
    title: "Meaning",
    contexts: ["selection"]
};

var menu2 = {
    id: "speakit",
    title: "Pronounce",
    contexts: ["selection"]
};

chrome.contextMenus.create(menu1);
chrome.contextMenus.create(menu2);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "define" && clickData.selectionText)
    {
        var googleUrl = "https://www.google.com/search?safe=active&q=define+" + fixedEncodeURI(clickData.selectionText);
        var search = {
            "url": googleUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": Math.round(screen.availWidth/2),
            "height": Math.round(screen.availHeight/2)
        };
        chrome.windows.create(search,function(){});
    }
    if(clickData.menuItemId == "speakit" && clickData.selectionText)
    {
        chrome.tts.speak(clickData.selectionText, {'rate': 0.7});
    }
});


