
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SolesPipe } from '../../pipes/soles-pipe';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, RouterLink, SolesPipe],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  hoy: Date = new Date();
  productos = [
    {
      id: 1,
      titulo: 'Libro1',
      precio:34,
      fechaPubl: new Date(),
      descripcion: 'Primer libro de ejemplo para mostrar detalles.',
      autor: 'Gabriel García Márquez'
    },
    {
      id: 2,
      titulo: 'Titulo 2',
      precio:354,
      fechaPubl: new Date(),
      descripcion: 'Segundo libro de ejemplo para mostrar detalles.',
      autor: 'Mario Vargas Llosa'
    },
    {
      id: 3,
      titulo: 'Titulo 3',
      precio:4,
      fechaPubl: new Date(),
      descripcion: 'Tercer libro de ejemplo para mostrar detalles.',
      autor: 'Julio Cortázar'
    }
  
  ];
}
