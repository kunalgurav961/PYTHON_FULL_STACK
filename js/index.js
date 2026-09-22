// function myfunc (){
//     console.log("Helllooowo")
// }

// myfunc()


// function one() {
//     console.log("one done");
//     two();
// }
// function two() {
//     console.log("two done");
//     three();
// }
// function three() {
//   console.log("three done");
// }
// one();

// function loop(n) {
//     console.log("heyy ", n)
//     loop(n-1)
// }
// loop(0)


// var a = 5;
// var a = 10;
// console.log(a)

function outer() {
    function inner() {
        let name = "Sara";
    }
    console.log(name); // inner can "see" outer's variables — because of where it's written
  inner();
}
outer(); // "Sara"