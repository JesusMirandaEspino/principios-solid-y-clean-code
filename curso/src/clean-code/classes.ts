( () => {

    type Gender = 'M' | 'F';

    class Person {

        constructor(    
                public name: string, 
                public gender: Gender, 
                public birthDate: Date 
            ){

            this.name = name;
            this.birthDate = birthDate;
            this.gender = gender;
        }
    }

    const person1 = new Person( 'Jesus', 'M', new Date('1988-04-16') )

    console.log( { person1 } )

})();