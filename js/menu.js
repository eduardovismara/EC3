function montaMenu(){
	// Captura o nome da pagina que esta sendo carregada
	nomeArquivo = window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1);
	
	// Define a logo, titulo e menu
	cabecalho = "";
	cabecalho = cabecalho + "<img class='logo' src='imgs/logo.jpg'>";
	cabecalho = cabecalho + "<header>";
	cabecalho = cabecalho + "<h1>Vendas On-Line</h1> ";
	cabecalho = cabecalho + "</header>";
	cabecalho = cabecalho + "<nav>";
	cabecalho = cabecalho + "<ul>";
	cabecalho = cabecalho + "<li><a href='index.html' id='home'> Home </a></li>";
	cabecalho = cabecalho + "<li><a href='produtos.html' id='produtos'> Produtos </a></li>";
	cabecalho = cabecalho + "<li><a href='categorias.html' id='categorias'> Categorias </a></li>";
	cabecalho = cabecalho + "<li><a href='sobre.html' id='sobre'> Sobre </a></li>";
	cabecalho = cabecalho + "</ul>";
	cabecalho = cabecalho + "</nav>";	


	// seta cabecalho
	document.getElementById("cabecalho").innerHTML = cabecalho;

	// seta qual o menu esta selecionado
	if (nomeArquivo == "index.html"){
		document.getElementById('home').className = 'selecionado';
	}else if (nomeArquivo == "produtos.html"){
		document.getElementById('produtos').className = 'selecionado';
	}else if (nomeArquivo == "categorias.html"){
		document.getElementById('categorias').className = 'selecionado';
	}else if (nomeArquivo == "sobre.html"){
		document.getElementById('sobre').className = 'selecionado';
	}


	// define rodape
	rodape = "";
	rodape = rodape + "<p>Colocar alguma coisa</p>";

	// seta cabecalho
	document.getElementById("rodape").innerHTML = rodape;

}