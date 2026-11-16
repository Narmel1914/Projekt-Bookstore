const commentInput = document.getElementById("get-comment");
const btnSend = document.getElementById("btn_send");
const commentBox = document.getElementById("comment-box");

function sendComment() {
    const text = commentInput.value.trim();
    if (text === "") return;

    const div = document.createElement("div");
    div.className = "alert alert-secondary py-2 mb-2";
    div.textContent = text;
    commentBox.appendChild(div);

    commentInput.value = "";
    commentInput.focus();
}

btnSend.addEventListener("click", sendComment);

commentInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") sendComment();
})