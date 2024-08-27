// src/app/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() { }

  fetchData(): Promise<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';  // Sample URL
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch(e => {
        console.error("There was an error!", e);
      });
  }
}