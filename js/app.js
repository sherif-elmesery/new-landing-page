/**
 * Define Global Variables
 * 
 */
 const navBar = document.querySelector(".navbar__menu");
 const navMain = document.querySelector("#navbar__list");
 const bageSections = document.querySelectorAll("section");
 
 
 /**
  * End Global Variables
  * Start High order function
  * 
  */
 // looping at sections
 bageSections.forEach(ele => {
     // define local variables
     const navList = document.createElement("li"); // create <li> 
     const navLinks = document.createElement("a"); // create navigation links
     const listText = ele.dataset.nav;
     // append child lists to the parent ul
     navMain.appendChild(navList);
     // append child navigation links to li
     navList.appendChild(navLinks);
     navLinks.setAttribute("href", `#${ele.id}`);
     const navText = document.createTextNode(listText);
     navLinks.appendChild(navText);
     //add class to the navigation links
     navLinks.className = "menu__link"
     // Scroll to anchor ID using scrollIntoView event
     navLinks.addEventListener("click", evt => {
         evt.preventDefault();
         ele.scrollIntoView({
                 behavior: "smooth" //make the scrolling smooth
             }
 
         );
     });
 });
 
 
 /**
  * End high order Functions
  * Begin Main Functions
  * 
  */
 //add active class when scrolled to the section
 window.addEventListener("scroll", event => {
     //looping on the sections   
     bageSections.forEach(element => {
         // define a local variables
         const secPostion = element.getBoundingClientRect().top; //top of the section postion
         const navButtons = navMain.querySelector(`a[href = "#${element.id}"]`); // the a element with its attributes
         // condition to add active class to section and navigation link
         if (secPostion < 250 && secPostion >= 0) {
             element.classList.add("your-active-class")
             navButtons.classList.add("active")
         } else {
             element.classList.remove("your-active-class")
             navButtons.classList.remove("active")
         }
     });
 
 });
 // building scroll to top button
 // define variables
 const body = document.querySelector('body');
 // create a new span to the body
 const toTop = document.createElement('span');
 // add text to the span element
 toTop.textContent = 'up'
 // add class to style the button
 toTop.classList.add('top-button');
 //append the span element to the body
 body.appendChild(toTop);
 // show the button when scrolling to 750px from the top
 window.onscroll = function() {
 
     if (this.scrollY >= 750) {
         toTop.classList.add('active-top')
     } else {
         toTop.classList.remove('active-top')
     }
 
 }
 // add an event that when the button clicked scroll back to the page top
 toTop.addEventListener("click", event => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth',
     })
 });







 

  
    

   


