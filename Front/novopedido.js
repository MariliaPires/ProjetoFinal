function carregaSoftwares(){
    // preciso ver se o usuario ta logado
    var user = localStorage.getItem("user");
    if (!user){
        window.location="index.html";
    }
    else{
        fetch('http://localhost:8080/softwares/disponiveis')
           .then(res=>res.json())
           .then(res=>popula(res));
    }
    // 
}

function popula(lista){
    var strSoftware = "";
    for (i=0; i<lista.length; i++){
        strSoftware += "<input type='checkbox' id="+i+" name='itens' value='"+lista[i].id+"'>"+lista[i].descricao +"<br>";
    }
    document.getElementById("listasw").innerHTML = strSoftware;
}

function confirmar(){
    var listaItens = document.getElementsByTagName("input");
    for (i=0; i<listaItens.length;i++){
        var x = document.getElementById(i).checked;
       if(x){
        console.log(listaItens[i].value);
       }
    }
}