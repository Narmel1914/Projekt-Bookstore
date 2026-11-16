
/*
function init() {
    renderAllBook();
}
function renderAllBook() {
    renderSingleBook();
    //    renderSingleBook_1();
}

*/

// Read every card book For exampel 3 
let bookListRef = document.getElementById("bookstore");
bookListRef.innerHTML = "";
for (let i = 0; i < 3; i++) {
    bookListRef.innerHTML += buildCard(books[i], i);
}






function toggleLike(index) {
    const heart = document.getElementById("heart-liked-" + index);
    const counter = document.getElementById("card-book-likes-" + index);

    let item = {
        count: books[index].likes,
        selected: books[index].liked
    };

    if ((item.selected === true) && heart.classList.contains("is-liked")) {
        item.selected = true;
        item.count += 1;
        //heart.classList.replace("bi-heart-fill", "bi-heart");
        heart.classList.replace("bi-heart", "bi-heart-fill");

    } else {
        item.selected = false;
        item.count -= 1;
        //heart.classList.replace("bi-heart", "bi-heart-fill");
        heart.classList.replace("bi-heart-fill", "bi-heart");
    }

    counter.innerHTML = `<h3 id="card-book-likes-${index}">${item.count}</h3>`
        ;

}
