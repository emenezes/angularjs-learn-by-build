
function ProdutoService($q, $http, $log) {

	var listaProdutos;
	var listaProdutosIndexadaPelaId;
	// var id;

	this.get = () => {
		var compromisso = $q.defer();
		
		if (listaProdutos) {
			compromisso.resolve(angular.copy(listaProdutos));
		} else {
			carregarProdutos();
			if (/*id &&*/ listaProdutos){
				compromisso.resolve(angular.copy(listaProdutos));
			} else {
				$http.get('/api/produtos', {timeout:500})
				.then((resposta)=> {
					$log.debug(resposta);
					compromisso.resolve(angular.copy(resposta.data))
				})
				.catch((httpError)=> {
					$log.debug(httpError);
					compromisso.reject('Não foi possível carregar os produtos.');
				});
			}
		}
		return compromisso.promise;
	}

	this.criar = function(novoProduto) {
		var compromisso = $q.defer();

		$http.post('/api/produtos', novoProduto, {timeout:500})
		.then((resposta)=> {
			$log.debug(resposta);
			$log.info('Produto salvo com sucesso no servidor.');
			setListaProdutos(resposta.data);
			compromisso.resolve(angular.copy(listaProdutos))
		})
		.catch((httpError)=> {
			$log.debug(httpError);
			compromisso.reject('Não foi possível salvar o novo produto.');
		});
		return compromisso.promise;
	}

	this.getProdutoPelaId = function (id) {
		this.get();
		return listaProdutosIndexadaPelaId[id];
	}

	function setListaProdutos(lista) {
		listaProdutos = lista;
		localStorage.setItem('listaProdutos',JSON.stringify(listaProdutos));
		listaProdutosIndexadaPelaId = indexarProdutosPelaId();
	}

	function indexarProdutosPelaId () {
		let listaIndexada = {};
		for (var i = listaProdutos.length - 1; i >= 0; i--) {
			let id = listaProdutos[i].id;
			listaIndexada[id] = listaProdutos[i];
		}
		return listaIndexada;
	}

	function carregarProdutos () {
		// id = (localStorage.hasOwnProperty('lastProdutoId')
		// 	&& JSON.parse(localStorage.getItem('lastProdutoId'))) || 0;
		let lista = (localStorage.hasOwnProperty('listaProdutos') 
			&& JSON.parse(localStorage.getItem('listaProdutos')));
		if(lista)
			setListaProdutos(lista);
		return listaProdutos;
	}
}

ProdutoService.$inject = ['$q','$http','$log'];

export default ProdutoService;

