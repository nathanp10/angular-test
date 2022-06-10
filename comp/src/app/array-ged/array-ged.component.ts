import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-ged',
  templateUrl: './array-ged.component.html',
  styleUrls: ['./array-ged.component.css']
})
export class ArrayGedComponent {

  public ItemsTableauGed : Versions[] =[
    {
      number: 29,
      Date: new Date,
      codeActivite: 'XX1J3',
      nomAddOn: "4CAD ELO DEMAT",
      versions: [{
      remarque: "",
      BriqueAERO: "",
      BriqueMRO: "",
      softwareVersion: "R1",
      compatibleVersions: [{ label: "V6", value: "⚫️" },
      { label: "V7", value: "🟠" },
      { label: "pu9", value: "🟠" },
      { label: "v11Inferieure A v11.18", value: "🟠" },
      { label: "v11.18", value: "🟡" },
      { label: "v11.20", value: "🟡" },
      { label: "v12Inferieure A v12.28", value: "🟠" },
      { label: "v12.28", value: "🟡" },
      { label: "v12.29", value: "🟢" }]
      }]
      
      },
      
              
  ]
}

interface Versions {
  number: number,
  Date: Date,
  codeActivite: string,
  nomAddOn: string,
  versions: {
      remarque: string,
      BriqueAERO: string,
      BriqueMRO: string,
      softwareVersion: string,
      compatibleVersions:
      {
          label: string,
          value: string
      }[]
  }[]
}