/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('#navbar__list');
const navTabs = document. getElementsByTagName('section');
const activeHeader = document.getElementsByClassName("page__header")[0];

// build the nav
for(let i = 0; i < navTabs.length; i++) {
    const tabs = document.createElement('li');
    const anchor = document.createElement('a');

    let tabTxt = navTabs[i].getAttribute('data-nav');
    tabs.classList.add(navTabs[i].getAttribute('id'));
    navBar.appendChild(tabs);
    anchor.href = `#section${i + 1}`; 
    anchor.innerText = tabTxt;
    tabs.appendChild(anchor);
    navBar.appendChild(tabs);
};

function scrollToClick() {
    navBar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};

// Add class 'active' to section when near top of viewport, Scroll to anchor ID, Scroll to section on link click
function activeSection() {
    for (const section of navTabs) {

        const position = section.getBoundingClientRect();
        if (
            position.top <= 100 && position.bottom >= 100
        ) {
            
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active__tab");
            
        } else {
            
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active__tab");   
        }
    }
};

document.addEventListener('scroll', function () {
    activeSection();
});

document.addEventListener('scroll', function(){
    activeScrolling();
}, false);

document.addEventListener('scroll', function () {
    activeSection();
});

//Header appears while scrolling
document.addEventListener('scroll', function(){
    activeHeader.style.display = "block";
});

//Header hides after 4 seconds
let hideMenu = null;

function activeScrolling(){
   
    if(hideMenu !== null){
        clearTimeout(hideMenu);
    }
    hideMenu = setTimeout(function(){
        activeHeader.style.display = "none";
    }, 4000);
};

/*
While developing this app I used various sections from the Knowledge portal
to be able to troubleshoot and understand the necesary codes.
The biggest problem, i had was with the active tabs. Here is the url for the 
forum post that helped me out most.
https://knowledge.udacity.com/questions/152381
This other fourum post helped out alot.
https://knowledge.udacity.com/questions/85408#96950
*/