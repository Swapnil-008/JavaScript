const buttons = document.querySelectorAll(".button")
// console.log(buttons)
const body = document.querySelector("body")

let previousBlock = null;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const block = document.getElementById(e.target.id);

        if (previousBlock && previousBlock != block)
        {
            previousBlock.style.backgroundColor = previousBlock.id;
        }

        body.style.backgroundColor = e.target.id;
        block.style.backgroundColor = "grey";
        previousBlock = block;
    });
});
