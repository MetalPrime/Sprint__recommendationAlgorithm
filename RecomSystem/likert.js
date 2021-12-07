class Likert {
    constructor(data){
        this.data = data;
        this.select = document.createElement("ul");
        this.valor;
    }

    render(){
        const container = document.createElement('div');
        const title = document.createElement('p');
        title.innerHTML = `${this.data.value}`;
        
        const select = 
        this.select.className = `likert_${this.data.value} likert`;
        this.select.innerHTML = `
        <li> Poco interés </li>
        <li><input type="checkbox" name="likeness_${this.data.value}" value="1" /></li>
        <li><input type="checkbox" name="likeness_${this.data.value}" value="2" /></li>
        <li><input type="checkbox" name="likeness_${this.data.value}" value="3" /></li>
        <li><input type="checkbox" name="likeness_${this.data.value}" value="4" /></li>
        <li><input type="checkbox" name="likeness_${this.data.value}" value="5" /></li>
        <li> Mucho interés </li> `
        container.appendChild(title);
        container.appendChild(this.select);
        return container;
    }

    info(){
         this.valor = document.querySelector(`input[name="likeness_${this.data.value}"]:checked`);
        let info = { name: this.data.value, valor : this.valor.value}
        return info;
    }
}