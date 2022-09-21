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
        private lastAccess: Date
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ){
            super( name, gender, birthDate);
            this.lastAccess = new Date;
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory:    string,
            public lastOpenFolder:      string,
            email:      string,
            role:       string,
            name:       string,
            gender:     Gender,
            birthDate:  Date

        ){
            super( email, role, name, gender, birthDate );
        }
    }

    const userSettings = new UserSettings(
        'usr/home',
        'home',
        'jesus.supercorreo@gmail.com',
        'admin',
        'Jesus',
        'M',
        new Date('1988-04-16')
    );

    console.log({userSettings})

})();