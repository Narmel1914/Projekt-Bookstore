function getNameBookTemplate(index) {
    return `<h2>${allInfoBook[index]} </h2>
    `;
}

function getAuthorBookTemplate(index) {
    return `<p> Author: ${allInfoBook[index]}</p>
    `;
}


function getBookLikesTemplate(index) {
    return `<p>${allInfoBook[index]}</p>
    `;
}

function getBookLikedTemplate(index) {
    return `<p>${allInfoBook[index]}</p>
    `;
}
function getBookPriceTemplate(index) {
    return `<p> ${allInfoBook[index]}\u20AC</p>
    `;
}
function getPublishedYearTemplate(index) {
    return `<p>Erscheinungsjahr: ${allInfoBook[index]}</p>
    `;
}

function getBookGenreTemplate(index) {
    return `<p>genre: ${allInfoBook[index]}</p>
    `;
}
