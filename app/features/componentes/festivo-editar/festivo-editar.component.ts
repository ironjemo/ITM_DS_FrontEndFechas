import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module (1)';
import { Festivos } from '../../../core/entidades/Festivos';

export interface DatosEdicionFestivos{

  encabezado:string;
  seleccion: Festivos;
}

@Component({
  selector: 'app-festivo-editar',
  standalone: true,
  imports: [
    ReferenciasMaterialModule
  ],
  templateUrl: './festivo-editar.component.html',
  styleUrl: './festivo-editar.component.css'
})

export class FestivoEditarComponent {

  constructor
    (public dialogRef: MatDialogRef<FestivoEditarComponent>, 
    @Inject(MAT_DIALOG_DATA) public datos: DatosEdicionFestivos
  ){

  }
  public cerrar() {
this.dialogRef.close();
  }
}
