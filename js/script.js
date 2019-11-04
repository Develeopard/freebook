////////menu constants
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');



hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});


//////////////toggle menu end/////////////////////////////////////////


///////navigation - menu constants
const header = document.querySelector('header');
const ghostDiv = document.querySelector('.ghost-div');

const ghostDivOptions = {
    rootMargin: '0% 0% 0% 0%'
};

const ghostDivObserver = new IntersectionObserver(function(entries, ghostDivObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
           header.classList.add('header-scrolled');
        }
       else{
           header.classList.remove('header-scrolled');
        }
    });
},
ghostDivOptions);

ghostDivObserver.observe(ghostDiv);


///////////////navigation onscroll end/////////////////////////////////
const textSlide = document.querySelectorAll('.text-slide');
const boxOne = document.querySelector('.box-one');
const boxTwo = document.querySelector('.box-two');
const boxThree = document.querySelector('.box-three');
const boxFour = document.querySelector('.box-four');

const tl = new TimelineMax();


tl.fromTo(textSlide, 1, {opacity: 0, x: "-40%"}, {opacity: 1, x: "0%"});
tl.fromTo(boxOne, 0.5, {opacity: 0, x: "-20%"}, {opacity: 1, x: "0%"});
// dodaj ostale boxove, takodje treba pronaci nacin da se i ova animacija vidi tek kad skrolujemo do nje..