import { Component} from '@angular/core';
import { Persona } from '../../Modelos/persona'

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent{

  persona: Persona = new Persona("Diego", "Dueñez Villa", 18, "Hombre")

}
