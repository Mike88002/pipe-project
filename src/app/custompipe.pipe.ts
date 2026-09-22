import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
  standalone: true
})
export class CustompipePipe implements PipeTransform {

  transform(
    value: string | number | null,
    inputType?: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ) {
    if (!value) {
      return value;
    }
    let val: number;
    let outputTemp: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }


    if (inputType === 'cel' && outputType === 'fah'){
      outputTemp = val * (9/5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let symbol: '°C' | '°F';
    if (!outputType) {
      symbol = inputType === 'cel' ? '°C': '°F';
    } else {
      symbol = outputType === 'fah' ? '°F' : '°C';
    }
    return `${outputTemp.toFixed(2)} ${symbol}`;
  }

}
