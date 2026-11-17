

let bookListRef = document.getElementById("bookstore");
bookListRef.innerHTML = "";


function init() {
    //initLikes();
    renderAllBook();
}

const originalLikes = [{ likes: 1, liked: false }];

function initLikes() {
    for (let i = 0; i < books.length; i++) {
        books[i].liked = false;
        console.log(originalLikes[0].likes);
        let heart = document.getElementById("heart-liked-" + i);
        if ((books[i].liked == true)) {
            heart.classList.replace("bi-heart", "bi-heart-fill");
        }

    }
}
function renderAllBook() {

    for (let i = 0; i < books.length; i++) {
        bookListRef.innerHTML += buildCard(books[i], i);
    }

}

function toggleLike(index) {

    let heart = document.getElementById("heart-liked-" + index);
    let counter = document.getElementById("card-book-likes-" + index);

    //heart.classList.contains("is-liked")

    heart.classList.replace("bi-heart-fill", "bi-heart");
    if ((!books[index].liked === false)) {
        books[index].liked = false;
        books[index].likes -= 1;
        //heart.classList.replace("bi-heart", "bi-heart-fill");
        heart.classList.replace("bi-heart-fill", "bi-heart");

    } else {
        books[index].liked = true;
        books[index].likes += 1;
        //heart.classList.replace("bi-heart-fill", "bi-heart");
        heart.classList.replace("bi-heart", "bi-heart-fill");
    }


    counter.innerHTML = `${books[index].likes}`
        ;

}

