
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
const personas = document.querySelector('.personas_s4');
const select__aggreation = document.querySelector('.select__aggreation');

const recommendation = document.querySelector('.recommendation');

let view;
let options;
let optionsS4;
let sliders = [];
let listValuesSlider = [];
let num = 0;
let naive = 0;







// //Hilo principal -- Sprint 3
// (async () => {
//     let response = await fetch('sprint3Fix.csv');

//     response = await response.text();

//     response = csvToArray(response);


//     response.forEach(element => {

//         options = new selectOption(element)
//         select__s3.appendChild(options.render());
//     });

//     btn_neighbours.addEventListener('click', function () {
//         result_compare.innerHTML = "";
//         personas__uno.innerHTML = "";

//         let list = personKNN(selectedValue(select__s3.value, response), response);
//         console.log(list);
//         let kN = getKvalueFromList(response);
//         list = sortKNN(list);
//         const kList = list.slice(0, kN);

//         kList.forEach((elem, index) => {
//             const personName = elem.nombre;
//             const personNumber = elem.similitudCoseno;
//             const personFigure = document.createElement("figure");
//             const personNameF = document.createElement("h5")
//             const personNumberF = document.createElement("p");

//             personNameF.innerText = personName;
//             personNumberF.innerText = personNumber;

//             personFigure.appendChild(personNameF);
//             personFigure.appendChild(personNumberF);

//             personFigure.style.top = (100 * index) + "px"

//             personFigure.style.left = 10 * (100 - personNumber) + "px";
//             //personFigure.style.right = (window.innerWidth*personNumber/100)+"px";

//             personas__uno.appendChild(personFigure);

//         });

//     })


// })();

const recommendations = document.querySelector(".recommendationsContainer");

if(recommendations){

    console.log(recommendations)
let obj = {

    title: "concierto",
    date:"mañana",
    place:"aquí"
}
let recommendationOBj = new Recommendation(obj)

    
recommendations.appendChild(recommendationOBj.render()) 
}




////////////////  Hilo principal -- Sprint 4 //////////////////////////////
(async () => {


    ///csv 1 personas
    let response = await fetch('personasPesos.csv');
    // let response = await fetch('Sprint4_personas.csv');

    response = await response.text();

    response = csvToArray(response);

    ///////CSV de las Pizzas

    let pizzaFlavours = await fetch('pesos.csv');
    // let pizzaFlavours = await fetch('Sprint4_pizza.csv');

    pizzaFlavours = await pizzaFlavours.text();

    pizzaFlavours = csvToArray(pizzaFlavours);

    /////// Render sliders

    let listObjects = [];

    //valores del slider


    // let baseObject = Object.keys(response[0]);
    let baseObject = Object.keys(pizzaFlavours[0]);
    //toping
    baseObject = baseObject.filter(element => element != 'nombre');
    baseObject = baseObject.forEach((element) => {

        let obj = { nombre: element }

        listObjects.push(obj)

    });
    // console.log(listObjects+"listobjets")

    listObjects.forEach((element) => {

        optionsS4 = new selectOption(element);
        select__s4_slider.appendChild(optionsS4.renderSlider());
        sliders.push(element.nombre);
        //listValuesSlider.push(valueSlider(element.nombre));


    });


    ////////////////////////////////////////////////////////////////////////

    




    //////////////Similarity Behaviour

    response.forEach(element => {

        options = new selectOption(element);

        select__s4_persona.appendChild(options.render());
    });



    ///// BUTTON SPRINT 4

    btn_recommend.addEventListener('click', function () {


        window.location.href="./recommend.html"

        // recommendation.innerHTML = "";
        // personas.innerHTML = "";

        // //Lista de perosnas cercanas entra el valor seleccionado y la lista
        // const selectedPerson = selectedValue(select__s4_persona.value, response);
        // let modPerson = {}
        // modPerson = { ...selectedPerson }

        // console.log({ modPerson });

        // sliders.forEach(elem => {
        //     valueSlider(elem);
        // })






      

        // ///Modificar el peso del topping 

        // Object.keys(selectedPerson).forEach(function (key) {
        //     listValuesSlider.forEach(elem => {
        //         if (elem.name === key) {
        //             console.log(elem.value);
        //             modPerson[key] = (Number.parseFloat(selectedPerson[key]) * (Number.parseFloat(elem.value)));
        //         }
        //     });
        // });
        // console.log({ selectedPerson })
        // console.log({ modPerson });

       




        // let listSimilitudCoseno = personKNN(modPerson, response);
        // // console.log(listSimilitudCoseno);
        // //El Nearest neighbour (raiz cuadrada del total)
        // let kN = getKvalueFromList(response);
        // listSimilitudCoseno = sortKNN(listSimilitudCoseno);
        // const kList = listSimilitudCoseno.slice(0, kN);
        // console.log({ kList });
        // let KListProps = []
        // kList.forEach(compareThing => {
        //     response.forEach(element => {
        //         if (compareThing.nombre === element.nombre) {
        //             KListProps.push(element);
        //         }
        //     })
        // })

        // let recommendedPizzas = [];
        // let propsSimilar = {};

        // switch (select__aggreation.value) {
        //     case "least":
        //         propsSimilar = leastMisery();
        //         break;
        //     case "maximun":
        //         propsSimilar = maxPleasure();
        //         break;
        //     case "median":
        //         propsSimilar = medianSatisfaction();
        //         break;
        //     case "similarity":
        //         propsSimilar = similarityBehaviour(KListProps);
        //         break;

        // }


       

        // naive = naiveAverage(KListProps);
        // console.log({ naive });
        // console.log(desviacionestandar(naive))

        // recommendedPizzas = getPossibleOptions(pizzaFlavours, propsSimilar);
        // console.log({ recommendedPizzas });


        // ///AQUI ES DONDE SE PINTA
        // recommendedPizzas.forEach(pizza => {

        //     recommendation.innerHTML += (`<p>${pizza.nombre}</p>`);


        // })

        // kList.forEach(persona => {
        //     personas.innerHTML += (`<p> Nombre ${persona.nombre} SimilitudCoseno: ${persona.similitudCoseno} % </p>`)
        // })

        // console.log({ KListProps });

    })


})();



