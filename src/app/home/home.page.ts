import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product } from 'src/models/producto.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  products: Product[];

  constructor(private navCtrl: NavController,
              private productService: ProductService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  goCreate(): void {
    this.navCtrl.navigateForward(['create']);
  }
}
