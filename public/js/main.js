const path = window.location.pathname
document.addEventListener('DOMContentLoaded', () => {
        
    function timeDifference(current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;
        
        if (elapsed < msPerMinute) return Math.round(elapsed/1000) + ' seconds ago';   
        else if (elapsed < msPerHour) return Math.round(elapsed/msPerMinute) + ' minutes ago';   
        else if (elapsed < msPerDay ) return Math.round(elapsed/msPerHour ) + ' hours ago';   
        else if (elapsed < msPerMonth) return '' + Math.round(elapsed/msPerDay) + ' days ago';   
        else if (elapsed < msPerYear) return '' + Math.round(elapsed/msPerMonth) + ' months ago'; 
        else  return '' + Math.round(elapsed/msPerYear ) + ' years ago';   
    }

    //set timestamps in readeable form
    const timestamps = document.getElementsByClassName('timestamp');
    for(let timeS in timestamps){
        var now = Date.now();
        var utcSeconds = timestamps[timeS].innerHTML;
        var prev = new Date(0);
        prev.setUTCSeconds(utcSeconds);
        timestamps[timeS].innerHTML = timeDifference(now, prev);
    }


    //parse html string and append to page
    let ps = document.querySelector('.va-p');
    let article = document.querySelector('.va-article');
    if(ps){
        var wrapper= document.createElement('div');
        wrapper.classList.add("is-size-5");
        wrapper.classList.add("le-div");
        wrapper.innerHTML= ps.textContent;
        article.appendChild(wrapper)
        const leDiv = document.querySelectorAll('.le-div p');
        for(var i = 0; i < leDiv.length; i++){
            leDiv[i].classList.add('pt-3');
            leDiv[i].classList.add('pb-3');
        }
    }


    var onresize = function(e) {
        //note i need to pass the event as an argument to the function
        width = window.innerWidth;
        //height = e.target.outerHeight;

        if(width > 769) {
            setActiveSection('desk');
        } else {
            setActiveSection('mob');
        }
    }
    const deskSection = document.getElementById('latest-arts-desk');
    const mobSection = document.getElementById('latest-arts-mob');
    const oldArticlesMobSection = document.getElementById('old-arts-mob');
    const oldArticlesDeskSection = document.getElementById('old-arts-desk');

    //set responsive section for lastest articles
    function setActiveSection(sectionToSet) {
        if(sectionToSet === 'mob'){
            deskSection.style.display = "none";
            mobSection.style.display = "block";
            oldArticlesMobSection.style.display = "none";
            oldArticlesDeskSection.style.display = "block";
        }else {
            deskSection.style.display = "block";
            mobSection.style.display = "none";
            oldArticlesMobSection.style.display = "block";
            oldArticlesDeskSection.style.display = "none";
        }
    }

    if(window.innerWidth > 769) {
        setActiveSection('desk');
    }else {
        setActiveSection('mob');
    }

    window.addEventListener("resize", onresize);

    //set class on active nav-item

        //document.getElementsByClassName('navbar-item')[1].classList.add("active-nav-item");
        let navItems = document.getElementsByClassName('navbar-item');
        for (let index = 0; index < navItems.length; index++) {
            const element = navItems[index];
            const elementHref = element.getAttribute("href");
            if(path === elementHref){
                element.classList.add("active-nav-item");
            }
        }


    //nav dropdown


    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  





    
});