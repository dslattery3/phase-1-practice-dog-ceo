console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// fetch(imgUrl)
//     .then(response => response.json())
//     .then(data => {
//         data.message.forEach((imgLink) =>{
//             let imgTag = document.createElement('img')
//             imgTag.src = imgLink
//             document.getElementById('dog-image-container').append(imgTag)
//         })
//     })   
fetch(breedUrl)
    .then(response => response.json())
    .then(({message}) => {
        console.log(message)
        // const {message} = data

        // Object.keys(data.message).forEach(breed =>{
        for(let breed in message) {
            let liTag = document.createElement('li')
            liTag.innerText = `${breed}`
            document.getElementById('dog-breeds').append(liTag) 

        }
        // data.message.forEach((breed) =>{
        //     let ulTag = document.createElement('ul')
        //     ulTag = breed
        //     document.getElementById('dog-breeds').append(ulTag)
            // console.log(breed)
        // })
    })    