var i = 0;
var vetorProduto = [

		{"Nome":"Caixa Bombom","Tipo":"Chocolate", "Quantidade":10},
		{"Nome":"Jogo de Edredom", "Tipo":"Cama, mesa, banho", "Quantidade":3},
		{"Nome":"Celular moto G", "Tipo":"Telefonia","Quantidade":1}
	];

	//seleciona tela incial
	function inicial (){
		document.getElementById("Principal").style.display = 'block';
		document.getElementById("Produtos").style.display = 'none';
		document.getElementById("Categorias").style.display = 'none';
		document.getElementById("Sobre"	).style.display = 'none';

	}

	function Produtos(){
		mostrarNaTela();
		document.getElementById("Principal").style.display = 'none';
		document.getElementById("Produtos").style.display = 'block';
		document.getElementById("Categorias").style.display = 'none';
		document.getElementById("Sobre").style.display = 'none';

	}

	function Categorias(){
		document.getElementById("Principal").style.display = 'none';
		document.getElementById("Produtos").style.display = 'none';
		document.getElementById("Categorias").style.display = 'block';
		document.getElementById("Sobre").style.display = 'none';
	}

	function Sobre(){
		document.getElementById("Principal").style.display = 'none';
		document.getElementById("Produtos").style.display = 'none';
		document.getElementById("Categorias").style.display = 'none';
		document.getElementById("Sobre").style.display = 'block';

	}

	function adicionarProdutos(nome,Tipo, Quantidade){
		nome+=""+i;
		produto = {"Nome":nome,"Tipo":Tipo,"Quantidade": Quantidade};
			for (var j = 0; j < 10; j++) {
				if(vetorProduto[j]==null){
					vetorProduto[j] = produto;
					break;
				}
			}

			mostrarNaTela();
			i++;
	};
	 function mostrarNaTela(){
			var select = document.getElementById("selecionarProduto");
			for (var i = 0; i < vetorProduto.length; i++) {
				if (document.getElementById("op"+i)) {
					continue;
				}
				var opt = vetorProduto[i].Nome;
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = i;
				el.id = "op" +i;
				select.appendChild(el);
				select.reload;
			}
	};