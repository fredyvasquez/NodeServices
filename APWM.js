var restify = require('restify');
var countryFacade = require('./facade/country.js');
var scheduleFacade = require('./facade/schedule.js');
var policyFacade = require('./facade/policy.js');


//user
function login(request, response, next){
	if(request.params.user == 'fredyv' && request.params.pass == '123'){
		response.send(201, Math.random().toString(36).substr(3, 8));
	}
	else{
		response.send('ErrorUserPass');	
	}

	return next();
}

//Schedule
function deleteSchedule(request, response, next){
	scheduleFacade.delete(request.params.ids);
	response.send();
	return next();
}

function getSchedule(request, response, next){

	response.send(scheduleFacade.get(request.params.id));
	return next();
}

function listSchedule(request, response, next){
	response.send(scheduleFacade.list(request.params.pageNumber, request.params.pageSize, request.params.name, request.params.content));
	return next();
}

function saveSchedule(request, response, next){
	response.send();
	return next();
}

function UpdateScheduleHour(request, response, next){
	response.send(1);
	return next();
}



// Price
function countryList(request, response, next){
	
	response.send(countryFacade.list());
	return next();
}

function listPriceHourKw(request, response, next){
	var json = {data:[{Day:0,Id:1,Hour0:1,Hour1:1,Hour2:1,Hour3:1,Hour4:1,Hour5:1,Hour6:1,Hour7:1,Hour8:1,Hour9:1,Hour10:1,Hour11:1,Hour12:1,Hour13:1,Hour14:1,Hour15:1,Hour16:1,Hour17:1,Hour18:1,Hour19:1,Hour20:1,Hour21:1,Hour22:1,Hour23:1},{Day:1,Id:1,Hour0:1,Hour1:1,Hour2:1,Hour3:1,Hour4:1,Hour5:1,Hour6:1,Hour7:1,Hour8:1,Hour9:1,Hour10:1,Hour11:1,Hour12:1,Hour13:1,Hour14:1,Hour15:1,Hour16:1,Hour17:1,Hour18:1,Hour19:1,Hour20:1,Hour21:1,Hour22:1,Hour23:1},{Day:2,Id:1,Hour0:1,Hour1:1,Hour2:1,Hour3:1,Hour4:1,Hour5:1,Hour6:1,Hour7:1,Hour8:1,Hour9:1,Hour10:1,Hour11:1,Hour12:1,Hour13:1,Hour14:1,Hour15:1,Hour16:1,Hour17:1,Hour18:1,Hour19:1,Hour20:1,Hour21:1,Hour22:1,Hour23:1},{Day:3,Id:1,Hour0:1,Hour1:1,Hour2:1,Hour3:1,Hour4:1,Hour5:1,Hour6:1,Hour7:1,Hour8:1,Hour9:1,Hour10:1,Hour11:1,Hour12:1,Hour13:1,Hour14:1,Hour15:1,Hour16:1,Hour17:1,Hour18:1,Hour19:1,Hour20:1,Hour21:1,Hour22:1,Hour23:1},{Day:4,Id:1,Hour0:1,Hour1:1,Hour2:1,Hour3:1,Hour4:1,Hour5:1,Hour6:1,Hour7:1,Hour8:1,Hour9:1,Hour10:1,Hour11:1,Hour12:1,Hour13:1,Hour14:1,Hour15:1,Hour16:1,Hour17:1,Hour18:1,Hour19:1,Hour20:1,Hour21:1,Hour22:1,Hour23:1},{Day:5,Id:1,Hour0:1,Hour1:1,Hour2:1,Hour3:1,Hour4:1,Hour5:1,Hour6:1,Hour7:1,Hour8:1,Hour9:1,Hour10:1,Hour11:1,Hour12:1,Hour13:1,Hour14:1,Hour15:1,Hour16:1,Hour17:1,Hour18:1,Hour19:1,Hour20:1,Hour21:1,Hour22:1,Hour23:1},{Day:6,Id:1,Hour0:1,Hour1:1,Hour2:1,Hour3:1,Hour4:1,Hour5:1,Hour6:1,Hour7:1,Hour8:1,Hour9:1,Hour10:1,Hour11:1,Hour12:1,Hour13:1,Hour14:1,Hour15:1,Hour16:1,Hour17:1,Hour18:1,Hour19:1,Hour20:1,Hour21:1,Hour22:1,Hour23:1}],info:'7'};
	response.send(json);
	return next();
}

function updateListPriceHourKw(request, response, next){

	response.send(1);
	return next();
}

function updateSettings(request, response, next){

	response.send();
	return next();
}

//Policy
function deletePolicy(request, response, next){
	policyFacade.delete();
	response.send();
	return next();
}

function getPolicy(request, response, next){

	response.send(policyFacade.get(request.params.id));
	return next();
}

function listPolicy(request, response, next){
	response.send(scheduleFacade.list(request.params.pageNumber, request.params.pageSize, request.params.name));
	return next();
}

function savePolicy(request, response, next){
	response.send(policyFacade.savePolicy(request.params.policy));
	return next();
}

var server = restify.createServer();
	server.post('/login', function create(req, res, next) {
   		res.send(201, Math.random().toString(36).substr(3, 8));
   		return next();
 	});
 
	server.get('/user/login/:type/:user/:pass', login);

	server.del('/schedule/delete', deleteSchedule);
	server.get('/schedule/get/:id', getSchedule);
	server.get('/schedule/list/:pageNumber/:pageSize/:name/:content', listSchedule);
	server.get('/schedule/save', saveSchedule);
	server.get('/schedule/updateScheduleHour', UpdateScheduleHour);

	server.get('/price/countryList', countryList);
	server.get('/price/listPriceHourKw/:id', listPriceHourKw);
	server.get('/price/updateListPriceHourKw/:id', updateListPriceHourKw);
	server.get('/price/updateSettings/:id', updateSettings);

	server.get('/policy/delete/:ids', deletePolicy);
	server.get('/policy/get/:id', getPolicy);
	server.get('/policy/list/:pageNumber/:pageSize/:name/:content', listPolicy);
	server.get('/policy/save', savePolicy);



server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});