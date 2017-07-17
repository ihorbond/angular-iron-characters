import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: any;
  singleCharacter: any;

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  showAll () {

   this.api.getList("/characters")
   .then(res => {
     this.characters = res;
   })
  }

  fetchOne (id) {
     this.characters = this.api.getList("/characters/" + id.toString()).then(res => {
       this.singleCharacter = res;
     })
  }

  deleteOne (id) {
this.api.deleteOne("/characters/" + id.toString());

console.log(this.api.getList("/characters/" + id.toString()));

  }

}
