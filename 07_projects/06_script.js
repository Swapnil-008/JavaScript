const insertDiv = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
    insertDiv.innerHTML = `
    <div class = "color"> 
    <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>`
    const table = document.querySelector('table');
    table.style.border = "2px solid white";
    table.style.margin = "auto";
    table.style.color = "#fff";
})