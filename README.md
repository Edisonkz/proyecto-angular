# ProyectoAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

ANTES SE DEBE DE CREAR LOS COMPONENETES
ng g c pages/home
ng g c pages/catalogo
ng g c pages/carrito
ng g c pages/detalle-producto

```bash
# Ejercicio 1 — Router: navegación entre páginas

La librería académica se convierte en una SPA con Angular Router para navegar entre Inicio, Catálogo de productos y Carrito sin recargar la página.

---

## Enunciado 1: Definir rutas en Angular

**Archivo:** src/app/app.routes.ts

**Código:**
```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CatalogoComponent } from './pages/catalogo/catalogo';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto';
import { CarritoComponent } from './pages/carrito/carrito';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'catalogo', component: CatalogoComponent },
	{ path: 'catalogo/:id', component: DetalleProductoComponent },
	{ path: 'carrito', component: CarritoComponent },
	{ path: '**', redirectTo: '' }
];
```
**Explicación:**
Se definen las rutas principales de la aplicación, incluyendo la ruta comodín '**' al final.

---

## Enunciado 2: Configurar el router en el arranque

**Archivo:** src/main.ts o src/app/app.config.ts (según versión)

**Código:**
```typescript
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
// ...
bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(routes),
		// ...otros providers
	]
});
```
**Explicación:**
Se importa y configura el router en el bootstrap de la aplicación.

---

## Enunciado 3: Barra de navegación y RouterOutlet

**Archivos:**
- src/app/app.ts
- src/app/app.html

**Código:**
```html
<nav>
	<a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
	<a routerLink="/catalogo" routerLinkActive="active">Catálogo</a>
	<a routerLink="/carrito" routerLinkActive="active">Carrito</a>
</nav>
<router-outlet></router-outlet>
```
**Explicación:**
Se crea una barra de navegación con enlaces usando `routerLink` y se coloca el `<router-outlet>` para mostrar las páginas.

---

## Enunciado 4: HomeComponent con botón de navegación

**Archivos:**
- src/app/pages/home/home.html
- src/app/pages/home/home.ts

**Código:**
```html
<h1>Bienvenido a la Librería Académica</h1>
<button routerLink="/catalogo">Ver Catálogo</button>
```
**Explicación:**
Se muestra un título y un botón que navega a la página de catálogo usando `routerLink`.

---

## Enunciado 5: Catálogo con productos y enlaces a detalle

**Archivos:**
- src/app/pages/catalogo/catalogo.ts
- src/app/pages/catalogo/catalogo.html

**Código:**
```html
<div @for (producto of productos; track producto.id)>
  <div class="tarjeta">
    <h2>{{ producto.nombre }}</h2>
    <a @routerLink="['/catalogo', producto.id]">Ver detalle</a>
  </div>
</div>
```
**Explicación:**
Se recorre el array de productos y se agrega un enlace a la página de detalle usando `[routerLink]` con el id del producto.

---

## Enunciado 6: DetalleProductoComponent lee el parámetro id

**Archivos:**
- src/app/pages/detalle-producto/detalle-producto.ts
- src/app/pages/detalle-producto/detalle-producto.html

**Código:**
```typescript
import { ActivatedRoute } from '@angular/router';
// ...
const id = route.snapshot.paramMap.get('id');
```
```html
<p>Mostrando detalle del producto con id: {{ id }}</p>
```
**Explicación:**
Se obtiene el parámetro `id` de la ruta y se muestra en pantalla.

---

## Enunciado 7: CarritoComponent mensaje simple

**Archivo:** src/app/pages/carrito/carrito.html

**Código:**
```html
<p>El carrito está vacío por ahora.</p>
```
**Explicación:**
Se muestra un mensaje simple indicando que el carrito está vacío.

---

## Enunciado 8: routerLinkActive para resaltar página actual

**Archivos:**
- src/app/app.html
- src/app/app.css

**Código:**
```css
.active {
	font-weight: bold;
	color: #1976d2;
}
```
**Explicación:**
Se utiliza la clase `active` con `routerLinkActive` para resaltar el enlace de la página actual en la barra de navegación.

---

### Resultado esperado
La aplicación navega entre páginas sin recargar. La URL cambia (/catalogo, /carrito, /catalogo/2) y el enlace activo en la nav se resalta.

### Restricciones
- No usar href en los enlaces de navegación — solo routerLink.
- La ruta '**' (catch-all) debe ser la última en el array.
- DetalleProductoComponent debe leer el id con route.snapshot.paramMap.get('id').
