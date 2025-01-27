const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const bodyElement = document.querySelector("body")
let interval;
const colorChange = () => {
    // Another way to set the random color
    // const randomNumber = Math.floor(Math.random() * 1000000 + 1)
    // bodyElement.style.backgroundColor = `#${randomNumber}`;
    const hexColor = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++)
    {
        color += hexColor[Math.floor(Math.random() * 16)]
    }
    bodyElement.style.backgroundColor = color;
}

startButton.addEventListener('click', () => {
    if(interval == null)
    {
        interval = setInterval(colorChange, 1000)
    }
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = null   // After clearing the interval setting it to null
})