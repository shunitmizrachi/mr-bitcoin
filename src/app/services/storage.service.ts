import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public store(key: string, any: any): void {
    localStorage[key] = JSON.stringify(any);
  }

  public load(key: string): any {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
  }


  constructor() { }
}
