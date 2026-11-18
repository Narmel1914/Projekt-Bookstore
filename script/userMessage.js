
// save the author name once (only if it does not exist yet)

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

    const name = localStorage.getItem(AUTHOR_KEY); // key is a string


    let myUserComment = { name: name, comment: text };


    books[index].comments.push(myUserComment);
    localStorage.setItem("books", JSON.stringify(books));

    document.getElementById("comments-" + index).innerHTML = isComment(books[index], index);
    updateProgress(index);
    textInput.value = "";
}