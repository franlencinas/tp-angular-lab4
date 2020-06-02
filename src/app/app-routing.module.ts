import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { DondeEstamosComponent } from "./components/donde-estamos/donde-estamos.component";
import { DetalleProductoComponent } from "./components/detalle-producto/detalle-producto.component";
//import { NavbarComponent } from "./components/shared/navbar/navbar.component";


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'donde-estamos', component:DondeEstamosComponent},
  {path: 'detalle-producto/:id', component:DetalleProductoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
