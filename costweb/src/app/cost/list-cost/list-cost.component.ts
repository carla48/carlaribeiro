import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cost } from "../../model/cost.model";
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-list-cost',
  templateUrl: './list-cost.component.html',
  styleUrls: ['./list-cost.component.css']
})
export class ListCostComponent implements OnInit {
  costs: Cost[];
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCosts()
      .subscribe( data => {
        this.costs = [];
        data.forEach(element => {
          element.datehour = new Date(element.datehour).toLocaleString();
          this.costs.push(element);
        });
      });
  }

  deleteCost(cost: Cost): void {
    this.apiService.deleteCost(cost.id)
      .subscribe( data => {
        this.costs = this.costs.filter(u => u !== cost);
      })
  };

  addCost(): void {
    this.router.navigate(['add-cost']);
  };

}
