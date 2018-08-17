import Images from './images/ImportImages';

export function slug(string) {
    return string.toLowerCase().replace(/\s/g,'-');
}

export function loadImage(recipe) {
    if (Images[slug(recipe.name) + '.jpg']) {
      return slug(recipe.name) + '.jpg'
    } else {
      return 'defaultRecipe.jpg'
    }
}