import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-characters-forms',
  templateUrl: './characters-forms.component.html',
  styleUrls: ['./characters-forms.component.css']
})
export class CharactersFormsComponent implements OnInit {

  characterToCreateOrEdit = {};

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  createOne(name, occupation, weapon, debt){
      this.api.createNew(name, occupation, weapon, debt, '/characters');
  }

  editOne(name, occupation, weapon, debt, id){
      this.api.editOne(name, occupation, weapon, debt, '/characters/'+id);
  }

}
