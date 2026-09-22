// const handleChange = () => {
//     let h1 = document.getElementById('text');
//     h1.textContent = 'changed'
//     console.log(h1.textContent)
// }
let i = 1;
const addElem = (e) => {
  let output_div = document.getElementById("output");
  let box = document.createElement("div");
  box.textContent = `box ${i}`;
  // box.classList.add('bg-yellow-600')
  // box.classList.add('border')
  // box.classList.add('rounded')
  // box.classList.add('w-50.h-50')
  // box.classList.add('h-50')
  // box.classList.add('mt-3')
  // box.classList.add('flex.flex-col.justify-center.items-center')
  let all_classes =
    "bg-yellow-600.border.rounded.w-50.h-50.mt-3.flex.flex-col.justify-center.items-center".split(
      ".",
    );

  all_classes.map((elem) => {
    box.classList.add(elem);
  });

  output_div.appendChild(box);
  i++;
};
