class Recommendation {


    constructor(recommendation) {

        this.recommendation = recommendation;
    }


    render = () => {

        const container = document.createElement("div");
        container.className = "recommendation"

        container.innerHTML = `
        
        
        
            <img class="recomendation__img" src="" >

            <div class="infoContainer">
                <p class="recommendation__title">${this.recommendation.title}</p>
            <p class="recommendation__date">hoy ${this.recommendation.date}</p>
            <p class="recommendation__place">${this.recommendation.place}</p>

            </div>
            

       

    `

    console.log(this.recommendation.title)
        const img = container.querySelector(".recomendation__img");
        console.log(img)

        if(this.recommendation.title.includes("concierto")){

            img.setAttribute("src","./imagen/concierto.png")
        };
        return container;
    }
}