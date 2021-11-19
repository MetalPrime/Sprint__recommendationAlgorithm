const categoryNameascent = document.querySelector('.cNameascent');
const categoryNamedescent = document.querySelector('.cNamedescent');
const category1ascent = document.querySelector('.c1ascent');
const category2ascent = document.querySelector('.c2ascent');
const category1descent = document.querySelector('.c1descent');
const category2descent = document.querySelector('.c2descent');

const list_group = document.querySelector('.list-group');

const select__1s2 = document.querySelector('#select__1s2');
const select__2s2 = document.querySelector('#select__2s2');

const select__s3 = document.querySelector('#select__s3');

const select__s4_slider = document.querySelector('#select__s4--slider');
const select__s4_persona = document.querySelector('#select__s4--person');

const btn_compare = document.querySelector('.btn_compare');

const btn_neighbours = document.querySelector('.btn_neighbours');
const btn_recommend = document.querySelector('.btn_recommend');

const result_compare = document.querySelector('.result_compare');
const personas__uno = document.querySelector('.personas');

let view;
let options;
let optionsS4;

//Hilo principal -- Sprint 1
(async () => {
    let response = await fetch('sprint3Fix.csv');

    response = await response.text();

    response = csvToArray(response);



    view = new viewData(response);

    list_group.appendChild(view.render());




})();

//Hilo principal -- Sprint 2
(async () => {
    let response = await fetch('sprint3Fix.csv');

    response = await response.text();

    response = csvToArray(response);



    view = new viewData(response);

    //list_group.appendChild(view.render());

    response.forEach(element => {

        options = new selectOption(element)
        select__1s2.appendChild(options.render());
        select__2s2.appendChild(options.render());
    });

    btn_compare.addEventListener('click', function () {

        let selectedOption1 = selectedValue(select__1s2.value, response);
        let selectedOption2 = selectedValue(select__2s2.value, response);

        if (CheckDirection(selectedOption1, selectedOption2)) {
            console.log('entro');
            result_compare.innerHTML = `${getDistToEqualDirectionVector(selectedOption1, selectedOption2)} %`;
        } else {
            result_compare.innerHTML = `${similitudCoseno(selectedOption1, selectedOption2)} %`;
        }



    })


})();

//Hilo principal -- Sprint 3
(async () => {
    let response = await fetch('sprint3Fix.csv');

    response = await response.text();

    response = csvToArray(response);


    response.forEach(element => {

        options = new selectOption(element)
        select__s3.appendChild(options.render());
    });

    btn_neighbours.addEventListener('click', function () {
        result_compare.innerHTML = "";
        personas__uno.innerHTML = "";

        let list = personKNN(selectedValue(select__s3.value, response), response);
        console.log(list);
        let kN = getKvalueFromList(response);
        list = sortKNN(list);
        const kList = list.slice(0, kN);

        kList.forEach((elem, index) => {
            const personName = elem.nombre;
            const personNumber = elem.similitudCoseno;
            const personFigure = document.createElement("figure");
            const personNameF = document.createElement("h5")
            const personNumberF = document.createElement("p");

            personNameF.innerText = personName;
            personNumberF.innerText = personNumber;

            personFigure.appendChild(personNameF);
            personFigure.appendChild(personNumberF);

            personFigure.style.top = (100 * index) + "px"

            personFigure.style.left = 10 * (100 - personNumber) + "px";
            //personFigure.style.right = (window.innerWidth*personNumber/100)+"px";

            personas__uno.appendChild(personFigure);

        });

    })


})();

