class Likert {
    constructor(data){
        this.data = data;
    }

    render(){
        const container = document.createElement('div');
        const title = document.createElement('p');
        title.innerHTML = `${this.data.value}`;
        
        const select = document.createElement("ul");
        select.className = "likert";
        select.innerHTML = `
        <li> Poco interés </li>
        <li><input type="radio" name="likeness" value="1" /></li>
        <li><input type="radio" name="likeness" value="2" /></li>
        <li><input type="radio" name="likeness" value="3" /></li>
        <li><input type="radio" name="likeness" value="4" /></li>
        <li><input type="radio" name="likeness" value="5" /></li>
        <li> Mucho interés </li> `
        container.appendChild(title);
        container.appendChild(select);
        return container;
    }

    info(){
        info = { name: this.data.value, valor : select.value}
        return info;
    }
}