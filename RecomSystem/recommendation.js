class Recommendation {
  constructor(recommendation) {
    this.recommendation = recommendation;
  }

  render = () => {
    const container = document.createElement("div");
    container.className = "recommendationsContainer";

    container.innerHTML = `
        
           
            <img class="recomendation__img" src="" >
        
            <div class="recommendation__div">  </div>
            <div class="infoContainer">
                <h3 class="recommendation__title">${this.recommendation.nombre}</h3>
                <p class="recommendation__date">Fecha: ${this.recommendation.Fecha}</p>
                <p class="recommendation__place">Hora:${this.recommendation.Hora}</p>
                <p class="recommendation__place">Lugar:${this.recommendation.Lugar}</p>
            </div>
            

       

    `;

    const img = container.querySelector(".recomendation__img");

    const sample = document.getElementById("recomImg");

    if (this.recommendation.nombre.includes("concierto")) {
      img.setAttribute("src", "./imagen/concierto.png");
    }
    return container;
  };
}
