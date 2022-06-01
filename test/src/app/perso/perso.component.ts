import { Component, OnInit } from '@angular/core';
import { Perso } from '../perso';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css']
})
export class PersoComponent {
  perso:Perso={
    id:1,
    name :'nathannn'
  };

}
