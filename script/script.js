

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

    let heart = document.getElementById("heart-liked-" + index);
    let counter = document.getElementById("card-book-likes-" + index);

    //heart.classList.contains("is-liked")

    if ((!books[index].liked == true)) {
        books[index].liked = true;
        books[index].likes += 1;
        heart.classList.replace("bi-heart", "bi-heart-fill");


    } else {
        books[index].liked = false;
        books[index].likes -= 1;
        heart.classList.replace("bi-heart-fill", "bi-heart");

    }

    counter.innerHTML = `<h3 id="card-book-likes-${index}">${books[index].likes}</h3>`
        ;
    localStorage.setItem("counter", JSON.stringify(counter));
    localStorage.setItem("likes", JSON.stringify(heart));
}


