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
        email: string;
        role: string;
    }


    class User  {
        private lastAccess: Date;
        public email: string;
        public role: string;
        constructor( { email, role }: UserProps ){
            this.lastAccess = new Date;
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }


    interface SettingsProps {
        workingDirectory:   string;
        lastOpenFolder:     string;
    }


    
    class Settings  {
        public workingDirectory:    string;
        public lastOpenFolder:      string;
        
        constructor( {workingDirectory, lastOpenFolder }: SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings{
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor(  {workingDirectory, lastOpenFolder, email, role, name, gender, birthDate}: UserSettingsProps ){
            this.person = new Person({ name, gender, birthDate});
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
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