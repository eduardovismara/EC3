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
function alteraProduto(idEdit){
	var parcial = localStorage.getItem('produtos');
	produtos_volta = JSON.parse(parcial);

	var txtproduto = window.document.frmProdutos.txtProduto.value;
	var txtpreco = window.document.frmProdutos.txtPreco.value;
	var txtdata = window.document.frmProdutos.txtData.value;
	var txtobs = window.document.frmProdutos.txtObs.value;
	var txtativo = window.document.frmProdutos.checkAtivo.checked;


	var x = document.getElementById("selecionarCategoria").selectedIndex;
	var y = document.getElementById("selecionarCategoria").options;

	var txtcategoria = y[x].value;
	for (var i = 0; i < produtos_volta.length; i++) {
		var obj = produtos_volta[i];
		if (obj.id == idEdit) {			
			obj.produto = txtproduto;
			obj.categoria = txtcategoria;
			obj.preco = txtpreco;
			obj.data = txtdata;
			obj.obs = txtobs;
			obj.ativo = txtativo;
			break;
		}
	}						

	localStorage.setItem('produtos',JSON.stringify(produtos_volta));

	console.log("Produto cadastrado com sucesso");
	console.log("Produtos:",produtos_volta);	
}

function idpro(){
	id = parseInt(localStorage.idpro)+1
	localStorage.idpro=id;

	return id;
}

function verificaEditarProduto(){
	idEdit = queryString("idEdit");
	if (!idEdit == false){
		var produto_volta = localStorage.getItem('produtos');
		produtos = JSON.parse(produto_volta);	

		for (var i = 0; i < produtos.length; i++) {
			if (produtos[i].id == idEdit){
				window.document.frmProdutos.txtProduto.value = produtos[i].produto;
				window.document.frmProdutos.txtPreco.value = produtos[i].preco;
				window.document.frmProdutos.txtData.value = produtos[i].data;
				window.document.frmProdutos.txtObs.value = produtos[i].obs;
				window.document.frmProdutos.checkAtivo.checked = produtos[i].ativo;
				window.document.frmProdutos.selecionarCategoria.selectedIndex = produtos[i].categoria;
				break;
			}
		}			
		document.getElementById('frmProdutos').setAttribute('onSubmit','return alteraProduto('+idEdit+')');		
	}
}
function buscaProduto(){
	var filtro = document.getElementById('filtro');
	var tabela = document.getElementById('tblprod');
	
	var nomeFiltro = filtro.value;
	nomeFiltro = nomeFiltro.trim();
	if (nomeFiltro.length > 0 ){
		for (var i = 1; i < tabela.rows.length; i++) {
			var conteudoCelula = tabela.rows[i].cells[2].innerText;
			var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
			tabela.rows[i].style.display = corresponde ? '' : 'none';
		}
	}else{
		for (var i = 1; i < tabela.rows.length; i++) {
			tabela.rows[i].style.display = '';
		}
	}	    		
}

function excluirProduto(idProd){			
	var parcial = localStorage.getItem('produtos');
	produtos_volta = JSON.parse(parcial);
	
	var index = -1;
	
	for (var i = 0; i < produtos_volta.length; i++) {
		if (produtos_volta[i].id == idProd){
			index = i;
			break;
		}
	}
	
	produtos_volta.splice(index,1);

	localStorage.setItem('produtos',JSON.stringify(produtos_volta));

	console.log("Produto deletado com sucesso");
	console.log("Produtos:",produtos_volta);
	montaTabelaProd();
}

function editarProduto(id)
{
	window.location = "cadastroProduto.html?idEdit="+id;
}