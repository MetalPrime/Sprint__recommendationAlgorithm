class selectOption {

    constructor(data) {
        this.data = data;
    }

    render() {
        const option = document.createElement("option");
        //option.attr("value",this.data.nombre.value);
        option.setAttribute("value", this.data.nombre);
        option.innerHTML = this.data.nombre;

        return option;
    }

    renderSlider() {
        const slider = document.createElement("div");
        const container = document.createElement("div");
        container.innerHTML = `
        <p>${this.data.nombre}</p>
        
        <input type="range" min="0" max="1" step="1" class="slider" id=${this.data.nombre} value="1">
        `
        slider.appendChild(container);

        return slider;
    }
}