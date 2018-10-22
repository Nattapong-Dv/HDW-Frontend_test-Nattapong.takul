import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('avatar').valueChanges()
  }
  
  getOrder(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  updateOrder(userKey, value){
    value.name = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }
  
  //ลบ
  deleteOrder(userKey){
    return this.db.collection('users').doc(userKey).delete();
  }

  getOrders(){
    return this.db.collection('users').snapshotChanges();
  }
  
  // ค้าหาชื่อสินค้า
  searchUsers(searchValue){
    return this.db.collection('users',ref => ref.where('name', '>=', searchValue)
      .where('name', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }


  createOrder(value, avatar){
    return this.db.collection('users').add({
      name: value.name,
      code: value.code,
      description: value.description,
      price: parseInt(value.price),
      avatar: avatar
    });
  }
}
