let box = document.querySelector(".box");
let color = ["red", "blue", "green", "skyblue", "pink",'yellow'];
let i = 0;
let fn = () => {
    box.style.backgroundColor = color[i];
    setInterval(() => {
        i++;
        if (i == color.length) {
            i = 0;
        }
        box.style.backgroundColor = color[i];
    }, 1000)
}
fn()