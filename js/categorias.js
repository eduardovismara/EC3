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