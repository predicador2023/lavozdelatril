
// barra de navegacion
const barraNav = document.querySelector("#barraNav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.querySelector("#body");

abrir.addEventListener("click", () => {
    barraNav.classList.add("visible");
    body.classList.add("no-scroll");
})

cerrar.addEventListener("click", () =>  {
    barraNav.classList.remove("visible");
    body.classList.remove("no-scroll");
})

// -----------------------------------------------------------
// silder de imagenes en seccion acerca de

    var imagenes = [ "imagenesSlider/cruzJesus.jpg" , 
         "imagenesSlider/mesaBiblia.jpg" , 
         "imagenesSlider/niñoBiblia.jpg", 
          "imagenesSlider/tresCruz.jpg"];
        document.Imagen.src = imagenes[0];

        var contador= 0;

    
        var sliderDerecha = document.querySelector(".slider-Derecho");
        var sliderIzquierda = document.querySelector(".slider-Izquierdo");
         function moverDerecha ( ) {
            contador ++ ;
            if (contador > imagenes.length -1){
                contador=0;
            }
            
            document.Imagen.src = imagenes[contador];

         }

         function moverIzquierda ( ) {
            contador -- ;
            if (contador < 0){
                contador=imagenes.length -1;
            }
            document.Imagen.src = imagenes[contador];

        }
            
            
            
                // para que se actualice cada 2,5 segundos cada imagen
                //Al momento de darle click antes de los 2,5 segundos se pueda actualizar 
                
                var Intervalo = setInterval( moverDerecha , 2500 );

                sliderDerecha.addEventListener( "click" , function () {
                clearInterval(Intervalo);
                moverDerecha();
                Intervalo = setInterval( moverDerecha , 2500 );
                 } );

                sliderIzquierda.addEventListener( "click" , function () {
                clearInterval(Intervalo);
                moverIzquierda();
                Intervalo = setInterval( moverDerecha , 2500 ); 
               });
          