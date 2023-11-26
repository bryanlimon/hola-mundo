import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevocomponente',
  templateUrl: './nuevocomponente.component.html',
  styleUrl: './nuevocomponente.component.css'
})
export class NuevocomponenteComponent implements OnInit {

  nombre = 'Navis Code';

  constructor(){}
  ngOnInit(): void {}

  getProfesion(){
    return 'Front End';
  }

}
