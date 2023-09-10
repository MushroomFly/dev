let box = document.querySelector(".box");
let color = ["red", "bule", "green", "skyblue", "pink"];
let i = 0;
let fn = () => {
    setInterval(() => {
        i++;
        box.style.backgroundColor = color[i];
    }, 1000)
}
fn()