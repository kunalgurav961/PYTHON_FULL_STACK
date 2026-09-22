// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log("Hello i am constructor!");
//   }
//   greet() {
//     console.log("Hello, Good morning!");
//   }
// }

// class Aman extends Human {
//   constructor(name, age, address) {
//     // this.name = name;
//       // this.age = age;
//     super(name, age)
//     this.address = address;
//   }
//   eat() {
//     console.log("I am eating....");
//   }
//   work() {
//     console.log("I am doing my work!...");
//   }
// }

// let sagar = new Human("Sagar", 39);
// let aman = new Aman("Aman", 45, {
//     state: 'MH',
//     city: 'Pune',
//     pincode: 12345
// });
// // sagar.greet();
// console.log(aman.name);
// console.log(aman.age);
// console.log(aman.address);
// aman.greet()




// class Hello{
//     static demo() {
//         console.log("Hello!")
//     }
// }



// Hello.demo()


class Person{
    #school = "xyz school"
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    get fullname() {
        return this.fname + " " + this.lname;
    }
    set fullname(value) {
        const parts = value.split(" ")
        this.fname = parts[0];
        this.lname = parts[1];
    }
    get School() {
        return this.#school;
    }
}

let kunal = new Person("Kunal", "Gurav")
// console.log(kunal.fname)
// console.log(kunal.lname)
// console.log(kunal.fname + " " + kunal.lname);
// console.log(kunal.fullname)
// kunal.fullname = "Kunal Shaha"
// console.log(kunal.fullname)

console.log(kunal.School)



