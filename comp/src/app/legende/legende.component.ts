import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legende',
  templateUrl: './legende.component.html',
  styleUrls: ['./legende.component.css']
})
export class LegendeComponent {

  public ItemsLegende : any[]= [
    {
      number:1,
      icone:'⚫️',
      description:'Version non supportée : Pas de livrables possibles.'
    },
    {
      number:2,
      icone:'🟡',
      description:'Version maintenue : Correctifs possibles pour anomalies. Livrables possibles.'
    },{
      number:3,
      icone:'🟢',
      description:'Version maintenue et évolutive : Correctifs possibles pour anomalies. Version sur laquelle les évolutions sont réalisées. Livrables possibles.'
    },{
      number:4,
      icone:'🟠',
      description:"Version non maintenue par PP : en cas d'anomalies une montée de patch sur une version maintenue sera nécessaire.Toute demande patch doit être chiffrée par PP (installation désynchronisée donc pas de Superpatch possible.)"
    }
  ]

}
