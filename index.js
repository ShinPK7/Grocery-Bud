const groceryInput = document.querySelector("#grocery");
console.log(groceryInput);

const submitBtn = document.querySelector(".submit-btn");
console.log(submitBtn);

const list = document.querySelector('.grocery-list');
console.log(list);

const alert = document.querySelector(".alert");
console.log(alert);

submitBtn.addEventListener('click', addItem);

function addItem(event) {
    event.preventDefault();
    const inputValue = groceryInput.value;
    console.log(inputValue);
//     const newGroceryList = `
//     <div class="grocery-list">
//     <article class="grocery-item">
//         <p class="title">${inputValue}</p>
//         <div class="btn-container">
//             <button type="button" class="edit-btn">
//                 <i class="fa-solid fa-pen-to-square"></i> 
//             </button>
//             <button type="button" class="delete-btn">
//                 <i class="fa-solid fa-trash"></i>
//                 </button>
//         </div> 
//     </article>        
// </div>
//     `;
//     list.insertAdjacentHTML('afterend', newGroceryList)
 const element =document.createElement('article');

let attribute = document.createAttribute('data-id');
const id = new Date().getTime().toString();
attribute.value = id;
element.setAttributeNode(attribute);

 element.classList.add("grocery-item");
 element.innerHTML =  `
 <p class="title">${inputValue}</p>
 <div class="btn-container">
     <button type="button" class="edit-btn">
         <i class="fa-regular fa-pen-to-square"></i>
     </button>
     <button type="button" class="delete-btn">
         <i class="fa-solid fa-trash"></i>
     </button>
 </div>
 `;
 const deleteBtn = element.querySelector(".delete-btn");
 deleteBtn.addEventListener("click", deleteItem);
 list.appendChild(element);

alert.textContent = "item added to the list";
alert.classList.add('alert-success');

setTimeout(function(){console.log("alert will disappear!");
alert.textContent = "";
},3000);
}


function deleteItem(event) {
 const element = event.currentTarget;
 console.log (element)
}