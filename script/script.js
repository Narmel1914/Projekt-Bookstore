/*
JAVASCRIPT als Programmierunsprach
Projekttitel: Bookstore
Datum : 16 bis 19:11:2026
Durchgeführt von: ARMEL NYA 
Ziel des Projekts
Beobachtung: Mentor Developper Akademie
*/

function init() {

    renderAllBook();
    initLikes();

}



function initLikes() {

    for (let i = 0; i < books.length; i++) {

        let heart = document.getElementById("heart-liked-" + i);

        if ((!books[i].liked == true)) {
            heart.classList.replace("bi-heart-fill", "bi-heart");
        }
        else {
            heart.classList.replace("bi-heart", "bi-heart-fill")
        }
    }

}


function renderAllBook() {
    let bookListRef = document.getElementById("bookstore");
    bookListRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        bookListRef.innerHTML += buildCard(books[i], i);
    }

    for (let i = 0; i < books.length; i++) {
        updateProgress(i);
    }

}

function toggleLike(index) {

    let heart = document.getElementById("heart-liked-" + index);
    let counter = document.getElementById("card-book-likes-" + index);


    heart.classList.replace("bi-heart-fill", "bi-heart");
    if ((!books[index].liked === false)) {
        books[index].liked = false;
        books[index].likes -= 1;

        heart.classList.replace("bi-heart-fill", "bi-heart");

    } else {
        books[index].liked = true;
        books[index].likes += 1;

        heart.classList.replace("bi-heart", "bi-heart-fill");
    }


    counter.innerHTML = `${books[index].likes}`
        ;

}

