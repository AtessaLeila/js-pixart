let form = document.querySelector("#form");
let color = document.querySelector('#color-field').value;
let brush = document.querySelector(".brush")


form.addEventListener("submit", submit)
function submit(e) {
    e.preventDefault();
    let userColor = e.target.elements[0].value
    brush.style.background = userColor
}



form.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        color.click();
    }
})


for (i = 0; i <= 8000; i++) {
    let aDiv = document.createElement('div');
    aDiv.className = "square";
    document.querySelector('body').appendChild(aDiv);
    // aDiv.onclick = function () {
    //     aDiv.style.background = "green"
    // }
}


const squares = document.querySelectorAll(".square")
for (const square of squares) {
    square.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = document.querySelector('#color-field').value;
    }, false)
}