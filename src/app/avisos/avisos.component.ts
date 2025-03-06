import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-avisos',
  imports: [],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.css'
})
export class AvisosComponent implements OnInit{
  @Input()
   dynamicText: String=""

   constructor() {

   }

   ngOnInit(): void {
       
   }
}
