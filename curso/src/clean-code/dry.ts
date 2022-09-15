
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(    public name: string = '',
                    public price: number = 0,
                    public size: Size = ''){
    }

    toString(){
        // code if(this.name.length < 0) throw new Error('Name is empty.');
        // code if(this.price  <= 0) throw new Error('Price is wrong.');
        // code if(this.size.length <=  0) throw new Error('Size is empty.');

        // code return `${this.name} (${this.price}), ${this.size}`


        for( const key in this ){
            switch(typeof key){
                case 'string': 
                            if(key.length < 0) throw new Error('Name is empty.');
                            break;

                case 'number': 
                            if(key  <= 0) throw new Error('menor to cero, it is wrong.');
                            break;

                default: break;
            }
        }
    }
}

(() => {
    const bluePants = new Product('Blue pants');
    console.log(bluePants);
})();