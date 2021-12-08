class Recommendation {
  constructor(recommendation) {
    this.recommendation = recommendation;
  }

  render = () => {
    const container = document.createElement("div");
    container.className = "recommendationsContainer";


    container.innerHTML = `
        
   
    
   
    <div id="recomImg" class="infoContainer">
        <div class="infoContainer__div" ></div>
        <div class="infoContainer__info">
        <h3 class="recommendation__title">${this.recommendation.nombre}</h3>
        <p class="recommendation__date">Fecha: ${this.recommendation.Fecha}</p>
        <p class="recommendation__place">Hora:${this.recommendation.Hora}</p>
        <p class="recommendation__place">Lugar:${this.recommendation.Lugar}</p>
        </div>
    </div>
                
                
           
            

       

    `;

    // const img = container.querySelector(".recomendation__img");

    const sample = container.querySelector("#recomImg");
    const div = container.querySelector(".infoContainer__info");





    if (this.recommendation.Tipo.includes("concierto")) {
      sample.style.backgroundImage = "url('./imagen/concierto.png')";
    }

    if (this.recommendation.Tipo.includes("taller")) {
      sample.style.backgroundImage = "url('./imagen/taller.png')";
    }

    if (this.recommendation.Tipo.includes("festival")) {
      sample.style.backgroundImage = "url('./imagen/festival.png')";
    }

    if (this.recommendation.Tipo.includes("concurso")) {
      sample.style.backgroundImage = "url('./imagen/concurso.png')";
    }

    if (this.recommendation.Tipo.includes("evento")) {
      sample.style.backgroundImage = "url('./imagen/evento.png')";

    }
    if (this.recommendation.Tipo.includes("foro")) {
      sample.style.backgroundImage = "url('./imagen/foro.png')";
    }

    return container;
  };
}
