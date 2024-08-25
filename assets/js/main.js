//AddEventListener de inicialización del DOM usando jquery:

$(function () {
  //inicializacion de tooltip bs en jquery:
  $('[data-bs-toggle="tooltip"]').tooltip();

  //Implementación alert de boton para enviar correo:
  $("#enviarCorreo").on("click", function () {
    alert("El correo fue enviado correctamente");
  });

  //Implementación carousel:

  //Array imágenes:
  var imagenes = [
    "assets/img/slider-1.png",
    "assets/img/slider-2.png",
    "assets/img/slider-3.png",
    "assets/img/slider-4.png",
    "assets/img/slider-5.png",
    "assets/img/slider-6.png",
    "assets/img/slider-7.png",
    "assets/img/slider-8.png",
  ];

  //Variable cuyo valor será el html a interpolar en el código.
  let slideHtml = "";
  //Variable que contiene la cantidad de items a mostrar en cada vuelta del carousel;
  let itemsPorSlide = 4;

  //loop for que recorre el array de imágenes;
  for (let i = 0; i < imagenes.length; i += itemsPorSlide) {
    //ternaria que verifica el index de los elementos del array para poder agregarle la class de bootstrap "carousel-item active" y que los elementos sean visibles dentro del carousel:
    var itemClass = i === 0 ? "carousel-item active" : "carousel-item";

    //se agrega la class establecida en la variable itemClass dentro del html a interpolar:
    slideHtml += `<div class = "${itemClass}"><div class ="row">`;

    //Se recorre el array nuevamente de forma de poder actualizar el src de la imagen con los valores que se encuentran dentro del array imágenes:
    for (let j = i; j < i + itemsPorSlide && j < imagenes.length; j++) {
      //Se determina cual elemento del array es actualizando el valor del index con el valor que indica la variable j, a su vez se estructura el html que se agregará al ya inicializado en la variable slideHtml:
      slideHtml += `<div class="col-3"><img src ="${
        imagenes[j]
      }" class ="d-block w-100" alt="Slide ${j + 1}"></div>`;
    }

    //Por ultimo se actualiza el valor de slideHtml con el las etiquetas de cierre a interpolar dentro de la estructura:
    slideHtml += "</div></div>";
  }

  //Se captura el div con class "carousel-inner" que ya está escrito en el index.html y se le agrega el contenido de la variable slideHtml a traves del método html():
  $(".carousel-inner").html(slideHtml);

  //Se inicializa la función del carrusel de bootstrap;
  $("#carouselIngredientes").carousel({
    interval: 3000,
  });

  //Implementación función de visibilidad de carrusel bs:

  function chequearScreenSize() {
    //Se determina el ancho de la ventana del navegador accediendo al dato numérico de pixeles con el método width() y se compara con la cifra de pixeles minima:
    if ($(window).width() < 992) {
      //si condición es true se utiliza el método hide() que en rigor funciona como un display: none sobre el div#carouselMain:
      $("#carouselMain").hide();
    } else {
      //O en su defecto usa show():
      $("#carouselMain").show();
    }
  }

  //Se llama a la función:
  chequearScreenSize();

  //Se actualizan los valores de la función chequearScreenSize desde el evento resize que mide el tamaño de la pantalla:
  $(window).on("resize", function () {
    chequearScreenSize();
  });

  //Funcion para cambiar color del texto, pasandole como argumento el id del elemento:

  function cambiarColor(elmId) {
    //Se establece el evento del doble click:
    $(elmId).on("dblclick", function () {
      //Se inicializa la variable colorActual que obtendrá el valor del color del elemento desde css;
      let colorActual = $(elmId).css("color");

      //Se establece el método de cambio, el cual manipula la propiedad color desde el css y le asigna el valor de acuerdo al valor en el que esté actualizado color actual:

      $(elmId).css("color", colorActual === "rgb(255, 0, 0)" ? "black" : "red");
    });
  }

  //Se llama a la función
  cambiarColor("#ingredientesTitle");
  cambiarColor("#preparacionTitle");

  //Función que esconde texto en la card si se hace click en el título:
  function desaparecerTexto(idTitulo, idParrafo) {
    $(idTitulo).on("dblclick", function () {
      $(idParrafo).toggle();
    });
  }

  desaparecerTexto("#titulo1", "#texto1");
  desaparecerTexto("#titulo2", "#texto2");
  desaparecerTexto("#titulo3", "#texto3");
});
