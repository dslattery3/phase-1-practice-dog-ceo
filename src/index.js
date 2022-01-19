console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//Challenge 1
// fetch(imgUrl)
//     .then(response => response.json())
//     .then(data => {
//         data.message.forEach(buildAndAppendDogElement)
//     })
// function buildAndAppendDogElement(imgUrl){
//     let imgTag = document.createElement('img')
//              imgTag.src = imgUrl
//             document.getElementById('dog-image-container').append(imgTag)
// }
//Challenge 2
// fetch(breedUrl)
//     .then(response => response.json())
//     .then(data => {
//         for(let breed in data.message) {
//             let liTag = document.createElement('li')
//             liTag.innerText = `${breed}`
//             document.getElementById('dog-breeds').append(liTag) 
//         }
//     })   
//Challenge 3 
//change color of text when clicked
//use event listener
fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        for(let breed in data.message) {
            let liTag = document.createElement('li')
            liTag.innerText = `${breed}`
            document.getElementById('dog-breeds').append(liTag) 
        }
    })
let li = document.getElementsByTagName('li')
li.addEventListener('click', colorChange
    // let liText = li.text
    // liText.style.color = 'black'
)
function colorChange(){
    alert('clicked')
}