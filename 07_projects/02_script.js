const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    const bck = document.querySelector("#heading").getAttribute("backgroundColor")

    document.querySelector("#under").style.backgroundColor = bck;
    document.querySelector("#under").style.color = "black";
    document.querySelector("#normal").style.backgroundColor = bck;
    document.querySelector("#normal").style.color = "black";
    document.querySelector("#over").style.backgroundColor = bck;
    document.querySelector("#over").style.color = "black";

    let bmi;

    if (height === "" || height < 0 || isNaN(height))
    {
        results.innerHTML = "Invalid height, please enter a valid height!";
    }
    else if (weight === "" || weight < 0 || isNaN(weight))
        {
        results.innerHTML = "Invalid weight, please enter a valid weight!";
    }
    else{
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        let resultDescription;
        if (bmi < 18.6)
            {
            resultDescription = document.querySelector("#under");
            resultDescription.style.backgroundColor = "#212121";
            resultDescription.style.color = "#fff";
        }
        else if (bmi >= 18.6 && bmi <= 24.6) {
            resultDescription = document.querySelector("#normal");
            resultDescription.style.backgroundColor = "#212121";
            resultDescription.style.color = "#fff";
        }
        else {
            resultDescription = document.querySelector("#over");
            resultDescription.style.backgroundColor = "#212121";
            resultDescription.style.color = "#fff";
        }
    }
});
