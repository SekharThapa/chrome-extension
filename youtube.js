// youtube.js
    var videoUrls=window.ytplayer.config.args.url_encoded_fmt_stream_map.split(',').map(function(){
        return item.split("&").reduce(function(pre,cur){
            console.log(pre,cur);
            cur=cur.split("=");
            return Object.assign(pre,{[cur[0]]:decodeURIComponent(cur[1])});
        },{});
    });
    console.log("Hello from YouTube downloader!",videoUrls);
    var container=document.getElementById("");
    var btn=document.createElement("button");
    btn.className("");
    btn.setAttribute("","");
    btn.innerText="Download";
    container.appendChild(btn);
    


