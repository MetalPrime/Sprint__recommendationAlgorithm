const options_elements = document.querySelector('.options_elements');
const button = document.querySelector('.button');
let options;

const buttonOpinion = document.querySelector('.buttonOpinion');
const opinion_elements = document.querySelector('.opinion_elements');


console.log(button);
(async () => {
    let response = await fetch('pesos.csv');
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
            opinion_elements.appendChild(select.render());
        }))
        
    })

    buttonOpinion.addEventListener('click',()=>{

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