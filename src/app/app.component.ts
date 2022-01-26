import { Component } from '@angular/core';
import { Animal } from './models/animal';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals: Animal[] = [];
  title = 'Animals Adption';
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAnimals()
  }

  getAnimals(fromClick = false) {
    if (fromClick) {
      window.location.reload();
    }
    this.apiService.getAnimals().subscribe((result: any) => {
      this.animals = result.items
    });
  }
}
