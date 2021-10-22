import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';

import { Owner } from '../owner.model';

@Component({
  selector: 'app-owner-read',
  templateUrl: './owner-read.component.html',
  styleUrls: ['./owner-read.component.css']
})
export class OwnerReadComponent implements OnInit {

  owners: Owner[] = [];

  displayedColumns: string[] = ['id', 'name', 'email', 'acoes'];

  constructor(private service: OwnerService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      console.log(response);
      this.owners = response;
    })
  }

}
