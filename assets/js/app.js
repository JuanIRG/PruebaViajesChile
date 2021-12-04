$(document).ready(function () {
    $("#btnFormulario").click(function () {
        $("#formulario").toggle("slow");
    });
});

$(document).ready(function () {

    $("a").click(function () {
        var gato = this.hash

        $("html,body").animate({
                scrollTop: $(gato).offset().top - 70
            }, 800

        )

    });
});