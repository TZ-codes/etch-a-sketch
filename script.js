const container = document.querySelector('.container');

const grid = (num) => {
  for (i=0; i<num; i++) {
    const row = container.appendChild(document.createElement("div"));
    for(j=0; j<num; j++) {
      const column = document.createElement("div");
      column.classList.add("grid");
      row.appendChild(column);
    }
  }
}

grid(2);