import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { incidencia } from "../../model/incidencia";

@Injectable()
export class SyncService {
	constructor(private _http: Http){}

	postQueixa(incidencia: incidencia){
		let json = JSON.stringify(incidencia);
		let params = "json="+json;
		let headers = new Headers({"Content-Type":"application/x-www-form-urlencoded"});
		
		//This code syncs with your Slim ApiRest, if you don't setup this, DB connection doesn't work
		return this._http.post("http://customApiRest.com/slim/apiSample.php/insertSomething", params, {headers: headers}).map(res => res.json());
	}
	

}
