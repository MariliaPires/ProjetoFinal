
function LoadPage(){
    carregaMaquinas();
    carregaSoftwares();
}

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
}


function carregaMaquinas(){
    // preciso ver se o usuario ta logado
    var user = localStorage.getItem("user");
    if (!user){
        window.location="index.html";
    }
    else{
        fetch('http://localhost:8080/maquinas')
           .then(res=>res.json())
           .then(res=>populaM(res));
    } 
}


function popula(lista){
    var strSoftware = "";
    for (i=0; i<lista.length; i++){
        strSoftware += "<input type='checkbox' id="+i+" name='itens' value='"+lista[i].id+"'>"+lista[i].descricao +"<br>";
    }
    document.getElementById("listasw").innerHTML = strSoftware;
}

function populaM(lista){
    var strMaquina = "<select>";
    for (i=0; i<lista.length; i++){
        strMaquina += "<option value='"+lista[i].id+"'>"+lista[i].descricao +"</option>";
    }
    strMaquina += "</select>"
    document.getElementById("listasM").innerHTML = strMaquina;
}

function confirmar(){
    var listaItens = document.getElementsByTagName("input");
    var strBody = {  "status":"N",
    "observacoes":"Primeiro pedido efetuado colab Jose",} 
    var d = new Date();
    console.log(d.getDate());
    console.log(parseInt(d.getMonth())+1);
    console.log(d.getFullYear());
    var strdate = d.getDate()+"/"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear();

    console.log(strdate);
    for (i=0; i<listaItens.length;i++){
 
        var x = document.getElementById(i).checked;
       if(x){
        console.log(parseInt(listaItens[i].id)+1);
       }
    }
    /*{
        "status":"N",
        "observacoes":"Primeiro pedido efetuado colab Jose",
        "dataPedido":"27/04/2020",
        "solicitante":{
            "id":2
        },
        "itens":[
            { "itemSoftware": {"id": 1 } },
            { "itemSoftware": {"id": 2 } },
            { "itemSoftware": {"id": 5 } }
        ]
    }*/
}