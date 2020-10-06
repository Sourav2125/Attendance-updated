import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import {ApiService} from '../apiservice/api.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  isLoggedIn = false;
  model: NgbDateStruct;
  config: any;
  collection = { count: 60, data: [] };
   showData:any=[];
  constructor(private apiservice: ApiService) {

    //Create dummy data
   /* for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }
*/
    
  }

  pageChanged(event){
    this.config.currentPage = event;
  }


  ngOnInit(): void {
     
     if(localStorage.getItem('user') == null)
         this.isLoggedIn=false
       else
          this.isLoggedIn=true 
  



     this.apiservice.getData().subscribe(res=>{
        //  console.log('Data From APi: ',res)
          this.showData = res['todos'];
     },(error)=>{
         console.log("Error : ",error)
     }
     )

     for (var i = 0; i < this.showData.length; i++) {
      this.showData.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }

     this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.showData.length
    }; 
  }


 // p: number = 1;
  totalregistered;
  present;
  absent;
  average;

  startDate : Date;
  endDate : Date;
  selectedstatus;


  signout(){
     this.apiservice.signOut();
  }
  

  changeDate(){
      
  }

  openStartDatePicker(){

  }

  openEndDatePicker(){

  }

  GetSelectedStatus(){

  }

  search(){

  }

  getTotal(){

  }

  getPresent(){

  }

  getAbsent(){

  }
  
  getAverage(){

  }

}
