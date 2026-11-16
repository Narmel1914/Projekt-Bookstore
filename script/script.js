

function init() {
    renderAllBook();
}
function renderAllBook() {
    let bookListRef = document.getElementById("bookstore");
    bookListRef.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        bookListRef.innerHTML += buildCard(books[i], i);
    }

}


function toggleLike(index) {

    const heart = document.getElementById("heart-liked-" + index);
    const counter = document.getElementById("card-book-likes-" + index);

    //heart.classList.replace("bi-heart", "bi-heart-fill");
    heart.classList.replace("bi-heart-fill", "bi-heart");

    if ((books[index].liked == true) || heart.classList.contains("is-liked")) {
        books[index].liked = true;
        books[index].likes -= 1;
        heart.classList.replace("bi-heart-fill", "bi-heart");


    } else {
        books[index].liked = false;
        books[index].likes += 1;
        heart.classList.replace("bi-heart", "bi-heart-fill");

    }

    counter.innerHTML = `<h3 id="card-book-likes-${index}">${books[index].likes}</h3>`
        ;

}
