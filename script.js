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




    
    stamp.append(creatoDivPost);
})
