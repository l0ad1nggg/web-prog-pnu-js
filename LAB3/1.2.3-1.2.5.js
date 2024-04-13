// Creating object car1 using the Object constructor
const car1 = new Object();

// Properties of the object car1
car1.color = "Green";
car1.maxSpeed = 300;
car1.driver = {
    name: "Vlad Gerula", 
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true; 
car1.numberOfAccidents = 0; 

car1.drive = () => {
    console.log("I am not driving at night");
};


// Demonstration of the object car1 in the console
console.log("Task 1.2.3");
console.log("car1:", car1);
car1.drive();
console.log("----------------------------------");
