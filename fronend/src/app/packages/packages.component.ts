import { Component, OnInit } from '@angular/core';
import { Packages } from '../class/Packages';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  packagesArr: Packages[] = [];
  constructor() {

  }

  ngOnInit(): void {
  }

}
