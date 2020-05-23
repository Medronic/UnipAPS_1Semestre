function search() {
    var energia = ["Hidrelétrica", "Solar", "Eólica", "Biocombustíveis", "Geotérmica"];
    if(document.getElementById("conteudo").value == energia[0]){
        location.replace("https://xmdnx.github.io/UnipAps/energias/hidreletrica.html");
        window.alert("Você será rerirecionado para o conteúdo " + energia[0]);
    }
    if(document.getElementById("conteudo").value == energia[1]){
        location.replace("https://xmdnx.github.io/UnipAps/energias/solar.html");
        window.alert("Você será rerirecionado para o conteúdo " + energia[1]);
    }
    if(document.getElementById("conteudo").value == energia[2]){
        location.replace("https://xmdnx.github.io/UnipAps/energias/eolica.html");
        window.alert("Você será rerirecionado para o conteúdo " + energia[2]);
    }
    if(document.getElementById("conteudo").value == energia[3]){
        location.replace("https://xmdnx.github.io/UnipAps/energias/hidreletrica11.html");
        window.alert("Você será rerirecionado para o conteúdo " + energia[3]);
    }
    if(document.getElementById("conteudo").value == energia[4]){
        location.replace("https://xmdnx.github.io/UnipAps/energias/hidreletrica11.html");
        window.alert("Você será rerirecionado para o conteúdo " + energia[4]);
    }
    
    /*else{$("#TiposDeEnergiaModal").modal();
    document.getElementById("energia_tags").innerHTML = energia;
    window.alert("Ops, o conteúdo que você está procurando não existe! Mas após clicar em ok, irá ser exibido uma nova janela para lhe orientar."); 
    }*/
    
}

function postagem_data(){
    var data = new Date()
    var dia = data.getDate();
    var mes = "05"
    var ano = data.getFullYear();
    document.getElementById("postagem_data").innerHTML = "Postado: " + dia + "/" + mes + "/" + ano;
}