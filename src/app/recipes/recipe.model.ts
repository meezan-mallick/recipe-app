export class Recipe
{
    public name:string;
    public short_description:string;
    public description:string;
    public imgPath:string;
    constructor(name:string,short_desc:string, desc:string, imgPath:string) 
    {
        this.name=name;
        this.short_description=short_desc;
        this.description=desc;
        this.imgPath=imgPath;
     }
}