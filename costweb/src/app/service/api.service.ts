import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cost } from "../model/cost.model";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/cost/';

  getCosts() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getCostById(id: Number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createCost(cost: Cost): Observable<ApiResponse> {
    return this.http.post<any>(this.baseUrl, cost);
  }

  deleteCost(id: Number): Observable<ApiResponse> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}