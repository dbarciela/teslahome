import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true,
})
@Injectable({
  providedIn: 'root',
})
export class OrderBy implements PipeTransform {
  constructor() {}

  public transform(value: Array<any>, field: string): Array<any> {
    return value.sort((a, b) => this.compare(a[field],b[field]));
  }
  
  compare(a:string, b:string): number{
    return a.localeCompare(b);
  }

}