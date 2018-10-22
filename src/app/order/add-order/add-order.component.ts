import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AvatarDialogComponent } from 'src/app/avatar-dialog/avatar-dialog.component';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  exampleForm: FormGroup;
  avatarLink: string = "https://www.bigc.co.th/media/catalog/product/cache/1/image/497x497/9df78eab33525d08d6e5fb8d27136e95/8/8/8851989080055_6.jpg";

  validation_messages = {
   'name': [
     { type: 'required', message: 'กรุณากรอกชื่อสินค้า' }
   ],
   'code': [
     { type: 'required', message: 'ต้องเป็นตัวเลขเท่านั้น' }
   ],
   'description': [
     { type: 'required', message: 'กรุณากรอกรายละเอียดสินค้า' },
   ],
   'price': [
     { type: 'required', message: 'ต้องเป็นตัวเลขเท่านั้น' },
   ]
 };
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  //เพิ่มรายการสินค้า
  createForm() {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required ],
      code: ['', Validators.required ],
      description: ['', Validators.required ],
      price: ['', Validators.required ]
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.avatarLink = result.link;
      }
    });
  }

  resetFields(){
    this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }
  
  //กลับไปหน้าhome
  onSubmit(value){
    this.firebaseService.createOrder(value, this.avatarLink)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/home']);
      }
    )
  }
}
