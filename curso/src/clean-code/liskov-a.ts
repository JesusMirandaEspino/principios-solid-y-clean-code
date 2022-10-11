import { Honda, Tesla, Audi, Toyota, Vehicle } from "./liskov-b";



(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        
        for (const car of cars) {
        
            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getNumberOfSeats() )
                continue;
            }         

        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats( cars );

})();