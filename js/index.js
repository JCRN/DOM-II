// Your code goes here

// 1. Event listener - 'click' on header - changes nav link colors
const funBusHead = document.querySelector('.intro')
const navLinks = document.querySelectorAll('.nav-link')
funBusHead.addEventListener('click', event => navLinks.forEach(link => link.style.color = 'Orange'))

// 1.5 Nested event listener - 'click' - on header img - changes all text color - stops propogation
const funBus = document.querySelector('header.intro > img')
funBus.addEventListener('click', event => { 
    console.log('funbus clicked')
    document.querySelectorAll('.rainbow').forEach(node => {        
        node.style.backgroundImage = 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)'
        node.style.webkitBackgroundClip = 'text'
        node.style.webkitTextFillColor = 'transparent'
    })
    event.stopPropagation();
})

// 2. Event listener - 'click' on logo - reloads the page from the cache
const logo = document.querySelector('.logo-heading')
logo.addEventListener('click', event => {
    console.log('logo clicked')
    location.reload(false)
})

// 3. Event listener - 'mouseover' - on 'Fun In The Sun' section - changes destination img
const fits = document.querySelector('#funInTheSun')
const destImg = document.querySelector('#destination-img')
fits.addEventListener('mouseover', event => {
    destImg.src = 'img/sun-fun.jpg'
})

// 4. Event listener - 'mouseleave' - on 'Fun In The Sun' section - restores destination img
fits.addEventListener('mouseleave', event => {
    destImg.src = 'img/destination.jpg'
})

// 5. Event listener - 'mouseover' - on 'Mountain Excursion' section - changes destination img
const mtExcursion = document.querySelector('#mountainExcursion')
mtExcursion.addEventListener('mouseover', event => {
    destImg.src = 'img/mountain.png'
})


// 6. Event listener - 'mouseleave' - on 'Mountain Excursion' section - restores destination img
mtExcursion.addEventListener('mouseleave', event => {
    destImg.src = 'img/destination.jpg'
})


// 7. Event listener - 'mouseover' - on 'Island Getaway' section - changes destination img
const island = document.querySelector('#islandGetaway')
island.addEventListener('mouseover', event => {
    destImg.src = 'img/island.jpg'
})


// 8. Event listener - 'mouseleave' - on 'Island Getaway' section - restores destination img
island.addEventListener('mouseleave', event => {
    destImg.src = 'img/destination.jpg'
})


// 9. Event listener - 'click' - on 'Fun In The Sun' button - activates animation
const fitsBtn = document.querySelector('#sun')
fitsBtn.addEventListener('click', event => {
    destImg.style.display = 'none'
    document.querySelector('#destination-header').textContent = "Let's Go!!!"
    document.querySelector('#demo').style.display = ""
    animateScript();
})


// 10. Event listener - 'mouseover' - on navigation menu - trapped
const nav = document.querySelector('.nav')
nav.addEventListener('mouseover', event => alert('Nope.'))



// Animation handler function
let tID; 

function animateScript() {
    let    position = 256; 
    const  interval = 100; 
    tID = setInterval ( () => {
        document.getElementById("image").style.backgroundPosition = `-${position}px 0px`; 
        if (position < 1536) { 
            position = position + 256
        }
        else { 
            position = 256 
        }
    }, interval )
} 