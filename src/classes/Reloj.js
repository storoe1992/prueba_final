

export default class Reloj{
    constructor(id,name,stock,price){
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
    }

    update(reloj){
        this.name = reloj.name;
        this.price = reloj.price;
        this.stock = reloj.stock;
    }
}