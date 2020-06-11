import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { formatDate } from "@angular/common";
import * as moment from 'moment';

@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.component.html',
  styleUrls: ['./add-cost.component.css']
})
export class AddCostComponent implements OnInit {
  locale: string = 'pt-BR';
  format: string = 'dd-mm-yyyy hh:ii:ss';
  
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      datehour: ['', Validators.required],
      value: ['', Validators.required],
      tags: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger
    let cost = this.addForm.value;
    //var d = Date.parse(cost.datehour);
    //2020-06-09T13:30:00.000+0100
    let dt = moment(cost.datehour);
    var hour = dt.hours();
    var minutes = dt.minutes();
    var seconds = dt.seconds();
    //.SSSZ
    cost.datehour = dt.format("YYYY-MM-DD")+"T"+hour+":"+minutes+":"+seconds+".000+0100";
    //console.log(formatDate(cost.datehour, this.format, this.locale));
    this.apiService.createCost(cost)
      .subscribe( data => {
        this.router.navigate(['list-cost']);
      });
  }

}
