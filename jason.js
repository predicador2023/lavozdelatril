
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


// const btnCom = document.querySelector('#botonComp');

//          if ('share' in navigator) { 
//              btnCom.addEventListener('click', share)
//               function share () {
//                     navigator.share ({
//                        title: 'Comparte La Voz del Atril' ,
//                        text: 'La Luna de Paita - La Voz del Atril',
//                        url: 'https://lavozdelatril.vercel.app/laLunaDePaita.html' ,
          
//                           })
//                           .then(()=>{
//                               alert('Hemos logrado compartir')
//                             })
//                             .catch(()=>{
//                               alert('no se pudo compartir, prueba usando https en un navegador móvil')
//                             })
//                           }
//                         } 
//             else {
//                    alert('No está disponible el API de web share')
//                         }

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
//    const historias = [
//   { id: 'compartir', text: 'La Luna de Paita', url: 'https://lavozdelatril.vercel.app/laLunaDePaita.html' },
//   { id: 'compartir2', text: 'La Huida a Egipto', url: 'https://lavozdelatril.vercel.app/LaHuidaEgipto.html' },
//   { id: 'compartir3', text: 'La Plaza de los Burros', url: 'https://lavozdelatril.vercel.app/LaPlazaDeLosBurros.html' },
//   { id: 'compartir4', text: 'Una Lección de Ajedrez', url: 'https://lavozdelatril.vercel.app/unaLeccionDeAjedrez.html' },
//   { id: 'compartir5', text: 'El Caramelo en La Mano', url: 'https://lavozdelatril.vercel.app/elCarameloEnLaMano.html' },
//   { id: 'compartir6', text: 'La Hormiga en La Oreja', url: 'https://lavozdelatril.vercel.app/laHormigaEnLaOreja.html' },
//   { id: 'compartir7', text: 'La Alfombra Roja', url: 'https://lavozdelatril.vercel.app/LaAlfombraRojaDeLaComparacion.html' }
// ];

//  historias.forEach(historia => {
//   const boton = document.getElementById(historia.id);
//   if (!boton) return;

//   boton.addEventListener('click', () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Comparte La Voz del Atril',
//         text: `${historia.text} - Una parábola urbana para reflexionar.`,
//         url: historia.url
//       })
//       .then(() => alert(`📢 "${historia.text}" fue compartida con éxito`))
//       .catch(() => alert('⚠️ No se pudo compartir. Probá en un navegador móvil con HTTPS.'));
//     } else {
//       alert('🛑 Tu navegador no admite compartir directamente.');
//     }
//   });
// });
// 
// function compartirHistoria(elemento) {
//   // Busca el contenedor de la historia
//   const contenedor = elemento.closest(".contenedorNuevo");

//   // Obtiene el título del h3 dentro del contenedor
//   const titulo = contenedor.querySelector("h3")?.textContent || "Historia de La Voz del Atril";

//   // Busca el enlace al relato (.html), si existe
//   const enlace = contenedor.querySelector("a[href$='.html']");
//   const url = enlace ? enlace.href : window.location.href;

//   // Mensaje narrativo opcional
//   const mensajePoetico = "📤 Esta historia se fue a tocar corazones.";

//   // Usa la API de compartir si está disponible
//   if (navigator.share) {
//     navigator.share({
//       title: `La Voz del Atril - ${titulo}`,
//       text: `${titulo} – Una parábola urbana para compartir.`,
//       url: url
//     })
//     .then(() => {
//       console.log("Compartido con éxito");
//       mostrarMensajeTemporal(mensajePoetico, elemento);
//     })
//     .catch((error) => console.error("Error al compartir:", error));
//   } else {
//     alert("🛑 Tu navegador no permite compartir directamente.");
//   }
// }

// // Muestra un mensaje debajo del ícono por unos segundos
// function mostrarMensajeTemporal(mensaje, elemento) {
//   const mensajeDiv = document.createElement("div");
//   mensajeDiv.textContent = mensaje;
//   mensajeDiv.style.fontSize = "0.9em";
//   mensajeDiv.style.color = "#444";
//   mensajeDiv.style.marginTop = "5px";
//   mensajeDiv.style.transition = "opacity 0.5s ease";
//   elemento.appendChild(mensajeDiv);

//   setTimeout(() => {
//     mensajeDiv.style.opacity = "0";
//     setTimeout(() => {
//       mensajeDiv.remove();
//     }, 500);
//   }, 2500); // El mensaje dura 2.5 segundos
// }


function compartirHistoriaAdaptativa() {
  const enlace = "https://lavozdelatril.vercel.app/LaHuidaEgipto.html"; // actualizá con tu link real
  const titulo = "La Huida a Egipto";
  const texto = `📖 ${titulo}\nLeé la historia acá: ${enlace}`;

  const esMovil = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

  if (esMovil) {
    // Usar WhatsApp en móvil
    const mensaje = encodeURIComponent(texto);
    const urlWhatsApp = `https://wa.me/?text=${mensaje}`;
    window.open(urlWhatsApp, "_blank");
  } else if (navigator.share) {
    // Usar la API Share en dispositivos compatibles
    navigator.share({
      title: titulo,
      text: texto,
      url: enlace
    })
    .then(() => console.log("Compartido con navigator.share"))
    .catch((error) => console.log("Error al compartir:", error));
  } else {
    // Plan C: copiar al portapapeles
    const textarea = document.createElement("textarea");
    textarea.value = enlace;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("📋 Enlace copiado al portapapeles.");
  }
}


