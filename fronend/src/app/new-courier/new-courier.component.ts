import { Component, OnInit } from '@angular/core';
import { NewCourierService } from '../services/new-courier.service';
import { Couriers } from '../class/Couriers';

@Component({
  selector: 'app-new-courier',
  templateUrl: './new-courier.component.html',
  styleUrls: ['./new-courier.component.scss']
})
export class NewCourierComponent implements OnInit {

  newCourier: Couriers;

  constructor(public newCourierService: NewCourierService) { }

  ngOnInit(): void {
  }

  // AddNewCourier() {
  //   this.newCourierService.addNewCourier(this.newCourier).subscribe(res=>{
  //    if(res==null)
  //    {
  //      alert("Erorr")
  //    }
  //    else alert("המשלוחן הוסף לרשימה");
  //  })
  // }

}
