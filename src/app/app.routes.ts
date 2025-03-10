import { Routes } from '@angular/router';
import { HomepageComponent } from '../Pages/homepage/homepage.component';
import { PaginaRegistroComponent } from '../Pages/pagina-registro/pagina-registro.component';
import { PaginaLoginComponent } from '../Pages/pagina-login/pagina-login.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'Home',
      pathMatch: 'full' 
    },
    {
      path: 'Home',
      component: HomepageComponent
    },
    {
      path: 'Reg',
      component: PaginaRegistroComponent
    }, 
    {

      path: 'Log',
      component: PaginaLoginComponent 

    }


  ];