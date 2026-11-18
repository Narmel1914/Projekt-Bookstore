const COMMENT_GOAL = 20;

function updateProgress(index) {
    const bar = document.getElementById("progress-bar-" + index);
    if (!bar) return;

    const count = books[index].comments.length;

    const percent = Math.min(100, Math.round((count / COMMENT_GOAL) * 100));

    bar.style.height = percent + "%";

    bar.parentElement.setAttribute("aria-valuenow", percent);
    bar.style.width = "50px";
}