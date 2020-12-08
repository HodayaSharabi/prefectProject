import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { BranchesComponent } from './branches/branches.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrdershippingComponent } from './ordershipping/ordershipping.component';
import { EmployeerequiredComponent } from './employeer-equired/employeerequired.component';
import { PackagesComponent } from './packages/packages.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ShippingOperationsInRealTimeComponent } from './shipping-operations-in-real-time/shipping-operations-in-real-time.component';
import { OrdersMadeComponent } from './orders-made/orders-made.component';
import { FormsModule } from '@angular/forms'
import { CommentsAndIlluminationsComponent } from './comments-and-illuminations/comments-and-illuminations.component';
import { UserLoginService } from './services/user-login.service';
import { CourierLoginComponent } from './courier-login/courier-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerAccountInformationComponent } from './customer-account-information/customer-account-information.component';
import { UpdateDetailsComponent } from "./update-details/update-details.component";
import { MyShipmentsComponent } from './my-shipments/my-shipments.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { UpdateNewCustomerComponent } from './update-new-customer/update-new-customer.component';
import { shipmentsMenuComponent } from './shipments-menu/shipments-menu.component';
import { CourierMenuComponent } from './courier-menu/courier-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourierViewComponent } from './courier-view/courier-view.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { CouriersDetailsComponent } from './couriers-details/couriers-details.component';
import { NewCourierComponent } from './new-courier/new-courier.component';
import { NewShipmentComponent } from './new-shipment/new-shipment.component';
import { CustomerRemovalComponent } from './customer-removal/customer-removal.component';
import { LikesComponent } from './likes/likes.component';
import { DayToDayDeliveriesComponent } from './day-to-day-deliveries/day-to-day-deliveries.component';
import { OurBranchesComponent } from './our-branches/our-branches.component';
import { EnlightenmentAndCommentsComponent } from './enlightenment-and-comments/enlightenment-and-comments.component';
import { OpeningTimesComponent } from './opening-times/opening-times.component';
import { AgmCoreModule } from '@agm/core'            // @agm/core
import { AgmDirectionModule } from 'agm-direction'   // agm-direction
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SendMessageComponent } from './send-message/send-message.component';
import { ShipmentsCourierViewComponent } from './shipments-courier-view/shipments-courier-view.component';
import { UpdateDetailsCourierComponent } from './update-details-courier/update-details-courier.component';
import { ShippingSelectionComponent } from './shipping-selection/shipping-selection.component';
import { CommentsToCourierComponent } from './comments-to-courier/comments-to-courier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GogelMapSearchComponent } from './gogel-map-search/gogel-map-search.component';
// import { MatSliderModule } from '@angular/material/slider';
// import {CommentsAndIlluminationsComponent}  

@NgModule({
  declarations: [
    AppComponent,
    // MatSliderModule,
    shipmentsMenuComponent,
    HomePageComponent,
    AboutComponent,
    CompanyServicesComponent,
    BranchesComponent,
    ContactUsComponent,
    OrdershippingComponent,
    EmployeerequiredComponent,
    PackagesComponent,
    ManagerLoginComponent,
    ShippingOperationsInRealTimeComponent,
    OrdersMadeComponent,
    CommentsAndIlluminationsComponent,
    CourierLoginComponent,
    CustomerLoginComponent,
    CustomerAccountInformationComponent,
    UpdateDetailsComponent,
    MyShipmentsComponent,
    CustomerViewComponent,
    UpdateNewCustomerComponent,
    CourierMenuComponent,
    CourierViewComponent,
    ManagerViewComponent,
    CouriersDetailsComponent,
    NewCourierComponent,
    NewShipmentComponent,
    CustomerRemovalComponent,
    LikesComponent,
    DayToDayDeliveriesComponent,
    OurBranchesComponent,
    EnlightenmentAndCommentsComponent,
    OpeningTimesComponent,
    SendMessageComponent,
    ShipmentsCourierViewComponent,
    UpdateDetailsCourierComponent,
    ShippingSelectionComponent,
    CommentsToCourierComponent,
    GogelMapSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({ // @agm/core
      // apiKey: 'AIzaSyCumD0NGABi1GHNJKBhzkA85VoWjBopRoQ',// שלהם
      // apiKey: 'AIzaSyBBpy-z05AEn8HQgg0jQ3JpNIzuTAo-OTw'//שלי
    //  apiKey:'AIzaSyCwf5KJRSPX0QNNrFegWfcoGDXxukDH6Kk' 
     apiKey:'AIzaSyAYSiaPzb95HxoqKGRKaYFczQZC8m3TlnE' ,
     libraries: ['places' , 'javascript']

    }),
    AgmDirectionModule,
    GooglePlaceModule,
    BrowserAnimationsModule

  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }