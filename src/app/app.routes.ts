import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './LOGIN/login-register/login-register.component';
import { OlvidasteContraseniaComponent } from './LOGIN/olvidaste-contrasenia/olvidaste-contrasenia.component';


export const routes: Routes = [
  {
    path:'', //Si la ruta esta vacia (esto seria el inicio)
    component: LoginRegisterComponent // Me muesta lo que hay en tarea page
  },
  //Esto un objeto con un atributo que se llama path
  {
    path:'olvidaste-contrasenia', //Si ingreso en la ruta
    component: OlvidasteContraseniaComponent // renderiza al componente padre(de la carpeta input)
  },
  {
    path: '**', //Si en el path hay cualquier cosa
    redirectTo:'' //Que me redireccione a tareaPage
  }

];
