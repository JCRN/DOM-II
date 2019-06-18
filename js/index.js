// Your code goes here

// 1. Event listener - 'click' - on header img - changes all text color 
const funBus = document.querySelector('header.intro > img')
funBus.addEventListener('click', event => { 
    console.log('funbus clicked')
    document.querySelectorAll('.rainbow').forEach(node => {
        node.style.backgroundImage = 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)'
        node.style.webkitBackgroundClip = 'text'
        node.style.webkitTextFillColor = 'transparent'
    })
})

// 2. Event listener - 'click' on logo - reloads the page from the cache
const logo = document.querySelector('.logo-heading')
logo.addEventListener('click', event => {
    console.log('logo clicked')
    location.reload(false)
})

// 3. Event listener - 'mouseover' - on 'Fun In The Sun' section - briefly changes destination img
const fits = document.querySelector('#funInTheSun')
fits.addEventListener('mouseover', event => {
    document.querySelector('#destination-img').src = 'img/sun-fun.jpg'
})

// 4. Event listener - 'mouseleave' - on 'Fun In The Sun' section - briefly changes destination img
fits.addEventListener('mouseleave', event => {
    document.querySelector('#destination-img').src = 'img/destination.jpg'
})

// 5. Event listener - 'mouseover' - on 'Mountain Excursion' section - briefly changes destination img
const mtExcursion = document.querySelector('#mountainExcursion')
mtExcursion.addEventListener('mouseover', event => {
    document.querySelector('#destination-img').src = 'img/mountain.png'
})


// 6. Event listener - 'mouseleave' - on 'Mountain Excursion' section - briefly changes destination img
mtExcursion.addEventListener('mouseleave', event => {
    document.querySelector('#destination-img').src = 'img/destination.jpg'
})


// 7. Event listener - 'mouseover' - on 'Island Getaway' section - briefly changes destination img
const island = document.querySelector('#islandGetaway')
island.addEventListener('mouseover', event => {
    document.querySelector('#destination-img').src = 'img/island.jpg'
})


// 8. Event listener - 'mouseleave' - on 'Island Getaway' section - briefly changes destination img
island.addEventListener('mouseleave', event => {
    document.querySelector('#destination-img').src = 'img/destination.jpg'
})


// 8. Event listener - ''


// 9. Event listener - ''


// 10. Event listener - ''

