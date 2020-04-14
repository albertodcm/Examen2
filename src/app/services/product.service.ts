import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/models/producto.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  product: Product;

  constructor(private afs: AngularFirestore) { }

  createProduct(product: Product) {
    console.log('entro tercera parte');
    const permId = this.afs.createId();
    const newProduct: Product = {
      ...product,
      id: permId,
    };
    return this.afs.collection('products').doc(permId).set(newProduct);
    // return this.afs.doc(`products/${product.id}`).set(product);
  }

  deleteProduct(id: string) {
    console.log('entro a delete');
    return this.afs.collection('products').doc(id).delete();
    // return this.afs.doc(`product/${productId}`).delete();
  }

  updateProduct(product: Product) {
    return this.afs.doc(`products/${product.id}`).update(product);
  }

  getProduct(productId: string) {
    return this.afs.doc(`products/${productId}`).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data() as Product;
        const id = doc.payload.id;

        return {id, ...data} as Product;
      })
    );
  }

  getProducts() {
    return this.afs.collection('products').snapshotChanges().pipe(
      map(docs => docs.map(doc => {
        const post = doc.payload.doc.data() as any;
        const id = doc.payload.doc.id;

        return { id, ...post };
      }))
    );
  }

}
