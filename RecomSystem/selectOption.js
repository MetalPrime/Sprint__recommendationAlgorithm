class selectOption {

    constructor(data,index) {
        this.data = data;
        this.index = index;
    }

    render() {
        const option = document.createElement("option");
        //option.attr("value",this.data.nombre.value);
        option.setAttribute("value", this.data.nombre);
        option.innerHTML = this.data.nombre;

        return option;
    }

    renderCheckbox() {
        const checkboxOptions = document.createElement("div");
        checkboxOptions.className ="checkboxOptions";
        checkboxOptions.innerHTML = `
        <input type="checkbox" id={${this.index} value="${this.data.nombre}" name="optionsCheck"}
        <p class="label"> ${this.data.nombre}</p>
        `
        return checkboxOptions;
    }

    renderSlider() {
        const slider = document.createElement("div");
        const container = document.createElement("div");
        container.className = "selectorsDiv"
        container.innerHTML = `
        <div>
        <div class="selectorsDiv">
            <div class="range-slider">
            <span id="${this.data.nombre}rs-bullet" class="rs-label">1</span>
            <input id=${this.data.nombre} id="rs-range-line" min="1" max="10" step="1" class="rs-range" type="range"  value="1">
 
            <p class="label">${this.data.nombre}</p>
        </div>
        </div>
        `
        slider.appendChild(container);
        setTimeout(() => {
            const rangeSlider = document.getElementById(`${this.data.nombre}`);
            const rangeBullet = document.getElementById(`${this.data.nombre}rs-bullet`);
            rangeSlider.addEventListener("input", () => {
                rangeBullet.innerHTML = rangeSlider.value;
                const bulletPosition = (rangeSlider.value / rangeSlider.max);
                rangeBullet.style.left = (bulletPosition * 578) + "px";
            }
            );
        }, 500);
        return slider;
    }
}

//            <input type="range" min="1" max="10" step="1" class="slider" id=${this.data.nombre} value="1">
