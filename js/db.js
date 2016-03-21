function cadastraProduto(){

	var parcial = localStorage.getItem('produtos');
	produtos_volta = JSON.parse(parcial);

	var id_novo = idpro();
	var txtproduto = window.document.frmProdutos.txtProduto.value;
	var txtpreco = window.document.frmProdutos.txtPreco.value;
	var txtdata = window.document.frmProdutos.txtData.value;
	var txtobs = window.document.frmProdutos.txtObs.value;
	var txtativo = window.document.frmProdutos.checkAtivo.checked;


	var x = document.getElementById("selecionarCategoria").selectedIndex;
	var y = document.getElementById("selecionarCategoria").options;

	var txtcategoria = y[x].value;


	produtos_volta.push({"id":id_novo,
						"produto":txtproduto,
						"categoria":txtcategoria,
						"preco":txtpreco,
						"data":txtdata,
						"obs":txtobs,
						"ativo":txtativo});


	localStorage.setItem('produtos',JSON.stringify(produtos_volta));

	console.log("Produto cadastrado com sucesso");
	console.log("Produtos:",produtos_volta);
}


function idpro(){
	id = parseInt(localStorage.idpro)+1
	localStorage.idpro=id;

	return id;
}

function idcat(){
	id = parseInt(localStorage.idcat)+1
	localStorage.idcat=id;

	return id;
}

// Inicializa banco de dados
	var length_p = JSON.parse(localStorage.getItem('produtos'));
	var length_c = JSON.parse(localStorage.getItem('categorias'));
	var length_idp = localStorage.getItem('idpro');
	var length_idc = localStorage.getItem('idcat');
	if (length_p.length == 0 || length_c.length == 0 || length_idp.length == 0 || length_idc.length == 0 ){
		var categorias = [
			//{"id":"","categoria":""},
			{"id":1,"categoria":"Perifericos"},
			{"id":2,"categoria":"Placa mãe"},
			{"id":3,"categoria":"Processador"},
			{"id":4,"categoria":"Hard Disk"},
		];
		var produtos = [
			//{"id":0,"produto":"","categoria":0,"preco":"","data":"","obs":"","ativo":""},
			{"id":1,"produto":"Mouse sem fio","categoria":1,"preco":30,"data":"19/03/2016","obs":"marca: genius","ativo":true},
			{"id":2,"produto":"Caixa de som","categoria":1,"preco":25,"data":"19/03/2016","obs":"marca: genius","ativo":true},
			{"id":3,"produto":"Placa mãe intel","categoria":2,"preco":300,"data":"19/03/2016","obs":"para Intel Core i3","ativo":true},
			{"id":4,"produto":"Processador Intel Core I3","categoria":3,"preco":500,"data":"19/03/2016","obs":"","ativo":true},
			{"id":5,"produto":"HD 500gb","categoria":4,"preco":450,"data":"19/03/2016","obs":"hd seagate","ativo":true},
		];		
		localStorage.setItem('categorias',JSON.stringify(categorias));
		localStorage.setItem('produtos',JSON.stringify(produtos));
		localStorage.setItem('idcat',4);
		localStorage.setItem('idpro',5);		
		console.log("Banco inicilizado");
		console.log("Categorias: "+localStorage.getItem('categorias'));
		console.log("Produtos: "+localStorage.getItem('produtos'));		
		console.log("ID Categorias: "+localStorage.idcat);
		console.log("ID Produtos: "+localStorage.idpro);
	}
// Fim inicializa banco de dados
