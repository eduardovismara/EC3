	var inicizalizabanco=false;
	// Inicializa banco de dados
	var length_p = JSON.parse(localStorage.getItem('produtos'));
	var length_c = JSON.parse(localStorage.getItem('categorias'));
	var length_idp = localStorage.getItem('idpro');
	var length_idc = localStorage.getItem('idcat');
	
	if (length_p == null || length_c.length == null || length_idp.length == null || length_idc.length == null ){
	   inicizalizabanco=true;
	}
	if (!inicizalizabanco){
		if (length_p.length == 0 || length_c.length == 0 || length_idp.length == 0 || length_idc.length == 0 ){
			inicizalizabanco=true;
		}
	}
	if (inicizalizabanco){
		var categorias = [
			//{"id":"","categoria":""},
			{"id":1,"categoria":"Periféricos"},
			{"id":2,"categoria":"Placa mãe"},
			{"id":3,"categoria":"Processador"},
			{"id":4,"categoria":"Hard Disk"},
		];
		var produtos = [
			//{"id":0,"produto":"","categoria":0,"preco":"","data":"","obs":"","ativo":""},
			{"id":1,"produto":"Mouse sem fio","categoria":1,"preco":30,"data":"2016-03-19","obs":"marca: genius","ativo":true},
			{"id":2,"produto":"Caixa de som","categoria":1,"preco":25,"data":"2016-03-19","obs":"marca: genius","ativo":true},
			{"id":3,"produto":"Placa mãe intel","categoria":2,"preco":300,"data":"2016-03-19","obs":"para Intel Core i3","ativo":true},
			{"id":4,"produto":"Processador Intel Core I3","categoria":3,"preco":500,"data":"2016-03-19","obs":"","ativo":true},
			{"id":5,"produto":"HD 500gb","categoria":4,"preco":450,"data":"2016-03-19","obs":"hd seagate","ativo":true},
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
