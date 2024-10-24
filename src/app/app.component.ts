import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginRegisterComponent } from "./LOGIN/login-register/login-register.component";
import { OlvidasteContraseniaComponent } from "./LOGIN/olvidaste-contrasenia/olvidaste-contrasenia.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginRegisterComponent,OlvidasteContraseniaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tpFinal';
}
