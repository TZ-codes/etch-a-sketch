const container = document.querySelector('.container');



const grid = (num) => {
  for (i=0; i<num; i++) {
    const row = container.appendChild(document.createElement("div"));
    row.classList.add('row')
    console.log(row);
    for(j=0; j<num; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
        });
      row.appendChild(column);
      console.log(column);

    }
  }
}

grid(20);



// let boxes = document.querySelectorAll('.column');
// boxes.forEach(box => {
//   box.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor = 'black';
//   })
// })

