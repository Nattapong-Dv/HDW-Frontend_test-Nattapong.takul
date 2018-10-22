import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NewOrderComponent } from './order/add-order/add-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { EditOrderResolver } from './order/edit-order/edit-order.resolver';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    EditOrderComponent,
    NewOrderComponent,
    HomeComponent,
    ChartComponent
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [FirebaseService, EditOrderResolver],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
