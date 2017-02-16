//This file is your 'CustomApiRest' and use Slim. Put this file in the Slim root folder on your server


<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}
require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$db = new mysqli("localhost", "dbName", "dbPass", "TableName");
$db->set_charset("utf8");

$app->post("/insertSomething", function() use($db, $app) {

	$json = $app->request->post("json");
	$data = json_decode($json, true);
  
  $query = "INSERT INTO sample_table VALUES(NULL,"
			. "'{$data["Foo1"]}',"
			. "'{$data["Foo2"]}',"
			. "'{$data["Foo3"]}',"
			. "'{$data["Foo4"]}',"
			. "'{$dataFoo}',"
			. "'{$dataLastFoo}'"
			. ")";

	$insert = $db->query($query);
  
  	
});

$app->run();
