import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Owner } from './owner.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Owner[]> {
    const url = `${this.baseUrl}owners`
    return this.http.get<Owner[]>(url);
  }
}
