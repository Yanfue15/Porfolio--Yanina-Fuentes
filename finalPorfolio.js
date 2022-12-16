let menuVisible = false;
/*Funcion que oculta o muestra el menu*/
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true
    }
}


/*Ocultar el menu una vez que selecciono una opcion*/
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible= false;
}

