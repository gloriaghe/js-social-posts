// funzione per creare elementi

const stamp = document.querySelector(".posts-list");

    
posts.forEach((element) => {
    const creatoDivPost = document.createElement("div");
    creatoDivPost.classList.add("post");
    // parte autore con foto
    const creatoDivIcon = document.createElement("div");
    creatoDivIcon.classList.add("post__header");
    creatoDivPost.append(creatoDivIcon);

    const creatoDivMeta = document.createElement("div");
    creatoDivMeta.classList.add("post-meta");
    creatoDivIcon.append(creatoDivMeta);

    const author = document.createElement("div");
    author.classList.add("post-meta__icon");
    creatoDivMeta.append(author);

    const authorImg = document.createElement("img");
    authorImg.classList.add("profile-pic");
    authorImg.setAttribute("src", element.author.image);
    author.append(authorImg);

    const dataPosts = document.createElement("div");
    dataPosts.classList.add("post-meta__data");
    creatoDivMeta.append(dataPosts);

    const dataPostsAuthor = document.createElement("div");
    dataPostsAuthor.classList.add("post-meta__author");
    dataPostsAuthor.innerHTML = element.author.name;

    const dataPostsTime = document.createElement("div");
    dataPostsTime.classList.add("post-meta__time");
    dataPostsTime.innerHTML = element.created
    
    dataPosts.append(dataPostsAuthor, dataPostsTime);

    //parte testo

    const text = document.createElement("div");
    text.classList.add("post__text");
    text.innerHTML = element.content;
    creatoDivPost.append(text);

    //parte immagine

    const imgPosts = document.createElement("div");
    imgPosts.classList.add("post__image");
    const imgPostArray = document.createElement("img");
    imgPostArray.setAttribute("src", element.media);
    imgPosts.append(imgPostArray);
    creatoDivPost.append(imgPosts);

    //footer posts

    const postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");
    const postFooterLikes = document.createElement("div");
    postFooterLikes.classList.add("likes", "js-likes");
    postFooter.append(postFooterLikes);
    const likesCta = document.createElement("div");
    likesCta.classList.add("likes__cta");
    const likeButtonA = document.createElement("a");
    likeButtonA.classList.add("like-button", "js-like-button");
    likeButtonA.setAttribute("href", "#");
    likeButtonA.setAttribute("data-postid", element.id);

    const likeButton = document.createElement("i");
    likeButton.classList.add("like-button__icon", "fas", "fa-thumbs-up");
    likeButton.setAttribute("aria-hidden", "true");
    const likeButtonSpan = document.createElement("span");
    likeButtonSpan.classList.add("like-button__label");
    likeButtonSpan.innerHTML = "Mi piace";
    likeButtonA.append(likeButton, likeButtonSpan);
    likesCta.append(likeButtonA);


    const likesCounter = document.createElement("div");
    likesCounter.classList.add("likes__counter");
    likesCounter.append("Piace a ");
    const counterPost = document.createElement("b");
    counterPost.classList.add("js-likes-counter");
    counterPost.append(element.likes);
    likesCounter.append(counterPost, " persone");


    likesCounter
    postFooterLikes.append(likesCta, likesCounter);

    creatoDivPost.append(postFooter);
    
    stamp.append(creatoDivPost);



    
});



//parte esercizio 3

document.querySelectorAll('.js-like-button').forEach(item => {
    item.addEventListener('click', event => {

        document.querySelectorAll(".like-button");
        item.classList.add("like-button--liked"); 
        

            posts.likes++
            document.querySelectorAll("b").innerHTML= 1 ;
        
    
    
})
  })


