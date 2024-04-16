import { Component } from '@angular/core';
import {Joke} from "../../model/joke.entity";
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NorrisApiService} from "../../services/norris-api.service";

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {
  jokes :Array<Joke>=[];
  displayedColumns: Array<string> = ['id', 'joke', 'category'];
  dataSource: any;
  constructor(private norrisApiService: NorrisApiService) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(){
    this.norrisApiService.getCategories().subscribe((categories: string[]) => {
      categories.forEach(category => {
        this.norrisApiService.getJokes(category).subscribe((joke: Joke) => {
          joke.category = category;
          this.jokes.push(joke);
          this.dataSource = new MatTableDataSource(this.jokes);
        });
      });
    });
  }
}
