function buscarCep(){
    $(".carregar").show();

    let cep = document.getElementById("cep").value;
    let url = `http://viacep.com.br/ws/${cep}/json/`;
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $(".titulo_cep").html(`CEP: ${response.cep}`);
            $("#cidade").html(response.localidade);
            $("#estado").html(response.uf);
            $("#bairro").html(response.bairro);
            $("#endereco").html(response.logradouro);
            $(".cep_ocultar").show();
            $(".carregar").hide();
        }
    })
};

$(function(){
    $(".cep_ocultar").hide();
    $(".carregar").hide();
})