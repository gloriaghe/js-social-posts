
posts.forEach((element) => {

    document.querySelector(".posts-list").innerHTML += 

        `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${element.author.image} alt=${element.author.name}>                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${element.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid=${element.id}>
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
        </div>`

});
//parte esercizio 3

 document.querySelectorAll('.like-button').forEach((item, index) => {
     item.addEventListener('click', event => {

         document.querySelectorAll(".js-like-button");
         item.classList.toggle("like-button--liked"); 
         if(item.classList.contains("like-button--liked")){
             posts[index].likes++;
         }else{
            posts[index].likes--;
         }


         let counter = document.getElementById("like-counter-" + posts[index].id);
         counter.innerText = posts[index].likes; 
   })


 })