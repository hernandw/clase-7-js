$(document).ready(function () {
  let selector = $("ul.my-list > li > a");

  selector
    .css("textDecoration", "none")
    .css("backgroundColor", "blue")
    .css("color", "white");

  let segundohijo = $("ul.my-list li:last-child a");

  segundohijo.css("backgroundColor", "green").css("fontSize", "30px");

  /* let selector2 = $('ul.my-list :last-child ul li:first-child');

    selector2.css("color", "red"); */

  let selector2 = $("#selector2");

  selector2.css("background-color", "red");

  $(".segundo").css("color", "yellow");

  $("#basic").css("color", "brown");

  //Al hacer click sobre el boton cambiar el color del parrafo con id mensaje

  $("#boton").click(function () {
      $("#mensaje").css({ "background-color": "red",  "color": "white"})
  });
});
