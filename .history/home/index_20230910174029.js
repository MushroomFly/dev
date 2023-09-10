let box = document.querySelector(".box");
let color = ["red", "bule", "green", "skyblue", "pink"];
let i = 0;
let fn = () => {
    box.style.backgroundColor = color[i];
    setInterval(() => {
        console.log(color[i])
        i++;
        if (i == color.length) {
            i = 0;
        }
        console.log(color[i])
        box.style.backgroundColor = color[i];
    }, 1000)
}
fn()