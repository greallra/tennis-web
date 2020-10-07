
//add active class to the nav depending on page we are on
let navLink  = document.getElementsByClassName('nav-link');
let navItemList = document.getElementsByClassName('nav-item');
console.log(navItemList);
console.log(navLink);
//navLink.classList.add("active-nav");
if(window.location.href ===  "http://localhost:3000/"){
    navLink[0].classList.add("active-nav");
}
if(window.location.href.match("results")){
    navLink[2].classList.add("active-nav");
}


for (let navItem of navItemList) {
    let nodeList = navItem.childNodes;
    if(nodeList[1].className.match('active')){
        var img = document.createElement("img");
        img.src = "/media/imgs/ball.png";
        img.setAttribute("id", "logo");
        navItem.appendChild(img)
    };

}
const timestamps = document.getElementsByClassName('timestamp');
for(let timeS in timestamps){
    console.log(timestamps[timeS].innerHTML = formatTimestamp(timestamps[timeS].innerHTML));
}

function formatTimestamp(unix_timestamp) {
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}


//get rid of html tags
let body = document.querySelector('.body');
let cleanText = body.innerText.replace(/<\/?[^>]+(>|$)/g, "");
body.innerHTML = cleanText;
console.log(body);
console.log(cleanText);