import { Component } from '@angular/core';

import { ViewChild } from '@angular/core';

import { NavController, } from 'ionic-angular';

import {Validators, FormBuilder } from '@angular/forms';

import { incidencia } from '../../model/incidencia';
import { SyncService } from '../services/service';

import { LoadingController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';


import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SyncService]

})
export class HomePage {

  
  @ViewChild("bigSlider") slides: any;

  public myData: any;
  public data: any;
  public myData2: any;
  public errorMessage: string;
  public status: string;
  public http: Http;
  //public checkStatus:any;

  /*constructor(public navCtrl: NavController) {
    
}*/

   constructor(private _syncService: SyncService, http: Http, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
       this.data = new incidencia(
         null,
         "",
         "",
         "",
         "",
         "",
         "",
         false,
         false,
         false,
         false,
         null,
         false,
         null,
         "",
         "")
       
    }




presentLoading() {
    let loader = this.loadingCtrl.create({
        spinner: 'hide',
          content: `
      
        <div class="custom-spinner-container">
   
          <div style="text-align:center" class="custom-spinner-box"> <img src="imgs/logo.svg"><br>Enviant la incidència<br><img src="imgs/loader.gif"></div>

      </div>`,
      //content: "Enviant la incidència",
      duration: 6000
    });
    loader.present();
  }


        onSubmit() {
          if((this.data.linia != null)&&(this.data.dia != null)&&(this.data.estacio != null)&&(this.data.hora != null)&&((this.data.busRetard == true)||(this.data.busNoPassa == true)||(this.data.busDret == true)||(this.data.busPle == true)||(this.data.BusNoFulls == true))){
            if(this.data.politicaPrivadesa == true){
                          console.log("function onSubmit()");
                            //send loading
                            this.presentLoading();

                            //this.data = formData.value;
                            this._syncService.postQueixa(this.data).subscribe(
                              response => {
                                this.status = response.status;
                                //dismiss loading


                                if(this.status !== "success"){
                                  setTimeout(this.sentWRONG, 2000);
                                }  else {
                                  setTimeout(this.sentOK, 2000);
                                  this.goToSlide(0);
                                }
                              }, 
                              error =>{
                                this.errorMessage = <any>error;
                                if(this.errorMessage !== null){
                                  console.log(this.errorMessage);
                                  alert("Error en la petición: "+this.errorMessage);
                                }
                              }
                            );
                    }else{
                      alert("Cal que llegeixis i acceptis la política de privadesa per enviar una incidència.");

                    }
          }else{
            alert("Ep! Sembla que et falta omplir un dels camps obligatoris.");
            this.goToSlide(1);
          }
                    
              
      }

  showAlertOK() { //todo
    let alert = this.alertCtrl.create({
      title: 'FET!',
      subTitle: 'Dades enviades correctament.Veuràs la incidència a twitter sota el hashtag #hispanoFail',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertWrong(){ // todo
    let alert = this.alertCtrl.create({
      title: 'OOPS!',
      subTitle: 'Ha passat alguna cosa. Prova enviar la incidència més tard',
      buttons: ['OK']
    });
    alert.present();
  }

  sentOK(){    
       alert("Dades enviades correctament.Veuràs la incidència a twitter sota el hastag #hispanoFail. Moltes gràcies per colaborar!!");
  }
  sentWRONG(){    
       alert("OOPS! Ha passat alguna cosa. Prova d'enviar la incidència més tard");
  }

  goToSlide( pagina:Number) {
    
    this.slides.slideTo(pagina, 500);
  }

}
