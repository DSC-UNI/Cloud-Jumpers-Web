import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (!value || !arg) {
      return value; // Retornar el valor original si value o arg son falsy
    }

    const lowerCaseArg = arg.toLowerCase(); // Convertir el argumento a minúsculas

    const resultUser = value.filter((user: any) => {
      // Verificar que user.name existe y no es undefined
      const lowerCaseName = user.patient_dni && user.patient_dni.toLowerCase();
      return lowerCaseName && lowerCaseName.startsWith(lowerCaseArg);
    });

    console.log("Usuarios filtrados:", resultUser);
    return resultUser;
  }
}
