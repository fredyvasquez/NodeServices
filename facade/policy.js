exports.save = function (policy)
{
	return 1;
}

exports.list = function(pageNumber, pageSize, name)
{
	var json = {data:[{Id:1142,Name:"PolicyTest",Description:"Policy de pruebas",ListActions:{data:[{Value:10,Type:0,Name:"shutdmonitor",Id:1}]},LastUpdate:"2012/10/25/18/27/52",PercentSaving:20},{Id:1127,Name:"pol",Description:"esta es una politica super chevere q ahorra mucho y sirve para resto de cosas adicionalmente en la m",ListActions:{data:[{Value:0,Type:0,Name:"shutdmonitor",Id:1},{Value:0,Type:0,Name:"suspendhd",Id:2},{Value:0,Type:0,Name:"suspendpc",Id:3},{Value:0,Type:0,Name:"hibernatepc",Id:4}]},LastUpdate:"2012/10/25/18/03/47",PercentSaving:100},{Id:690,Name:"apagar",Description:"Esta es una politica que ahorra energía en hora de almuerzo y en horas no laborales",ListActions:{data:[{Value:1,Type:0,Name:"shutdmonitor",Id:1},{Value:4,Type:0,Name:"suspendhd",Id:2},{Value:10,Type:0,Name:"suspendpc",Id:3},{Value:20,Type:0,Name:"hibernatepc",Id:4}]},LastUpdate:"2012/10/26/17/32/36",PercentSaving:89},{Id:689,Name:"politica estandar",Description:"Politica de prueba de APWM",ListActions:{data:[{Value:2,Type:0,Name:"shutdmonitor",Id:1},{Value:10,Type:0,Name:"suspendhd",Id:2},{Value:0,Type:0,Name:"suspendpc",Id:3},{Value:0,Type:0,Name:"hibernatepc",Id:4}]},LastUpdate:"2012/10/26/17/27/21",PercentSaving:83},{Id:0,Name:"Full",Description:"always on",ListActions:{data:[]},LastUpdate:"2012/10/01/17/40/15",PercentSaving:0}],info:'5'};
    return json;
}


exports.get = function(id)
{
    var json = {Id:1127,Name:"pol",Description:"esta es una politica super chevere q ahorra mucho y sirve para resto de cosas adicionalmente en la m",ListActions:{data:[{Value:0,Type:0,Name:"shutdmonitor",Id:1},{Value:0,Type:0,Name:"suspendhd",Id:2},{Value:0,Type:0,Name:"suspendpc",Id:3},{Value:0,Type:0,Name:"hibernatepc",Id:4}]},Message:""};
    return json;
}

exports.delete = function(ids)
{
    
}