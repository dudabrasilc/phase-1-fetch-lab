function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then((response => response.json()))
  .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// const arrays = [['duda', 'vlad'], ['mae', 'pai']];

// function merge() {
//     for (let i = 0; i < arrays.length; i++) {
//     console.log(arrays.toString(", "))
//     }
//   }

// merge()


fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((data) => {
    const result = data.forEach(obj => {
          const arrays = Object.values(obj.characters);
          console.log(arrays)
          for (let i = 0; i < arrays.length; i++) {
              return arrays.toString(", ");
          }    
        }
      )
    }
  )       


// the 1031st character of the series is the 597th from the second object from the data array
// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then(data => {
//     data.find(obj => {
//       const arrays = Object.values(obj.characters)
//       console.log(arrays)
//     })
//   })


fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then(array => {
    // console.log(array)
      let result = 0;
      for (const obj of array) {
        // debugger;
        // console.log(obj.numberOfPages)
        result += obj.numberOfPages;
        // debugger;
        // return result;
      }
      console.log(result);
    })