import { ingredients } from "../shared/ingredients.model";

export class Recipe
{
    public name:string;
    public short_description:string;
    public description:string;
    public imgPath:string;
    public ingredientsArray:ingredients[];

    constructor(name:string,short_desc:string, desc:string, imgPath:string,ingredients:ingredients[]) 
    {
        this.name=name;
        this.short_description=short_desc;
        this.description=desc;
        this.imgPath=imgPath;
        this.ingredientsArray=ingredients;
     }
}