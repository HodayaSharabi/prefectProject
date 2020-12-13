import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { BranchesComponent } from './branches/branches.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrdershippingComponent } from './ordershipping/ordershipping.component';
import { EmployeerequiredComponent } from './employeer-equired/employeerequired.component';
import { OrdersMadeComponent } from './orders-made/orders-made.component';
import { CommentsAndIlluminationsComponent } from './comments-and-illuminations/comments-and-illuminations.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
// import { CourierLoginService } from './services/courier-login.service';
import { CourierLoginComponent } from './courier-login/courier-login.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { MyShipmentsComponent } from './my-shipments/my-shipments.component';
import { CourierViewComponent } from './courier-view/courier-view.component';
import { UpdateNewCustomerComponent } from './update-new-customer/update-new-customer.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { ShippingOperationsInRealTimeComponent } from './shipping-operations-in-real-time/shipping-operations-in-real-time.component';
import { CouriersDetailsComponent } from './couriers-details/couriers-details.component';
import { NewShipmentComponent } from './new-shipment/new-shipment.component';
import { CustomerRemovalComponent } from './customer-removal/customer-removal.component';
import { shipmentsMenuComponent } from './shipments-menu/shipments-menu.component';
import { DayToDayDeliveriesComponent } from './day-to-day-deliveries/day-to-day-deliveries.component';
import { OurBranchesComponent } from './our-branches/our-branches.component';
import { EnlightenmentAndCommentsComponent } from './enlightenment-and-comments/enlightenment-and-comments.component';
import { OpeningTimesComponent } from './opening-times/opening-times.component';
import { LikesComponent } from './likes/likes.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ShipmentsCourierViewComponent } from './shipments-courier-view/shipments-courier-view.component';
import { UpdateDetailsCourierComponent } from './update-details-courier/update-details-courier.component';
import { ShippingSelectionComponent } from './shipping-selection/shipping-selection.component';
import { CommentsToCourierComponent } from './comments-to-courier/comments-to-courier.component';
import { GogelMapSearchComponent } from './gogel-map-search/gogel-map-search.component';
import { RouterMapComponent } from './router-map/router-map.component';


const routes: Routes = [
  {
    path: "",
    component: shipmentsMenuComponent
  },
  {
    path: "HomePage",
    component: shipmentsMenuComponent
  },
  {
    path: "ReturnToHomePage",
    component: shipmentsMenuComponent
  },
  {
    path: "OrderShipping",
    component: OrdershippingComponent
  },
  {
    path: "CustomerLogin",
    component: CustomerLoginComponent
  },
  {
    path: "CourierLogin",
    component: CourierLoginComponent
  },
  {
    path: "ManagerLogin",
    component: ManagerLoginComponent
  },
  {
    path: "ManagerView",
    component: ManagerViewComponent, children: [
      {
        path: "ShippingOperationsInRealTime",
        component: ShippingOperationsInRealTimeComponent
      },
      {
        path: "CouriersDetails",
        component: CouriersDetailsComponent
      },
      {
        path: "OrdersMade",
        component: OrdersMadeComponent
      },
      {
        path: "CommentsAndIlluminations",
        component: CommentsAndIlluminationsComponent
      },
    ]
  },
  {
    path: "About",
    component: AboutComponent
  },
  {
    path: "CompanyServices",
    component: CompanyServicesComponent
  },
  {
    path: "Branches",
    component: BranchesComponent
  },
  {
    path: "EmployeeRequired",
    component: EmployeerequiredComponent
  },
  {
    path: "ContactUs",
    component: ContactUsComponent
  },
  {
    path: "ShippingOperationsInRealTime",
    component: ShippingOperationsInRealTimeComponent
  },
  {
    path: "CouriersDetails",
    component: CouriersDetailsComponent
  },
  {
    path: "OrdersMade",
    component: OrdersMadeComponent
  },
  {
    path: "CommentsAndIlluminations",
    component: CommentsAndIlluminationsComponent
  },
  {
    path: "CustomerView",
    component: CustomerViewComponent, children: [
      {
        path: "NewShipment",
        component: NewShipmentComponent
        // , children: [
        //   {
        //     path: "GogelMapSearchComponent",
        //     component: GogelMapSearchComponent
        //   }
        // ]
      },
      {
        path: "UpdateDetails",
        component: UpdateDetailsComponent
      },
      {
        path: "HomePage",
        component: shipmentsMenuComponent, children: [
        ]
      },
      {
        path: "CustomerRemoval",
        component: CustomerRemovalComponent
      },
      {
        path: "MyShipments",
        component: MyShipmentsComponent
      }
    ]
  },
  {
    path: "CourierView",
    component: CourierViewComponent, children: [
      {
        path: "ShipmentsCourierView",
        component: ShipmentsCourierViewComponent
      },
      {
        path: "UpdateDetailsCourier",
        component: UpdateDetailsCourierComponent
      },
      {
        path: "commentsToCourier",
        component: CommentsToCourierComponent
      },
      {
        path: "ShippingSelection",
        component: ShippingSelectionComponent
      }
    ]
  },
  {
    path: "UpdateNewCustomer",
    component: UpdateNewCustomerComponent
  },
  {
    path: "ContactUs",
    component: ContactUsComponent
  },
  {
    path: "DayToDayDeliveries",
    component: DayToDayDeliveriesComponent
  },
  {
    path: "OurBranches",
    component: OurBranchesComponent
  },
  {
    path: "EnlightenmentAndComments",
    component: EnlightenmentAndCommentsComponent
  },
  {
    path: "OpeningTimes",
    component: OpeningTimesComponent
  },
  {
    path: "Likes",
    component: LikesComponent
  },
  {
    path: "SendMessage",
    component: SendMessageComponent
  },
  {
        path: "GogelMapSearchComponent",
        component: GogelMapSearchComponent
      },
      {
        path: "RouterMap",
        component: RouterMapComponent
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
