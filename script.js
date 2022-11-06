function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll= function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills>=300){
      document.getElementById("html").classList.add("barra-progreso1")
      document.getElementById("java").classList.add("barra-progreso2")
      document.getElementById("spring").classList.add("barra-progreso3")
      document.getElementById("ps").classList.add("barra-progreso4")
    }
      

}