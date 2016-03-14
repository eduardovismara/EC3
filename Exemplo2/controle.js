function iniciar(){
	var index = -1; 
	var produtos=[
		{"id":1,"nome":"Alexandre Gama","endereco":"R.Qualquer"},
		{"id":2,"nome":"Angelo","endereco":"teste"}
	];
	localStorage.setItem('produtos', JSON.stringify(produtos));
	localStorage.setItem('index', index);
}

function teste_storage(nome){
	var produtos_volta = localStorage.getItem('produtos');
	teste = JSON.parse(produtos_volta);
	console.log(nome,":", teste[1].nome);
	console.log("index: ", localStorage.index);
}

function incrementar(){
	localStorage.index=parseInt(localStorage.index)+1;
}

function adicionar_novo_produto(){
	var parcial = localStorage.getItem('produtos');
	produtos_volta = JSON.parse(parcial);

    produtos_volta.push({"id":localStorage.index,"nome":"teste"+localStorage.index,"endereco":"teste"+localStorage.index});

	localStorage.setItem('produtos',JSON.stringify(produtos_volta));
	console.log("Produtos: ", produtos_volta);
}