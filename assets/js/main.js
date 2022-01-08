function buscarCep(){
    let cep = document.getElementById("cep").value;
    let url = `http://viacep.com.br/ws/${cep}/json/`;
  
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $("#cidade").html(response.localidade);
        }
    })
}