(function(){

angular.module('myStore',[])

	.value('ServicoCidades',[
	  "Century,AR",
	  "Moquino,MI",
	  "Newkirk,WA",
	  "Eggertsville,AZ",
	  "Frierson,UT",
	  "Manitou,IL",
	  "Matheny,WI",
	  "Brenton,SD",
	  "Deercroft,PW",
	  "Elwood,CT",
	  "Otranto,VT",
	  "Morgandale,VI",
	  "Fillmore,NJ",
	  "Denio,OH",
	  "Vale,IA",
	  "Harold,NH",
	  "Bentonville,MH",
	  "Cobbtown,MD",
	  "Starks,MO",
	  "Henrietta,IN"
	]);

})();

(function(){

function ClienteController(srvCidades) {
	let listaClientesStored = localStorage.getItem('listaClientes');
	this.listaClientes = (listaClientesStored && JSON.parse(listaClientesStored)) || [];
	this.novoCliente = {};
	this.estiloTabelaLinhaImpar = {'background-color':'blue'}
	this.estiloTabelaLinhaPar = {'background-color':'red'}
	this.listaCidades = srvCidades;
	var id = 0;
	this.criar = function() {
		this.novoCliente.id = ++id;
		this.listaClientes.push(this.novoCliente);
		this.novoCliente = {};
		localStorage.setItem('listaClientes',JSON.stringify(this.listaClientes));
	}
}

ClienteController.$inject = ['ServicoCidades'];
angular.module('myStore')
	.controller('ClienteController', ClienteController);

})();