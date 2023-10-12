
fetch('http://localhost:3000/current-exhibits')
.then(response => response.json())
.then(exhibits => {
   // exhibits.forEach(exhibit => exhibitsDetail(exhibit))
    exhibitsDetail(exhibits[0])
    console.log(exhibits[0])
})

function exhibitsDetail(exhibit) {
    const  exhibitTitle = document.querySelector('#exhibit-title')
    exhibitTitle.textContent = exhibit.title
    const exhibitDescription = document.querySelector('#exhibit-description')
    exhibitDescription.textContent = exhibit.description 
    const exhibitImage = document.querySelector('#exhibit-image')
    exhibitImage.src = exhibit.image
    const commmentSection = document.getElementById('comments-section')
    exhibit.comments.forEach(comment => {
    
        const pElement = document.createElement('p')
        pElement.textContent = comment
        commmentSection.appendChild(pElement)

  })

    
}

//Deliverable Two

const commentForm = document.querySelector('#comment-form')
commentForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const comment = commentForm[0].value
    const pElement = document.createElement('p')
    pElement.textContent = comment
    const commmentSection = document.getElementById('comments-section')
    commmentSection.appendChild(pElement)

    //console.log(commentInputElement.value)
})







 


 
  