import { Component } from '@angular/core';
import { RegisterInputComponent } from '../../Components/register-input/register-input.component';
import { Header2Component } from '../../Components/header-2/header-2.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-login',
  imports: [CommonModule,RegisterInputComponent, Header2Component],
  templateUrl: './pagina-login.component.html',
  styleUrl: './pagina-login.component.css'
})
export class PaginaLoginComponent {
tituloDinamico=`Faça Login `
chamadaDinamica=`Só mais um Passo e você será um Lutador`
}
