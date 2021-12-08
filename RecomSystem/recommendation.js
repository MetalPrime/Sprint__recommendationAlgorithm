class Recommendation {
  constructor(recommendation) {
    this.recommendation = recommendation;
  }

  render = () => {
    const container = document.createElement("div");
    container.className = "recommendationsContainer";


    container.innerHTML = `
        
           
            <div id= "recomImg" class="recomendation__img" ></div>
            
           
            <div class="infoContainer">
                <h3 class="recommendation__title">${this.recommendation.nombre}</h3>
                <p class="recommendation__date">Fecha: ${this.recommendation.Fecha}</p>
                <p class="recommendation__place">Hora:${this.recommendation.Hora}</p>
                <p class="recommendation__place">Lugar:${this.recommendation.Lugar}</p>
                
            </div>
            

       

    `;

    const img = container.querySelector(".recomendation__img");

    const sample = container.querySelector("#recomImg");
    

    console.log(sample)
 
  
    if (this.recommendation.Tipo.includes("concierto")) {
      //img.setAttribute("src", "./imagen/concierto.png");
      sample.style.backgroundImage = "url('./imagen/concierto.png')";
    }
    if (this.recommendation.Tipo.includes("taller")) {
      // img.setAttribute("src", "./imagen/taller.png");
    }
    if (this.recommendation.Tipo.includes("festival")) {
     
      img.style.backgroundImage="url('./imagen/festival.png')";
    }
    if (this.recommendation.Tipo.includes("concurso")) {
      // img.setAttribute("src", "./imagen/concurso.png");
    }
    if (this.recommendation.Tipo.includes("evento")) {
      // img.setAttribute("src", "./imagen/concierto.png");
    }
    if (this.recommendation.Tipo.includes("foro")) {
      // img.setAttribute("src", "./imagen/taller2.png");
    }
    return container;
  };
}
