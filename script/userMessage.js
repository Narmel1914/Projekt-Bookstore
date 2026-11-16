const commentInput = document.getElementById("get-comment");
const btnSend = document.getElementById("btn_send");
const commentBox = document.getElementById("comment-box");

function sendComment(index) {
    const input = document.getElementById("get-comment-" + index);
    const text = input.value.trim();
    if (text === "") return;

    books[index].comments.push({ name: "Anonym", comment: text });
    input.value = "";
}

btnSend.addEventListener("click", sendComment);

commentInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") sendComment();
})