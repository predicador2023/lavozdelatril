
// barra de navegacion
const barraNav = document.querySelector("#barraNav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.querySelector ("#body");

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

    // var imagenes = [ "imagenesSlider/cruzJesus.jpg" , 
    //      "imagenesSlider/mesaBiblia.jpg" , 
    //      "imagenesSlider/niñoBiblia.jpg", 
    //       "imagenesSlider/tresCruz.jpg"];
    //     document.Imagen.src = imagenes[0];

    //     var contador= 0;

    
    //     var sliderDerecha = document.querySelector(".slider-Derecho");
    //     var sliderIzquierda = document.querySelector(".slider-Izquierdo");
    //      function moverDerecha ( ) {
    //         contador ++ ;
    //         if (contador > imagenes.length -1){
    //             contador=0;
    //         }
            
    //         document.Imagen.src = imagenes[contador];

    //      }

    //      function moverIzquierda ( ) {
    //         contador -- ;
    //         if (contador < 0){
    //             contador=imagenes.length -1;
    //         }
    //         document.Imagen.src = imagenes[contador];

    //     }
            
            
            
    //             // para que se actualice cada 2,5 segundos cada imagen
    //             //Al momento de darle click antes de los 2,5 segundos se pueda actualizar 
                
    //             var Intervalo = setInterval( moverDerecha , 2500 );

    //             sliderDerecha.addEventListener( "click" , function () {
    //             clearInterval(Intervalo);
    //             moverDerecha();
    //             Intervalo = setInterval( moverDerecha , 2500 );
    //              } );

    //             sliderIzquierda.addEventListener( "click" , function () {
    //             clearInterval(Intervalo);
    //             moverIzquierda();
    //             Intervalo = setInterval( moverDerecha , 2500 ); 
    //            });


            //código corazón en la sección historias
            // corazón blanco al dar clic se vuelva de color rojo
             // corazón rojo al dar clic se vuelva de color blanco
                function mostrar() {

                    document.getElementById('corazonrojo').style.display = 'block';
                    document.getElementById('corazonblanco').style.display = 'none';
            
                }

                function ocultar() {

                    document.getElementById('corazonblanco').style.display = 'block';
                    document.getElementById('corazonrojo').style.display = 'none';
                
                }
                
                function mostrar1() {

                    document.getElementById('corazonrojo2').style.display = 'block';
                    document.getElementById('corazonblanco2').style.display = 'none';
             
               }

               function ocultar1() {

                document.getElementById('corazonblanco2').style.display = 'block';
                document.getElementById('corazonrojo2').style.display = 'none';
            
            }

               function mostrar2() {

                document.getElementById('corazonrojo3').style.display = 'block';
                document.getElementById('corazonblanco3').style.display = 'none';
         
           }

           function ocultar2() {

            document.getElementById('corazonblanco3').style.display = 'block';
            document.getElementById('corazonrojo3').style.display = 'none';
        
        }

           function mostrar3() {

            document.getElementById('corazonrojo4').style.display = 'block';
            document.getElementById('corazonblanco4').style.display = 'none';
     
       }

       function ocultar3() {

        document.getElementById('corazonblanco4').style.display = 'block';
        document.getElementById('corazonrojo4').style.display = 'none';
    
    }

       function mostrar4() {

        document.getElementById('corazonrojo5').style.display = 'block';
        document.getElementById('corazonblanco5').style.display = 'none';
 
   }

   function ocultar4() {

    document.getElementById('corazonblanco5').style.display = 'block';
    document.getElementById('corazonrojo5').style.display = 'none';

}

   function mostrar5() {

    document.getElementById('corazonrojo6').style.display = 'block';
    document.getElementById('corazonblanco6').style.display = 'none';

}

function ocultar5() {

    document.getElementById('corazonblanco6').style.display = 'block';
    document.getElementById('corazonrojo6').style.display = 'none';

}

function mostrar6() {

    document.getElementById('corazonrojo7').style.display = 'block';
    document.getElementById('corazonblanco7').style.display = 'none';

}

function ocultar6() {

    document.getElementById('corazonblanco7').style.display = 'block';
    document.getElementById('corazonrojo7').style.display = 'none';

}

    //imagen de compartir
    //codigo para compartir desde nuestro celular


    const $compartirBarraNav = document.querySelector('#compartirBarraNav')
    if ('share' in navigator) { 
        $compartirBarraNav.addEventListener('click', share)
        function share () {
                navigator.share ({
                    title: 'Comparte La Voz del Atril' ,
                    text: 'La Voz del Atril - Historias llenas de emoción y sentimiento',
                    url: 'https://lavozdelatril.vercel.app/' ,

                })
                .then(()=>{
                    alert('hemos logrado compartir')
                  })
                  .catch(()=>{
                    alert('no se pudo compartir, prueba usando https en un navegador móvil')
                  })
                }
              } 
              else {
                alert('No está disponible el API de web share')
              }

    const $compartir = document.querySelector('#compartir')
    if ('share' in navigator) { 
        $compartir.addEventListener('click', share)
        function share () {
                navigator.share ({
                    title: 'Comparte La Voz del Atril' ,
                    text: 'La Luna de Paita - La Voz del Atril',
                    url: 'https://lavozdelatril.vercel.app/laLunaDePaita.html' ,

                })
                .then(()=>{
                    alert('hemos logrado compartir')
                  })
                  .catch(()=>{
                    alert('no se pudo compartir, prueba usando https en un navegador móvil')
                  })
                }
              } 
              else {
                alert('No está disponible el API de web share')
              }

             
                    const $compartir2 = document.querySelector('#compartir2')
                    if ('share' in navigator) { 
                        $compartir2.addEventListener('click', share)
                        function share () {
                                navigator.share ({
                                    title: 'Comparte La Voz del Atril' ,
                                    text: 'La Huida a Egipto - La Voz del Atril',
                                    url: 'https://lavozdelatril.vercel.app/LaHuidaEgipto.html' ,
                
                                })
                                .then(()=>{
                                    alert('Hemos logrado compartir')
                                    })
                                    .catch(()=>{
                                    alert('no se pudo compartir, prueba usando https en un navegador móvil')
                                    })
                                }
                                } 
                                else {
                                alert('No está disponible el API de web share')
                                }

                                const $compartir3 = document.querySelector('#compartir3')
                                if ('share' in navigator) { 
                                    $compartir3.addEventListener('click', share)
                                    function share () {
                                            navigator.share ({
                                                title: 'Comparte La Voz del Atril' ,
                                                text: 'La Plaza de los Burros - La Voz del Atril',
                                                url: 'https://lavozdelatril.vercel.app/LaPlazaDeLosBurros.html' ,
                            
                                            })
                                            .then(()=>{
                                                alert('Hemos logrado compartir')
                                              })
                                              .catch(()=>{
                                                alert('no se pudo compartir, prueba usando https en un navegador móvil')
                                              })
                                            }
                                          } 
                                          else {
                                            alert('No está disponible el API de web share')
                                          }
                  
                                          const $compartir4 = document.querySelector('#compartir4')
                                          if ('share' in navigator) { 
                                              $compartir4.addEventListener('click', share)
                                              function share () {
                                                      navigator.share ({
                                                          title: 'Comparte La Voz del Atril' ,
                                                          text: 'Una Lección de Ajedrez - La Voz del Atril',
                                                          url: 'https://lavozdelatril.vercel.app/unaLeccionDeAjedrez.html' ,
                                      
                                                      })
                                                      .then(()=>{
                                                          alert('Hemos logrado compartir')
                                                        })
                                                        .catch(()=>{
                                                          alert('no se pudo compartir, prueba usando https en un navegador móvil')
                                                        })
                                                      }
                                                    } 
                                                    else {
                                                      alert('No está disponible el API de web share')
                                                    }

                                                    const $compartir5 = document.querySelector('#compartir5')
                                                    if ('share' in navigator) { 
                                                        $compartir5.addEventListener('click', share)
                                                        function share () {
                                                                navigator.share ({
                                                                    title: 'Comparte La Voz del Atril' ,
                                                                    text: 'El Caramelo en La Mano - La Voz del Atril',
                                                                    url: 'https://lavozdelatril.vercel.app/elCarameloEnLaMano.html' ,
                                                
                                                                })
                                                                .then(()=>{
                                                                    alert('Hemos logrado compartir')
                                                                  })
                                                                  .catch(()=>{
                                                                    alert('no se pudo compartir, prueba usando https en un navegador móvil')
                                                                  })
                                                                }
                                                              } 
                                                              else {
                                                                alert('No está disponible el API de web share')
                                                              }

                                                              const $compartir6 = document.querySelector('#compartir6')
                                                              if ('share' in navigator) { 
                                                                  $compartir6.addEventListener('click', share)
                                                                  function share () {
                                                                          navigator.share ({
                                                                              title: 'Comparte La Voz del Atril' ,
                                                                              text: 'La Hormiga en La Oreja - La Voz del Atril',
                                                                              url: 'https://lavozdelatril.vercel.app/laHormigaEnLaOreja.html' ,
                                                          
                                                                          })
                                                                          .then(()=>{
                                                                              alert('Hemos logrado compartir')
                                                                            })
                                                                            .catch(()=>{
                                                                              alert('no se pudo compartir, prueba usando https en un navegador móvil')
                                                                            })
                                                                          }
                                                                        } 
                                                                        else {
                                                                          alert('No está disponible el API de web share')
                                                                        }
                                                
                                      
                                                                        const $compartir7 = document.querySelector('#compartir7')
                                                              if ('share' in navigator) { 
                                                                  $compartir7.addEventListener('click', share)
                                                                  function share () {
                                                                          navigator.share ({
                                                                              title: 'Comparte La Voz del Atril' ,
                                                                              text: 'La Alfombra Roja  - La Voz del Atril',
                                                                              url: 'https://lavozdelatril.vercel.app/laHormigaEnLaOreja.html' ,
                                                          
                                                                          })
                                                                          .then(()=>{
                                                                              alert('Hemos logrado compartir')
                                                                            })
                                                                            .catch(()=>{
                                                                              alert('no se pudo compartir, prueba usando https en un navegador móvil')
                                                                            })
                                                                          }
                                                                        } 
                                                                        else {
                                                                          alert('No está disponible el API de web share')
                                                                        }
                                                
                                      
                            

   
            
               