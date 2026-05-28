import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { DetalleProducto } from './pages/detalle-producto/detalle-producto';
import { Carrito } from './pages/carrito/carrito';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'catalogo', component: Catalogo },
  { path: 'catalogo/:id', component: DetalleProducto },
  { path: 'carrito', component: Carrito },
  {path: 'contacto',component:Contacto},
  { path: '**', redirectTo: '' }
];
