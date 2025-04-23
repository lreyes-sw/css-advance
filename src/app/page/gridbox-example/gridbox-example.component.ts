import { Component } from '@angular/core';

@Component({
  selector: 'app-gridbox-example',
  standalone: true,
  imports: [],
  templateUrl: './gridbox-example.component.html',
  styleUrl: './gridbox-example.component.scss',
})
export class GridboxExampleComponent {
  public createGroup() {
    const grupo = document.querySelector(
      '.input-group-name'
    ) as HTMLInputElement;
    alert('Grupo creado: ' + grupo.value);
  }
}
