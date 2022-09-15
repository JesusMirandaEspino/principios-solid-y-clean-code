
type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(    public name: string = '',
                    public price: number = 0,
                    public size: Size = ''){
    }


    isProductReady(){
        for( const key in this ){
            switch(typeof key){
                case 'string': 
                            if( ( <string><unknown>this[key]).length < 0) throw new Error('Name is empty.');
                            break;

                case 'number': 
                            if( ( <number><unknown>this[key])  <= 0) throw new Error('menor to cero, it is wrong.');
                            break;

                default: throw  Error('Type is not su supported');
            }
        }

        return true;
    }


    toString(){
        if( !this.isProductReady ){
            return;
        }

        return `${this.name} (${this.price}), ${this.size}`



    }
}

(() => {
    const bluePants = new Product('Blue pants');
    console.log(bluePants);
})();