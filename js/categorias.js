function cadastraCategoria(){
	var parcial = localStorage.getItem('categorias');
	categorias_volta = JSON.parse(parcial);

	var id_novo = idcat();
	var txtCategoria = window.document.frmCategoria.txtCategoria.value;

	categorias_volta.push({"id":id_novo,						
						"categoria":txtCategoria});


	localStorage.setItem('categorias',JSON.stringify(categorias_volta));

	console.log("Categoria cadastrado com sucesso");
	console.log("Categorias:",categorias_volta);	
}

function alteraCategoria(idEdit){
	var parcial = localStorage.getItem('categorias');
	categorias_volta = JSON.parse(parcial);

	var txtCategoria = window.document.frmCategoria.txtCategoria.value;
	
	for (var i = 0; i < categorias_volta.length; i++) {
		var obj = categorias_volta[i];
		if (obj.id == idEdit) {
			obj.categoria = txtCategoria;
			break;
		}
	}						

	localStorage.setItem('categorias',JSON.stringify(categorias_volta));

	console.log("Categoria cadastrado com sucesso");
	console.log("Categorias:",categorias_volta);	
}

function idcat(){
	id = parseInt(localStorage.idcat)+1
	localStorage.idcat=id;

	return id;
}

function buscaNomeCat(idcat){
	var categoria_volta = localStorage.getItem('categorias');
	categorias= JSON.parse(categoria_volta);	

	for (var i = 0; i < categorias.length; i++) {
		if (categorias[i].id.toString() == idcat){
			return categorias[i].categoria;
		}
	}
}

function excluirCategoria(idCat){			
	var parcial = localStorage.getItem('categorias');
	categorias_volta = JSON.parse(parcial);
	
	var index = -1;
	
	for (var i = 0; i < categorias_volta.length; i++) {
		if (categorias_volta[i].id == idCat){
			index = i;
			break;
		}
	}
	
	var produto_volta = localStorage.getItem('produtos');
	produtos = JSON.parse(produto_volta);	

	for (var i = 0; i < produtos.length; i++) {
		if (produtos[i].categoria == idCat){
			alert("Categoria não pode ser excluida, existem produtos cadastrados com a categoria selecionada!");
			return false
			break;
		}
	}

	categorias_volta.splice(index,1);

	localStorage.setItem('categorias',JSON.stringify(categorias_volta));

	console.log("Categoria deletado com sucesso");
	console.log("Categorias:",categorias_volta);
	montaTabelaCat();
}

function verificaEditarCategoria(){
	idEdit = queryString("idEdit");
	if (!idEdit == false){
		var categoria_volta = localStorage.getItem('categorias');
		categorias = JSON.parse(categoria_volta);	

		for (var i = 0; i < categorias.length; i++) {
			if (categorias[i].id == idEdit){
				window.document.frmCategoria.txtCategoria.value = categorias[i].categoria;
				break;
			}
		}			
		document.getElementById('frmCategoria').setAttribute('onSubmit','return alteraCategoria('+idEdit+')');
		document.getElementById('btnCadastrarCat').setAttribute('value','Salvar Alteração');
	}
}

function editarCategoria(id)
{
	window.location = "cadastroCategoria.html?idEdit="+id;
}

function buscaCategoria(){
	var filtro = document.getElementById('filtrocat');
	var tabela = document.getElementById('tblcat');
	
	var nomeFiltro = filtro.value;
	nomeFiltro = nomeFiltro.trim();
	if (nomeFiltro.length > 0 ){
		for (var i = 1; i < tabela.rows.length; i++) {
			var conteudoCelula = tabela.rows[i].cells[1].innerText;
			var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
			tabela.rows[i].style.display = corresponde ? '' : 'none';
		}
	}else{
		for (var i = 1; i < tabela.rows.length; i++) {
			tabela.rows[i].style.display = '';
		}
	}	    		
}