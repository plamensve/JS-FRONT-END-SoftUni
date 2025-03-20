function toggle() {
    let button = document.querySelector(".button");
    let span = document.getElementById("extra");

    if (span.style.display === "none" || span.style.display === "") {
        span.style.display = "block";
        button.textContent = "Less";
    } else {
        span.style.display = "none";
        button.textContent = "More";
    }
}