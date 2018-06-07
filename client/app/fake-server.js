import {_lastClienteId, _listaClientes, _lastProdutoId, 
	_listaProdutos, _lastPedidoId, _listaPedidos} from './fake-data';
// Variáveis foram copiadas pois são constantes
let lastClienteId = _lastClienteId;
let listaClientes = _listaClientes;
let lastProdutoId = _lastProdutoId;
let listaProdutos = _listaProdutos;
let lastPedidoId = _lastPedidoId;
let listaPedidos = _listaPedidos;

function FalsoServidorRemoto ($httpBackend, $log) {
	$log.log(listaProdutos);

	$httpBackend.whenGET('/api/produtos').respond(listaProdutos);
	$httpBackend.whenPOST('/api/produtos', (data => {
		let novoProduto = JSON.parse(data);
		if (novoProduto.nome && novoProduto.preco && novoProduto.descricao) {
			novoProduto.id = ++lastProdutoId;
			listaProdutos.push(novoProduto);
			return true;
		}
		$log.debug(data);
		return false;
	})).respond(listaProdutos);
	$httpBackend.whenGET('/api/clientes').respond(listaClientes);
	$httpBackend.whenGET('/api/pedidos').respond(listaPedidos);

	$httpBackend.whenRoute('GET','/api/produtos/:id').respond(function(method, url, data, headers, params) {
		$log.debug('Funcao get')
    $log.debug(method, url, data, headers, params);
    return [200, {item1:'dados', item2:550}, {}, "TUDO OK."];
  });
  $httpBackend.whenRoute('DELETE','/api/produtos/:id').respond(function(method, url, data, headers, params) {
  	$log.debug('Funcao delete')
    $log.debug(method, url, data, headers, params);
    return [200, {item1:'dados', item2:550}, {}, "TUDO OK."];
  });
  $httpBackend.whenRoute('PUT','/api/produtos/:id').respond(function(method, url, data, headers, params) {
  	$log.debug('Funcao delete')
    $log.debug(method, url, data, headers, params);
    return [200, {item1:'dados', item2:550}, {}, "TUDO OK."];
  });
  $httpBackend.whenRoute('POST','/api/produtos').respond(function(method, url, data, headers, params) {
  	$log.debug('Funcao delete')
    $log.debug(method, url, data, headers, params);
    return [200, {item1:'dados', item2:550}, {}, "TUDO OK."];
  });
}

FalsoServidorRemoto.$inject = ['$httpBackend', '$log'];

export default FalsoServidorRemoto;