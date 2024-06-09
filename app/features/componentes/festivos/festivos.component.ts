import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Festivos } from '../../../core/entidades/Festivos';
import { FestivosService } from '../../servicios/festivos.service';
import { MatDialog } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module (1)';

@Component({
  selector: 'app-festivos',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './festivos.component.html',
  styleUrls: ['./festivos.component.css']
})
export class FestivosComponent {

  public textoBusqueda: string = "";
  public resultado: string = "";
  public dias: Festivos[] = [];
  public columnas = [
    { name: "Nombre", prop: "nombre" },
    { name: "Dia", prop: "dia" },
    {name:"Mes", prop:"mes"}
  ];

  public modoColumna = ColumnMode;
  public tipoFestivo = SelectionType;

  constructor(private servicio: FestivosService, private servicioDialogo: MatDialog) {
    this.listar();
  }

  listar() {
    this.servicio.listar().subscribe({
      next: response => {
        this.dias = response;
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }

  buscar() {
    const date = new Date(this.textoBusqueda);
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const anio = date.getFullYear();
    
    this.servicio.validarFecha(dia, mes, anio).subscribe({
        next: (response: string) => {
            // Aquí puedes manejar la respuesta del servicio
            if (response === 'Festivo aprobado') {
                window.alert('Es festivo');
            } else if (response === 'No es festivo') {
                window.alert('No es festivo');
            } else {
                console.error('Respuesta desconocida del servicio:', response);
                window.alert('Respuesta desconocida del servicio');
            }
        },
        error: error => {
            console.error('Error al verificar la fecha', error);
            window.alert(`Error al verificar la fecha:`);

            // En lugar de mostrar un mensaje de error, puedes manejarlo de manera silenciosa
            // Si lo deseas, podrías mostrar un mensaje alternativo aquí.
        }
    });
}

  modificar() {
  }

  verificarEliminar() {
  }
}