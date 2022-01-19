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
    .then(data => {
        console.log(data)

        // Object.keys(data.message).forEach(breed =>{
        for(let breed in data.message) {
            let ulTag = document.createElement('ul')
            ulTag.innerText = `${breed}`
            document.getElementById('dog-breeds').append(ulTag) 

        }
        // data.message.forEach((breed) =>{
        //     let ulTag = document.createElement('ul')
        //     ulTag = breed
        //     document.getElementById('dog-breeds').append(ulTag)
            // console.log(breed)
        // })
    })    