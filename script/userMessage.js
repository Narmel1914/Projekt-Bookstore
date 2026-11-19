
// save the author name once

const AUTHOR_KEY = "Author";


function userNameCreate() {
    if (localStorage.getItem(AUTHOR_KEY) === null) {
        localStorage.setItem(AUTHOR_KEY, "Armel");
    }
}


userNameCreate();


function getTextFomInput(index) {

    let textInput = document.getElementById("get-comment-" + index);
    let text = textInput.value.trim();

    if (text === "") return;

    const name = localStorage.getItem(AUTHOR_KEY);


    let myUserComment = { name: name, comment: text };


    books[index].comments.push(myUserComment);
    /*localStorage.setItem("books", JSON.stringify(books));*/

    document.getElementById("comments-" + index).innerHTML = renderComments(books[index], index);
    updateProgress(index);
    textInput.value = "";
}