//Hilo principal -- Sprint 4
(async () => {
    ///csv 1 personas
    let response = await fetch('Sprint4_personas.csv');

    response = await response.text();

    response = csvToArray(response);

    ////csv 2 pizzas

    let responseTwo = await fetch('Sprint4_pizza.csv');

    responseTwo = await responseTwo.text();

    responseTwo = csvToArray(responseTwo);

    ////////// render sliders

    let listObjects = [];


    let baseObject = Object.keys(response[0]);
    baseObject = baseObject.filter(element => element != 'Nombre/Topping');
    baseObject = baseObject.forEach((element) => {

        let obj = { nombre: element }

        listObjects.push(obj)
    });

    listObjects.forEach((element) => {


        optionsS4 = new selectOption(element);
        select__s4_slider.appendChild(optionsS4.renderSlider());

    });


    //////////////aqui inicia la magia

    response.forEach(element => {

        options = new selectOption(element);

        select__s4_persona.appendChild(options.render());
    });

    btn_recommend.addEventListener('click', function () {

        let list = personKNN(selectedValue(select__s4_persona.value, response), response);
        console.log(list);
        let kN = getKvalueFromList(response);
        list = sortKNN(list);
        const kList = list.slice(0, kN);

        let KListProps = []
        kList.forEach(compareThing => {
            response.forEach(element => {
                if (compareThing.nombre === element.nombre) {
                    KListProps.push(element);
                }
            })

        })


        KListProps = similarityBehaviour(KListProps);
        getPossibleOptions(responseTwo, KListProps);
        console.log({ responseTwo });
        console.log({ KListProps });
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


function selectedValue(value, list) {

    let selected = {};
    for (var i = 0; i < list.length; i++) {
        selected = value === list[i].nombre ? selected = list[i] : selected;

    }

    return selected;
}


//excluir name 
function similitudCoseno(a, b) {
    const vectorA = personToVector(a);
    const vectorB = personToVector(b);

    const resultPP = productoPunto(vectorA, vectorB);
    const magA = magnitud(vectorA);
    const magB = magnitud(vectorB);

    return Math.round((resultPP / (magA * magB)) * 100);
}

function productoPunto(a, b) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result += a[i] * b[i];
    }
    return result;
}

function magnitud(vector) {

    let result = 0;
    for (let i = 0; i < vector.length; i++) {
        result += (vector[i] * vector[i]);
    }
    return Math.sqrt(result);
}

function personToVector({ nombre, ...person }) {
    return Object.values(person).map(per => parseInt(per))
}

function CheckDirection(vectorA, vectorB) {

    let vectorConvertidoA = personToVector(vectorA);
    let vectorConvertidoB = personToVector(vectorB);
    const maxA = Math.max.apply(Math, vectorConvertidoA);
    const maxB = Math.max.apply(Math, vectorConvertidoB);

    console.log(maxA);
    console.log(maxB);

    let aNormalized = [];
    let bNormalized = [];


    for (let i = 0; i < vectorConvertidoA.length; i++) {

        aNormalized.push(vectorConvertidoA[i] / maxA);
    }

    for (let i = 0; i < vectorConvertidoB.length; i++) {

        bNormalized.push(vectorConvertidoB[i] / maxB);
    }

    let total = 0;
    for (let i = 0; i < aNormalized.length; i++) {

        total += aNormalized[i] - bNormalized[i];

        console.log(aNormalized[i] - bNormalized[i]);
    }

    if (total == 0) {

        return true;
    }

    else {
        return false;
    }


}

function getDistToEqualDirectionVector(vectorA, vectorB) {

    //return Math.abs(CalculateMagnitude(vectorA)-CalculateMagnitude(vectorB)/Math.max(CalculateMagnitude(vectorA),CalculateMagnitude(vectorB)));
    let vectorConvertidoA = personToVector(vectorA);
    let vectorConvertidoB = personToVector(vectorB);
    const a = magnitud(vectorConvertidoA);
    const b = magnitud(vectorConvertidoB);

    console.log((Math.abs(a - b) / Math.max(a, b)) * 100);

    //return (Math.abs(a+b)/Math.max(a,b))*100 === 0 ? 100 : (Math.abs(a+b)/Math.max(a,b))*100;
    return 100 - ((Math.abs(a - b) / Math.max(a, b)) * 100);
}

function getKvalueFromList(list) {
    let total = list.length;
    return Math.sqrt(total);

}

function personKNN(person, list) {
    var kNNlist = [];

    list.forEach(e => {
        if (person.nombre != e.nombre) {
            var element = { nombre: e.nombre, "similitudCoseno": similitudCoseno(person, e) }
            kNNlist.push(element);


        }
    })

    return kNNlist;
}

function sortKNN(list) {
    return list.sort(function (a, b) {
        return b.similitudCoseno - a.similitudCoseno;
    });
}

function similarityBehaviour(list) {
    list = list.map(element => {
        return sortForProps(element);
    });

    //filter elems to array to obj with top 4 elems
    list = list.map(element => {
        return Object.fromEntries(Object.entries(element).filter(([key, value], index) => index < 5));
    })

    /* list = list.map((element) =>{
        for (const key in element){
            if( element[key] <=7){
                delete element[key];
            }
         console.log(key);
       } 
       return element;
    }) */

    let itemsInCommun = [];
    list.forEach((element) => {
        for (const key in element) {
            itemsInCommun.push(key);
        }
    })

    itemsInCommun = itemsInCommun.filter(item => item != "nombre");

    counts = {}
    itemsInCommun = itemsInCommun.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });


    counts = Object.fromEntries(Object.entries(counts).filter(([key, value]) => value === 4));



    return counts;
}

function sortForProps(list) {
    let sortList = Object.keys(list).sort(function (a, b) {

        return list[b] - list[a]
    }).reduce((a, v) => {
        a[v] = list[v];
        return a;
    }, {});
    return sortList
}

function getPossibleOptions(listOptions, listElementsInCommun) {


    const getSimiliarPizzas = (compareProp) =>
        listOptions.filter(option => option[compareProp] === '10')
        ;

    return result = Object.keys(listElementsInCommun).map(getSimiliarPizzas);



}

////////////////sprint 1 elementos