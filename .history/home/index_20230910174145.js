let box = document.querySelector(".box");
let color = ["red", "bule", "green", "skyblue", "pink"];
let i = 0;
let fn = () => {
    box.style.backgroundColor = color[i];
    setInterval(() => {
        i++;
        if (i == color.length) {
            i = 0;
        }
        console.log(color[1])
        box.style.backgroundColor = color[i];
        console.log(i)
    }, 1000)
}
fn()