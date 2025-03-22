import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeStateTask'
})
export class PipeStateTaskPipe implements PipeTransform {

  transform(estado: number): string {
    switch (estado) {
      case 0:
        return 'Pendiente';
      case 1:
        return 'Completada';
      default:
        return 'Estado Desconocido';
    }
  }

}
