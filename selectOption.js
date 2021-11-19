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
        <datalist id="tickmarks">
        
        <option value="1" label="1">
        <option value="2">
        <option value="3">
        <option value="4">
        <option value="5" label="5">
        <option value="6">
        <option value="7">
        <option value="8">
        <option value="9">
        <option value="10" label="10">
            </datalist>
        <input type="range"  class="slider" id=${this.data.nombre} list={tickmarks} value="1">
        `
        slider.appendChild(container)

        return slider;
    }
}