
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(    public name: string = '',
                    public price: number = 0,
                    public size: Size = ''){
    }

    toString(){
        if(this.name.length < 0) throw new Error('Name is empty.');
        if(this.price  <= 0) throw new Error('Price is wrong.');
        if(this.size.length <=  0) throw new Error('Size is empty.');

        return `${this.name} (${this.price}), ${this.size}`
    }
}

(() => {
    const bluePants = new Product('Blue pants');
    console.log(bluePants);
})();