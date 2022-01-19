console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'

fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach((imgLink) =>{
            let imgTag = document.createElement('img')
            imgTag.src = imgLink
            document.getElementById('dog-image-container').append(imgTag)
        })
    })   
   