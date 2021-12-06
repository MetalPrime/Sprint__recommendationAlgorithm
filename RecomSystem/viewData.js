class viewData{

    data;
    constructor(data){
        this.data = data;
    }

    render() {
        const newData = document.createElement("div");
        newData.classList.add("data");

        this.data.forEach(function(data,index){
            const innerPerson = document.createElement("div");
            innerPerson.classList.add("data_person");
            innerPerson.classList.add("data_person_"+index);
            Object.entries(data).forEach(([key, value]) => {
                const innerInfo = document.createElement("div");
                innerInfo.innerHTML = `${key} : ${value} `;
                innerPerson.appendChild(innerInfo);
            });
           newData.appendChild(innerPerson);
            
        })

        return newData;
    }
}