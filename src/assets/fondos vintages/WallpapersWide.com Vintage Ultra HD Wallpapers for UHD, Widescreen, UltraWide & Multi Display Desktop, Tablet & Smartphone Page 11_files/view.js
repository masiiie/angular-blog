var prev_active=!1,fadeVal=0;function ondocReady(a){"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?a():document.addEventListener("DOMContentLoaded",a)}function roundNumber(a,b){return Math.round(a*Math.pow(10,b))/Math.pow(10,b)}
function hidediv(a){if(document.getElementById)try{document.getElementById(a).style.display="none"}catch(b){return!1}else if(document.layers)try{document.id.display="none"}catch(b){return!1}else try{document.all.id.style.display="none"}catch(b){return!1}}
function showdiv(a){if(document.getElementById)try{document.getElementById(a).style.display="block"}catch(b){return!1}else if(document.layers)try{document.id.display="block"}catch(b){return!1}else try{document.all.id.style.display="block"}catch(b){return!1}}
function showhidediv(a){document.getElementById?"block"==document.getElementById(a).style.display?document.getElementById(a).style.display="none":"none"==document.getElementById(a).style.display&&(document.getElementById(a).style.display="block"):document.layers?"block"==document.id.display?document.id.display="none":"none"==document.id.display&&(document.id.display="block"):"block"==document.all.id.style.display?document.all.id.style.display="none":"none"==document.all.id.style.display&&(document.all.id.style.display=
"block")}function prevframe_show(a){document.getElementById?document.getElementById("notifyFrame").src=a:document.layers?document.notifyFrame.src=a:document.all.notifyFrame.src=a;prev_active=!0;frameLoad();showdiv("notifyBox2");showdiv("notifyBox3")}function prevframe_close(){document.getElementById?document.getElementById("notifyFrame").src="":document.layers?document.notifyFrame.src="":document.all.notifyFrame.src="";prev_active=!1;hidediv("notifyBox2");hidediv("notifyBox3")}
function winHeight(a){var b=0;"number"==typeof window.innerWidth?b=window.innerHeight:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?b=document.documentElement.clientHeight:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(b=document.body.clientHeight);a=Math.round((b-a)/2);0>a&&(a=0);document.getElementById?document.getElementById("notifyBox3").style.marginTop=a+"px":document.layers?document.notifyBox3.style.marginTop=
a+"px":document.all.notifyBox3.style.marginTop=a+"px";frameLoaded()}
function frameHeight(){if(prev_active){if(document.getElementById){var a=document.getElementById("notifyFrame").contentWindow.document.body.scrollHeight;document.getElementById("notifyFrame").height=a;document.getElementById("notifyFrame").style.height=a+"px !important;";document.getElementById("notifyFrame").setAttribute("style","height:"+a+"px !important")}else document.layers?(a=document.notifyFrame.contentWindow.document.body.scrollHeight,document.notifyFrame.height=a):(a=document.all.notifyFrame.contentWindow.document.body.scrollHeight,
document.all.notifyFrame.height=a);winHeight(a)}}function frameLoad(){document.getElementById?(document.getElementById("notifyBox3").style.opacity=0,document.getElementById("notifyBox3").style.filter="alpha(opacity=0)"):document.layers?(document.notifyBox3.style.opacity=0,document.notifyBox3.style.filter="alpha(opacity=0)"):(document.all.notifyBox3.style.opacity=0,document.all.notifyBox3.style.filter="alpha(opacity=0)");showdiv("notifyBoxLoad")}
function frameLoaded(){hidediv("notifyBoxLoad");fadeVal=0;frameFadeIn()}
function frameFadeIn(){fadeVal+=100;document.getElementById?(document.getElementById("notifyBox3").style.opacity=fadeVal/100,document.getElementById("notifyBox3").style.filter="alpha(opacity="+fadeVal+")"):document.layers?(document.notifyBox3.style.opacity=fadeVal/100,document.notifyBox3.style.filter="alpha(opacity="+fadeVal+")"):(document.all.notifyBox3.style.opacity=fadeVal/100,document.all.notifyBox3.style.filter="alpha(opacity="+fadeVal+")");100>fadeVal&&setTimeout("frameFadeIn()",50)}
function shareOnSocial(a){a||(a=window.currentPage);var b=!0;if("wallpaper"==a||"users"==a||"category"==a||"resolutions"==a||"desktopslidesv"==a)b=!1;var c=".html";"users"==a&&(c="");a="http://wallpaperswide.com";b||(a=document.URL.replace(/[/]page[/][0-9]+$|[/]pageSub[/][0-9]+$/i,c));b=document.getElementsByClassName("pxad")[0]?document.getElementsByClassName("pxad")[0].src:document.getElementsByClassName("thumb_img")[0]?document.getElementsByClassName("thumb_img")[0].src:document.getElementById("ds-screenshot")?
document.getElementById("ds-screenshot").src:"";c=document.getElementsByTagName("title")[0].innerText.replace(/[|] Page [0-9]+$/i,"");document.getElementById("facebook").href="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(a);document.getElementById("twitter").href="https://twitter.com/intent/tweet?url="+encodeURIComponent(a)+"&text="+encodeURIComponent(c)+"&via=";document.getElementById("pinterest").href="https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(a)+
"&media="+encodeURIComponent(b)+"&description="+encodeURIComponent(c);document.getElementById("reddit").href="https://reddit.com/submit?url="+encodeURIComponent(a)+"&title="+encodeURIComponent(c);document.getElementById("flipboard").href="https://share.flipboard.com/bookmarklet/popout?v=2&title="+encodeURIComponent(c)+"&url="+encodeURIComponent(a);document.getElementById("linkedin").href="https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(a)+"&summary="+encodeURIComponent(c)}
function searchSubmit(a){a.q.value=a.q.value.replace("?","");window.location=a.action+"?q="+encodeURIComponent(a.q.value);return!1}function toggleById(a){a=document.getElementById(a);a.style.display="block"===a.style.display?"none":"block"}function mobiletgl(){toggleById("topSearch");toggleById("topmenu");toggleById("left-panel")}
function resPrint(){var a=screen.width,b=screen.height;1<window.devicePixelRatio&&(a=Math.round(window.devicePixelRatio*a),b=Math.round(window.devicePixelRatio*b));var c=roundNumber(a/b,2),d="<span id='respri';>Your display features</span><span>Aspect Ratio: <strong>";1.33==c||.75==c?(d+="Full",a>b&&(d+=" 4:3"),a<b&&(d+=" 3:4")):1.25==c||.8==c?(d+="Full",a>b&&(d+=" 5:4"),a<b&&(d+=" 4:5")):1.5==c||.67==c?(d+="Full",a>b&&(d+=" 3:2"),a<b&&(d+=" 2:3")):1.6==c||.62==c||.63==c?(d+="Wide",a>b&&(d+=" 16:10"),
a<b&&(d+=" 10:16")):1.67==c||.6==c?(d+="Wide",a>b&&(d+=" 5:3"),a<b&&(d+=" 3:5")):2.37==c?d+="Wide 21:9":2.4==c?d+="Wide 24:10":1.78==c||.56==c?(1900>a?d+="HD":2500>a?d+="FHD":3800>a?d+="QHD":5E3>a?d+="UHD":7600>a?d+="UHD":7600<a&&(d+="UHD"),a>b&&(d+=" 16:9"),a<b&&(d+=" 9:16")):d=" - ";d+="</strong></span><span>Resolution: <strong>"+a+" x "+b+"</strong></span>";document.getElementById&&document.getElementById("screenRes")&&(document.getElementById("screenRes").innerHTML=d)}
function linkHighlight(){if(document.getElementById&&document.getElementById("wallpaper-resolutions")){var a=screen.width,b=screen.height;1<window.devicePixelRatio&&(a=Math.round(window.devicePixelRatio*a),b=Math.round(window.devicePixelRatio*b));var c=document.getElementById("wallpaper-resolutions");c=c.getElementsByTagName("a");for(i=0;i<c.length;i++)0<c[i].href.search("/download/")&&0<c[i].href.search(a+"x"+b)&&(c[i].style.backgroundColor="#FF2800",c[i].style.color="#FFFFFF",c[i].style.fontWeight=
"bold",c[i].style.MozBorderRadius="6px",c[i].style.webkitBorderRadius="6px",c[i].style.paddingLeft="5px",c[i].style.paddingRight="5px")}}ondocReady(resPrint);ondocReady(linkHighlight);ondocReady(shareOnSocial);