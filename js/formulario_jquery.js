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
    const clienteNombreInput = $("#cliente_nombre");
    const clienteNombreLabel = $('label[for="cliente_nombre"]');
    const esNombreValido = validarCampo(
      clienteNombreInput.val(),
      clienteNombreLabel
    );

    const clienteApellidoInput = $("#cliente_apellido");
    const clienteApellidoLabel = $('label[for="cliente_apellido"]');
    const esApellidoValido = validarCampo(
      clienteApellidoInput.val(),
      clienteApellidoLabel
    );

    if (!esNombreValido || !esApellidoValido) {
      e.preventDefault();
    } else {
      alert("Preparando envío...");
    }
  }

  function eventos() {
    const formulario = $("#formulario");
    formulario.submit(function (e) {
      obtenerDatos(e);
    });
  }

  eventos();
});
