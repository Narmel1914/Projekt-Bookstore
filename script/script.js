// get data from db.js

console.log('Objects', books);


function getSingleBook(Objects, param) {
    let arrayObjects = [];
    arrayObjects.push(Objects[param].name,
        Objects[param].author,
        Objects[param].likes,
        Objects[param].liked,
        Objects[param].price,
        Objects[param].publishedYear,
        Objects[param].genre)
    return arrayObjects;
}


//console.log('info Objects:', allInfoBook[0], allInfoBook[1],
//    allInfoBook[2], allInfoBook[3], allInfoBook[4], allInfoBook[5], allInfoBook[6]
//);


//console.log('first book length:', allInfoBook.length);
//console.log('first book length:', allInfoBook);

function renderSingleBook(index) {
    switch (index) {
        case 0:
            let nameBookRef = document.getElementById("card-book-name");
            nameBookRef.innerHTML = getNameBookTemplate(index);
            break;
        case 1:
            let authorBookRef = document.getElementById("card-book-author");
            authorBookRef.innerHTML = getAuthorBookTemplate(index);
            break;
        case 2:
            let bookLikesRef = document.getElementById("card-book-likes");
            bookLikesRef.innerHTML = getBookLikesTemplate(index);
            break;
        case 3:
            let bookLikedRef = document.getElementById("card-book-liked");
            bookLikedRef.innerHTML = getBookLikedTemplate(index);
            break;
        case 4:
            let priceBookRef = document.getElementById("card-book-price");
            priceBookRef.innerHTML = getBookPriceTemplate(index);
            break;
        case 5:
            let publishedYearRef = document.getElementById("card-book-publishedYear");
            publishedYearRef.innerHTML = getPublishedYearTemplate(index);
            break;
        case 6:
            let bookGenreRef = document.getElementById("card-book-genre");
            bookGenreRef.innerHTML = getBookGenreTemplate(index);
            break;

    }

}

let allInfoBook = getSingleBook(books, 0);

for (let index = 0; index < books.length; index++) {
    renderSingleBook(index);

}
