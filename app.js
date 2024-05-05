let starRating = document.querySelector(".star-rating");
let stars = document.querySelectorAll(".star")


let currentRating = 0

starRating.addEventListener('mouseover', (e)=>{
    const star = e.target;
    if (star.classList.contains('star')){
        const rating = parseInt(star.dataset.rating, 10)
        highlightstar(rating)
        starcomment(rating)
    }
})

starRating.addEventListener('mouseleave',()=>{
    highlightstar(currentRating)
    starcomment(currentRating)
})

starRating.addEventListener('click',(e)=>{
    const star = e.target
    if(star.classList.contains('star')){
        currentRating = parseInt(star.dataset.rating, 10)
        starRating.setAttribute("data-rating" , currentRating)
        highlightstar(currentRating)
        starcomment(currentRating)
    }
})



function highlightstar(rating){
    stars.forEach((star, index)=>{
        if(index < rating){
            star.classList.add('highlight')
        }
        else{
            star.classList.remove('highlight')
        }
    })
}

function starcomment(currentRating) {
    const comments = ['Very bad 😡', 'Bad 😔', 'Good 🙂', 'Very good 😁', 'Excellent 😍'];
    
    let comment;
    if (currentRating === 0) {
        comment = "Please select a star rating";
    } else {
        const commentIndex = currentRating - 1;
        comment = comments[commentIndex];
    }

    let starInputElement = document.querySelector('#star-input');
    if (starInputElement) {
        starInputElement.value = comment;
    }

    let starCommentElement = document.querySelector(".star-comment");
    if (starCommentElement) {
        starCommentElement.innerHTML = comment;
    } else {
        console.log("Star comment element not found");
    }
}