//FunctionShowSliderValue



function showSliderValue() {
    rangeBullet.innerHTML = rangeSlider.value;
    const bulletPosition = (rangeSlider.value / rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 578) + "px";
}

  

///Function Value Slider 
function valueSlider(slider) {


    const valueSlider = select__s4_slider.querySelector("#" + slider);
    let valueSliderOption = {}

    valueSliderOption = { name: slider, value: valueSlider.value };
    // console.log("value " + slider + valueSlider.value);
    listValuesSlider.push(valueSliderOption)
    // console.log({ valueSliderOption})
    return listValuesSlider;
}

//CSV partido a arreglo

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



/// Nearest Neighbour 

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

function sortForProps(list) {
    let sortList = Object.keys(list).sort(function (a, b) {

        return list[b] - list[a]
    }).reduce((acc, v) => {
        acc[v] = list[v];
        return acc;
    }, {});
    return sortList
}


//// Function Similarity Behaviour

function similarityBehaviour(list) {
    list = list.map(element => {
        return sortForProps(element);
    });

    //filter elems to array to obj with top 4 elems
    list = list.map(element => {
        return Object.fromEntries(Object.entries(element).filter(([key, value], index) => index < 5));
    })

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

////

function naiveAverage(list) {
    console.log({ list })
    const { nombre, ...seed } = list[0];

    const transformed = list.reduce((acc, { nombre, ...item }) => {
        const newVal = { ...acc };


        for (let prop in item) {
            newVal[prop] = (
                (
                    (newVal[prop] ?? 0) + parseFloat(item[prop])
                ) / 2
            );
        }

        return newVal;
    }, {})

    console.log({ transformed });

    return transformed;

}

function maxPleasure() {

    let pleasure = {};

    console.log(naive);

    for (let i = 0; i < Object.keys(naive).length; i++) {

        if (Object.values(naive)[i] >= 8) {


            pleasure[Object.keys(naive)[i]] = Object.values(naive)[i];


        }





    }
    return pleasure;

}





function leastMisery() {

    let misery = {};

    console.log(naive);

    for (let i = 0; i < Object.keys(naive).length; i++) {


        if (Object.values(naive)[i] <= 5) {


            misery[Object.keys(naive)[i]] = Object.values(naive)[i];
        }






    }
    return misery

}










function desviacionestandar(arr) {
    let entries = Object.entries(arr);
    console.log(entries);
    let mean = entries.reduce((acc, curr) => {
        return acc + curr
    }, 0) / entries.length;

    // Assigning (value - mean) ^ 2 to every entriesay item
    entries = entries.map((k) => {
        return (k - mean) ** 2
    })

    // Calculating the sum of updated entriesay
    let sum = entries.reduce((acc, curr) => acc + curr, 0);

    // Calculating the variance
    let variance = sum / entries.length

    // Returning the Standered deviation
    return Math.sqrt(sum / entries.length)
}

function medianSatisfaction() {
    let medium = {};

    console.log(naive);

    for (let i = 0; i < Object.keys(naive).length; i++) {


        if (Object.values(naive)[i] >= 6 && Object.values(naive)[i] <= 9) {


            medium[Object.keys(naive)[i]] = Object.values(naive)[i];
        }






    }
    return medium
}





/////Opciones para la pizza por usuario
function getPossibleOptions(allFlavors, listElementsInCommun) {

    num = 0;
    console.log("antes" + num);
    num = listValuesSlider.filter((slider) => (slider.value === "1")).length;


    console.log({ listElementsInCommun });
    /* const getSimiliarPizzas = (compareProp) => {
        allFlavors.filter(option => { option[compareProp] === '10' });
    } 
    pizzas = Object.keys(listElementsInCommun).map(getSimiliarPizzas);
    */

    const response = Object.keys(listElementsInCommun).reduce((acc, compareProp) => {
        return acc.filter(option => { return option[compareProp] === '10' });
    }, allFlavors);
    //sacamos las keys [queso, jamón], reducer el estado inicial son todas las pizzas, recibe todas las pizzas con queso filtradas en su segunda vuelta,
    //y en su tercera vuelta por jamón 
    console.log({ response })

    return response;



}



