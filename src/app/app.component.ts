// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],  // Include CommonModule to use *ngIf, *ngFor, etc.
    template: `
    <div *ngIf="data; else loading">
      <h2>Posts</h2>
      <ul>
        <li *ngFor="let post of data">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
    <ng-template #loading>Loading...</ng-template>
    <div *ngIf="error">Error in fetching data: {{ error }}</div>
  `,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    data: any;
    error: any;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.fetchData()
            .then(data => this.data = data)
            .catch(error => this.error = error);
    }
}