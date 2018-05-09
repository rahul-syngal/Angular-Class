import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'Test test', 'http://wiesmann.codiferes.net/share/bitmaps/test_pattern.svg'), new Recipe('A Test recipe', 'Test test', 'http://wiesmann.codiferes.net/share/bitmaps/test_pattern.svg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
