( () => {

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthDate: Date; 
    }


    class Person {
        public name: string;
        public gender: Gender; 
        public birthDate: Date;

        constructor( {name, gender,  birthDate }: PersonProps ){
            this.name       = name;
            this.birthDate  = birthDate;
            this.gender     = gender;
        }
    }


    interface UserProps {
        name: string;
        gender: Gender; 
        birthDate: Date;
        email: string;
        role: string;
    }


    class User extends Person {
        private lastAccess: Date;
        public email: string;
        public role: string;
        public name: string;
        public gender: Gender;
        public birthDate: Date;
        constructor( { email, role, name, gender, birthDate }: UserProps ){
            super( { name, gender, birthDate });
            this.lastAccess = new Date;
            this.email = email;
            this.role = role;
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }

        checkCredentials(){
            return true;
        }
    }


    interface UserSettingsProps {
        name:       string;
        gender:     Gender; 
        birthDate:  Date;
        email:      string;
        role:       string;
        workingDirectory:   string;
        lastOpenFolder:     string;
    }


    class UserSettings extends User {

        public email:       string;
        public role:        string;
        public name:        string;
        public gender:      Gender;
        public birthDate:   Date;
        public workingDirectory:    string;
        public lastOpenFolder:      string;
        
        constructor( {workingDirectory, lastOpenFolder, email, role, name, gender, birthDate}: UserSettingsProps ){
            super({ email, role, name, gender, birthDate });
            this.email = email;
            this.role = role;
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({       
        workingDirectory: 'usr/home',
        lastOpenFolder: 'home',
        email: 'jesus.supercorreo@gmail.com',
        role: 'admin',
        name: 'Jesus',
        gender: 'M',
        birthDate: new Date('1988-04-16')}
    );

    console.log({userSettings})

})();