import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-input',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './register-input.component.html',
  styleUrl: './register-input.component.css'
})
export class RegisterInputComponent implements OnInit {

@Input()
tituloDinamico: String=''
@Input()
chamadaDinamica: String=''


  constructor(){

  }

  ngOnInit(): void {
      
  }


}
