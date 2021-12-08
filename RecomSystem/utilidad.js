const options_elements = document.querySelector('.options_elements');
const button = document.querySelector('.button');
let options;
let responseUser = []
const buttonOpinion = document.querySelector('.buttonOpinion');
const opinion_elements = document.querySelector('.opinion_elements');


console.log(button);
(async () => {
    let response = await fetch('eventosInfo.csv');
    response = await response.text();
    response = csvToArray(response);
    
    console.log(response)
    response.forEach((element, index) => {
        options = new selectOption(element,index);
        options_elements.appendChild(options.renderCheckbox());
        
    })
    
    button.addEventListener('click',()=>{
        let checkboxCheck = document.querySelectorAll('input[name="optionsCheck"]:checked');
        checkboxCheck.forEach((element=>{
            let select = new Likert(element);
            responseUser.push(select);
            
        }))

        responseUser.forEach(response =>{
            opinion_elements.appendChild(response.render());
        })
        
        
    })

    buttonOpinion.addEventListener('click',()=>{
        let data = []
        responseUser.forEach(response =>{ 
            data.push(response.info());
            console.log(response.info())
        })
        console.log(data);
        saveStaticDataToFile(data);
        window.location="sliders.html";
    })

})();

function csvToArray(str, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
            object[header] = values[index];
            return object;
        }, {});
        return el;
    });

    return arr;
}

function saveStaticDataToFile(data) {
    
    saveAs(data, "resultado.txt");
}

let saveAs = (function () {
    var a = document.createElement("a");
    // document.body.appendChild(a);
    // a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "text/plain;charset=utf-8"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    }());