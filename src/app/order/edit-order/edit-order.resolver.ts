import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from 'src/app/services/firebase.service';

@Injectable()
export class EditOrderResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let orderId = route.paramMap.get('id');
      this.firebaseService.getOrder(orderId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
