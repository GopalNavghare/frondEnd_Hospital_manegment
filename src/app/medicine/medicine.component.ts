import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service'; 

import {  Router } from '@angular/router';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent {

  medicine: Medicine[] = []; 

  constructor(private medicineService: MedicineService,private router:Router) {}

  ngOnInit(): void {
    this.getMedicine(); 
  }

  getMedicine() {
    this.medicineService.getMedicineList().subscribe(data => { 
      this.medicine = data; 
    });
  }
  update(id:number)
  {
    this.router.navigate(['update-medicine',id])
  }
  delete(id:number)
  {
      this.medicineService.deleteMedicine(id).subscribe(data=>{

        console.log(data);
        this.getMedicine();
      })
  }
}
