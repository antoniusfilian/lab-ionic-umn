import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
      {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu kecap', 'tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://cdn.idntimes.com/content-images/post/20190502/c22eb92d2d3738702fb0434e339cfbca-1-b9b0ec35aa17b97860c72fe047cd216d_600x400.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu kecap', 'tauge']
    },
    {
      id: 'r3',
      title: 'Pizza Margerita',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/vegan-pizza.jpg?itok=DZwI2Bfn',
      ingredients: ['Lontong', 'Sawi', 'Bumbu kecap', 'tauge']
    }
  ]

  constructor() { }

  getAllRecipes(){
    return [... this.recipes]
  }

  getRecipe(recipeId: string){
    var recipe = [... this.recipes]
    var obj = recipe.find(o => o.id === recipeId);

    console.log(obj);
  }

  deleteRecipe(recipeId: string){
    var result = this.recipes.filter(function (x) {
      return x.id !== recipeId;
    });

    this.recipes = result;
  }
}
