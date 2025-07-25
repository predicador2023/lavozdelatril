
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

// Intersection Observer
const Mivideo = document.querySelector("#video")
const options = {
 // root,
  rootMargin:"0px 0px 0px 0px" ,
  threshold: 0.3 ,
}
function callback(entries, observer) {
 console.log("Se llamó a mi callback")
 if(entries[0].isIntersecting) {
 Mivideo.play() }
 else {
 Mivideo.pause() }
}
const observer = new IntersectionObserver (callback, options) 
  observer.observe(Mivideo)
  
// ---------------------------------------------------------
// boton modo dark
  const swith = document.querySelector(".switch");

  // swith.addEventListener("click", e => {
  //   swith.classList.toggle("active");
  //   document.body.classList.toggle("active");
   
  // })

// ---------------------------------------------------------

  document.addEventListener("DOMContentLoaded", e => {
    cargarDarkModeDesdeLocalStorage()
    swith.addEventListener("click", toggleDarkMode)
  })

  function toggleDarkMode () {
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
    guardarDarkModeEnLocalStorage(swith.classList.contains("active")) 
    }

  function  guardarDarkModeEnLocalStorage(estado) {
    localStorage.setItem("darkMode", estado)
  }

  function cargarDarkModeDesdeLocalStorage () {
    const DarkModeGuardado = localStorage.getItem("darkMode") === "true" ;  
   if (DarkModeGuardado) {
    swith.classList.add("active");
    document.body.classList.add("active");
   }  
  }
   
// boton compartir relato del index
function compartirRelato() {
  if (navigator.share) {
    navigator.share({
      title: 'La Voz del Atril',
      text: 'Mirá este relato urbano con una chispa espiritual.',
      url: window.location.href
    })
    .then(() => console.log('Compartido con éxito'))
    .catch((error) => console.log('Error al compartir:', error));
  } else {
    alert('Tu navegador no permite compartir directamente. Copiá el enlace manualmente.');
  }
}
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


            
// -------------------------------------------------------------------
 // Boton compartir relatos


const btnCom = document.querySelector('#botonComp');

         if ('share' in navigator) { 
             btnCom.addEventListener('click', share)
              function share () {
                    navigator.share ({
                       title: 'Comparte La Voz del Atril' ,
                       text: 'La Luna de Paita - La Voz del Atril',
                       url: 'https://lavozdelatril.vercel.app/laLunaDePaita.html' ,
          
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

 //  const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
//  btnComp.addEventListener("click", async () => {
//    try {
//      await navigator.share(shareData);
//     console.log("La Luna de Paita se compartió satisfactoriamente");
//    } catch (err) {

//      console.log(`Error: ${err}`);
//   }
//  });


 //código corazón en la sección historias
            // corazón blanco al dar clic se vuelva de color rojo
             // corazón rojo al dar clic se vuelva de color blanco
           
      //  function mostrar() {

      //     document.getElementById('corazonrojo').style.display = 'block';
      //    document.getElementById('corazonblanco').style.display = 'none';
            
      //           }

      //  function ocultar() {

      //     document.getElementById('corazonblanco').style.display = 'block';
      //     document.getElementById('corazonrojo').style.display = 'none';
                
      //           }
                
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

// codigo para corazon contador historias 
// Seleccionamos el corazón y el contador
const heart = document.getElementById('heart');
const countDisplay = document.getElementById('count');

// Obtenemos el valor guardado en el localStorage
let count = localStorage.getItem('heartCount') ? parseInt(localStorage.getItem('heartCount')) : 0;
let clicked = localStorage.getItem('heartClicked') === 'true';

// Inicializamos la vista con los valores guardados
countDisplay.textContent = count;
if (clicked) {
    heart.classList.add('clicked');
}

// Manejamos el evento de click en el corazón
heart.addEventListener('click', () => {
    clicked = !clicked; // Alterna entre click/no-click
    
    if (clicked) {
        heart.classList.add('clicked');
        count++;
    } else {
        heart.classList.remove('clicked');
        count--;
    }
    
    // Actualizamos el contador y el localStorage
    countDisplay.textContent = count;
    localStorage.setItem('heartCount', count);
    localStorage.setItem('heartClicked', clicked);
});



    //imagen de compartir
    //codigo para compartir desde nuestro celular
   const historias = [
  { id: 'compartir', text: 'La Luna de Paita', url: 'https://lavozdelatril.vercel.app/laLunaDePaita.html' },
  { id: 'compartir2', text: 'La Huida a Egipto', url: 'https://lavozdelatril.vercel.app/LaHuidaEgipto.html' },
  { id: 'compartir3', text: 'La Plaza de los Burros', url: 'https://lavozdelatril.vercel.app/LaPlazaDeLosBurros.html' },
  { id: 'compartir4', text: 'Una Lección de Ajedrez', url: 'https://lavozdelatril.vercel.app/unaLeccionDeAjedrez.html' },
  { id: 'compartir5', text: 'El Caramelo en La Mano', url: 'https://lavozdelatril.vercel.app/elCarameloEnLaMano.html' },
  { id: 'compartir6', text: 'La Hormiga en La Oreja', url: 'https://lavozdelatril.vercel.app/laHormigaEnLaOreja.html' },
  { id: 'compartir7', text: 'La Alfombra Roja', url: 'https://lavozdelatril.vercel.app/LaAlfombraRojaDeLaComparacion.html' }
];

historias.forEach(historia => {
  const boton = document.getElementById(historia.id);

  if (boton) {
    boton.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: 'Comparte La Voz del Atril',
          text: `${historia.text} - La Voz del Atril`,
          url: historia.url
        })
        .then(() => alert(`📢 ¡"${historia.text}" fue compartido con éxito!`))
        .catch(() => alert('⚠️ No se pudo compartir. Probá usar HTTPS y un navegador móvil.'));
      } else {
        alert('🛑 Tu navegador no admite compartir directamente.');
      }
    });
  }
});
