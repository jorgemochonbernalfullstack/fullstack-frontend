$(function () {
  function validarCampo(value, label) {
    if (value === "") {
      label.css("color", "red");
      return false;
    } else {
      label.css("color", "black");
      return true;
    }
  }

  function obtenerDatos(e) {
    const esNombreValido = validarCampo(
      $("#cliente_nombre").val(),
      $('label[for="cliente_nombre"]')
    );
    const esApellidoValido = validarCampo(
      $("#cliente_apellido").val(),
      $('label[for="cliente_apellido"]')
    );

    if (!esNombreValido || !esApellidoValido) {
      e.preventDefault();
    } else {
      alert("Preparando envío...");
    }
  }

  function mostrarDisponibilidadSize(e) {
    let sizeSelected = $(e.target).val();
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:5000/checksize",
      data: {
        size: sizeSelected
      },
      success: (result) => {
        if (typeof result === 'string') {
          $('#is_disponible').text(result);
        } else {
          console.error("El resultado no es una cadena", result);
        }
        return;
      },
      error: (error) => {
        console.error("Error en la llamada Ajax", error);
      }
    });
  }

  function eventos() {
    $("#formulario").on('submit', (e) => {
      obtenerDatos(e);
    });
    $('#size').on('change', (e) => {
      mostrarDisponibilidadSize(e)
    });
  }
  eventos();
});
