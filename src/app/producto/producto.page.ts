import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  goHome(): void {
    this.navCtrl.navigateRoot(['home']);
  }
  goEdit(): void {
    this.navCtrl.navigateForward(['editar']);
  }

}
