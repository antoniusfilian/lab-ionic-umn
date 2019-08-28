import { RecipesService } from './recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})

export class RecipesPage implements OnInit {
  recipe: Recipe[];
  
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipe = this.recipesService.getAllRecipes();
  }

  detailRecipe(id){
    this.recipesService.getRecipe(id);
  }

  deleteRecipe(id){
    this.recipesService.deleteRecipe(id);
    this.ngOnInit();
  }

}
