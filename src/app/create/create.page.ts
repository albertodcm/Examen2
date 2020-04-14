import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/producto.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  productForm: FormGroup;


  constructor(private productService: ProductService,
              private modalCtrl: ModalController,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    // this.navCtrl.navigateForward(['create']);

    console.log('entro aqui');
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: null,
        name: this.productForm.controls.name.value,
        description: this.productForm.controls.description.value,
        category: this.productForm.controls.category.value,
        price: this.productForm.controls.price.value,
        availability: 'available'
      };
      console.log(newProduct);
      this.productService.createProduct(newProduct).then(() => {
        console.log('creado');
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log('forma no completada');
    }
  }


  goHome(): void {
    this.navCtrl.navigateForward(['home']);
  }



}
