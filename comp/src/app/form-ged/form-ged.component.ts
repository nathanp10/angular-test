import { Component, OnInit } from '@angular/core';


interface comete {
  value: string;
  viewValue: string;
}
interface input {
  value: string;
  preinscrit: string
}
interface select {
  value: string;
}

@Component({
  selector: 'app-form-ged',
  templateUrl: './form-ged.component.html',
  styleUrls: ['./form-ged.component.css']
})
export class FormGedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cometes: comete[] = [
    {value: '⚫️-0', viewValue: '⚫️'},
    {value: '🟡-1', viewValue: '🟡'},
    {value: '🟢-2', viewValue: '🟢'},
    {value: '🟠-3', viewValue: '🟠'}
  ];

  inputs: input[] = [
    {value: 'Code activité', preinscrit: 'Ex. XX1J'},
    {value: 'Nom AddOn',preinscrit: 'Ex. 4CAD Master'},
    {value: 'Version Commerciale',preinscrit: 'Ex. V4.2'},
    {value: 'Remarque AddOn',preinscrit: 'Ex. remarque'},
    {value: 'Brique AERO',preinscrit: 'Ex. Option'},
    {value: 'Brique MRO',preinscrit: 'Ex. Inclus'}
  ];

  selects: select[] = [
    {value: 'V6'},
    {value: 'V7'},
    {value: 'PU9'},
    {value: 'v11Inferieure A v11.18'},
    {value: 'v11.18'},
    {value: 'v11.20'},
    {value: 'v12Inferieure A v12.28'},
    {value: 'v12.28'},
    {value: 'v12.29'}
  ];

}
