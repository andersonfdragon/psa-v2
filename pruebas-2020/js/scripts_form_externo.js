$(document).ready(function(){
    $("#btn_paso_01").click(function(){
      $("#contactForm").submit();
    });
});

$(document).ready(function(){
    $("#aceptar_terminos_popUp").click(function(){
      $('.bs-example-modal').modal('hide');
      $("input[type='checkbox']").attr('checked',':checked');
    });
});

//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO CONTACTO PC
$("#contactForm").validator().on("submit", function (event) {
    var valido_form_01 = 0;
    var valido_select_01 = 0;
    var valido_select_02 = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        submitMSG(true, "");
        valido_form_01 = 1;
    }

    //Opcion de proceso_seleccion
    if (!$('#proceso_seleccion').val() ){
        submitMSG_proceso_seleccion(false, "Seleccione una opción.");
        //console.log(valido_select_01);
    }
    else {
        event.preventDefault();
        submitMSG_proceso_seleccion(true, "");
        valido_select_01 = 1;
        //console.log(valido_select_01);
    }

    //Opcion de colaboradores
    if (!$('#numero_colaboradores').val() ){
        submitMSG_colaboradores(false, "Seleccione una opción.");
    }
    else {
        event.preventDefault();
        submitMSG_colaboradores(true, "");
        valido_select_02 = 1;
    }

    if ((valido_form_01)&&(valido_select_01)&&(valido_select_02) === 1) {
        event.preventDefault();
        submitMSG(true, "");
        $("#btn_paso_01").attr('data-target','#slider-formulario-registro');
    }
    else {
        submitMSG(false, "Complete los campos que faltan");
    }
});



function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_proceso_seleccion(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_proceso_seleccion").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_colaboradores(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_colaboradores").removeClass().addClass(msgClasses).text(msg);
}





//PASO 02
$("#contactForm_02").validator().on("submit", function (event) {
    var valido_form_02 = 0;
    var valido_select_03 = 0;
    var valido_check = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_paso_02(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form_02 = 1;
    }

    //Opcion de funciones
    if (!$('#funciones').val() ){
        submitMSG_funciones(false, "Seleccione una opción.");
    }
    else {
        event.preventDefault();
        submitMSG_funciones(true, "");
        valido_select_03 = 1;
    }

    //Checkbox
    if ($("#checkbox").is(':checked') === false){
        submitMSG_condiciones(false, "Aún no acepta terminos y condiciones.");
    }else {
        event.preventDefault();
        submitMSG_condiciones(true, "");
        valido_check = 1;
    }

    if ((valido_form_02)&&(valido_select_03)&&(valido_check) === 1) {
        event.preventDefault();
        submitMSG_paso_02(true, "Estamos procesando sus datos...");
        //$("#form-submit").prop("disabled", true);
        $("#form-submit").css("display", "none");
        submitForm();
    }

    else {
        submitMSG_paso_02(false, "Complete los campos que faltan");
    }
});

function submitMSG_paso_02(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_paso_02").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_funciones(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_funciones").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning tx_form_error";
    } else {
        var msgClasses = "h4 text-center text-danger tx_form_error";
    }
    $("#msgSubmit_condiciones").removeClass().addClass(msgClasses).text(msg);
}

function formSuccess(){
    $("#contactForm_02")[0].reset();
    submitMSG_paso_02(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitForm(){
    // Initiate Variables With Form Content
    var empresa = $("#empresa").val();
    var nit = $("#nit").val();
    var proceso_seleccion = $('select[id=proceso_seleccion]').val();
    var numero_colaboradores = ($('select[id=numero_colaboradores]').val());

    var first_name = $("#first_name").val();
    var funciones = $('select[id=funciones]').val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();

    $.ajax({
        type: "POST",
        url:  "pruebas-2020/php/process_formulario_externo.php",
        data: "empresa=" + empresa +
              "&nit=" + nit +
              "&proceso_seleccion=" + proceso_seleccion +
              "&numero_colaboradores=" + numero_colaboradores +
              "&first_name=" + first_name +
              "&funciones=" + funciones +
              "&telephone=" + telephone +
              "&email=" + email,

        success: function(text){
            if (text == "success"){
                formSuccess();
                window.location.href = "mensaje_enviado_formulario_externo.html";
            } else {
                submitMSG_paso_02(false,text);
            }
        }
    });
}
