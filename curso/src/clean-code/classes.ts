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

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthDate: Date
        ){
            super( name, gender, birthDate);
        }

        checkCredentials(){
            return true;
        }

        
    }

})();