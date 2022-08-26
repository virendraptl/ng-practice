import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTest'
})
export class CustomTestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

// -------------------------
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent1: any, exponent2: any): number {
    let exp = parseFloat(exponent2);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}

// https://stackblitz.com/edit/angular-custom-pipes?file=app%2Fapp.component.html