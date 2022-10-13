interface Bird{
    eat(): void;
    run(): void;
}

interface FlyBird{
    fly(): void;
}

interface SwinBird{
    swin(): void;
}



class Tucan implements Bird, FlyBird{
    public fly(){}
    public eat(){}
    public run(){}
}

class Carpintero implements Bird, FlyBird{
    public fly(){}
    public eat(){}
    public run(){}
}

class Pinguino implements Bird, SwinBird{
    public eat(){}
    public run(){}
    public swin(){}
}