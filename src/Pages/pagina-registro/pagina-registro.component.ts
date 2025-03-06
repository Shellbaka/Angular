import { Component } from '@angular/core';
import { RegisterInputComponent } from '../../Components/register-input/register-input.component';
import { Header2Component } from '../../Components/header-2/header-2.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pagina-registro',
  imports: [CommonModule,RegisterInputComponent, Header2Component],
  templateUrl: './pagina-registro.component.html',
  styleUrl: './pagina-registro.component.css'
})
export class PaginaRegistroComponent {
tituloDinamico=`Registre-se`
chamadaDinamica=`Registre-se e faça parte de nosso exercito`
}
