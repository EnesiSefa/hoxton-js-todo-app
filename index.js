//  <main class="container">
//       <section class="options-section">
//         <h2 class="title">OPTIONS</h2>
//         <label class="show-completed-checkbox">
//           Show completed
//           <input class="checkbox" type="checkbox" checked />
//         </label>
//       </section>
//       <section class="add-item-section">
//         <h2 class="title">ADD ITEM</h2>
//         <form class="add-item">
//           <input
//             class="text-input"
//             type="text"
//             name="text"
//             required
//             minlength="3"
//           />
//           <button class="button-add" type="submit">Add</button>
//         </form>
//       </section>
//       <section class="todo-section">
//         <h2 class="todo-title">TODO</h2>
//         <ul class="todo-lists">
//           <li class="todo-item">
//             <div class="todo-checkbox-div">
//               <input class="completed-checkbox" type="checkbox" />
//             </div>
//             <div class="text-section">
//               <p class="text">Go shopping</p>
//             </div>
//             <div class="button-section">
//               <button class="delete">Delete</button>
//             </div>
//           </li>
//           <li class="todo-item">
//             <div class="todo-checkbox-div">
//               <input class="completed-checkbox" type="checkbox" />
//             </div>
//             <div class="text-section">
//               <p class="text">Work out</p>
//             </div>
//             <div class="button-section">
//               <button class="delete">Delete</button>
//             </div>
//           </li>
//           <li class="todo-item">
//             <div class="todo-checkbox-div">
//               <input class="completed-checkbox" type="checkbox" />
//             </div>
//             <div class="text-section">
//               <p class="text">Watch movies</p>
//             </div>
//             <div class="button-section">
//               <button class="delete">Delete</button>
//             </div>
//           </li>
//         </ul>
//       </section>
//       <section class="completed-section">
//         <h2 class="completed-title">COMPLETED</h2>
//         <ul class="completed-lists">
//           <li class="completed-item">
//             <div class="completed-checkbox-div">
//               <input class="completed-checkbox" type="checkbox" />
//             </div>
//             <div class="text-section">
//               <p class="text">See the doctor</p>
//             </div>
//             <div class="button-section">
//               <button class="delete">Delete</button>
//             </div>
//           </li>
//         </ul>
//       </section>
//     </main>

function render() {
  document.body.textContent = "";
  let containerEl = document.createElement("main");
  containerEl.className = "container";
  document.body.append(containerEl);

  renderOption();
  renderAddItem();
  renderToDo();
  renderCompleted()
}
render();

//       <section class="option-section">
//         <h2 class="title">OPTIONS</h2>
//         <label class="show-completed-checkbox">
//           Show completed
//           <input class="checkbox" type="checkbox" checked />
//         </label>
//       </section>

function renderOption(text) {
  let optionSectionEl = document.createElement("section");
  optionSectionEl.className = "option-section";

  let h2optionEl = document.createElement("h2");
  h2optionEl.className = "title";
  h2optionEl.textContent = "OPTIONS";

 
  let labelOtptionEl = document.createElement("label");
  labelOtptionEl.setAttribute("class", "show-completed-checkbox");
  labelOtptionEl.innerText = "Show completed";
  let inputOptionEl = document.createElement("input");
  inputOptionEl.className = "checkbox";
  inputOptionEl.type = "checkbox";
  if (state.showCompleted) inputOptionEl.checked = true
  inputOptionEl.addEventListener('click', function () {
    toggleShowCompleted()
    render()
  })
  optionSectionEl.append(h2optionEl, labelOtptionEl)
  labelOtptionEl.append(inputOptionEl);


  
  

  let containerEl = document.querySelector("main");
  containerEl?.append(optionSectionEl);
}

function toggleShowCompleted() {
    state.showCompleted = !state.showCompleted
  }


//       <section class="add-item-section">
//         <h2 class="title">ADD ITEM</h2>
//         <form class="add-item">
//           <input
//             class="text-input"
//             type="text"
//             name="text"
//             required
//             minlength="3"
//           />
//           <button class="button-add" type="submit">Add</button>
//         </form>
//       </section>

function renderAddItem(text) {
  let addItemEl = document.createElement("section");
  addItemEl.className = "add-item-section";

  let h2AdditemEl = document.createElement("h2");
  h2AdditemEl.className = "title";
  h2AdditemEl.textContent = "ADD ITEM";

  let formAddItemEl = document.createElement("form");
  formAddItemEl.className = "add-item";
  formAddItemEl.addEventListener("submit", function (event) {
    event.preventDefault();
    let todo = {
      text: inputAddItemEl.value,
      completed: false,
    };
    state.todos.push(todo);
    render();
  });

  let inputAddItemEl = document.createElement("input");
  inputAddItemEl.className = "text-input";
  inputAddItemEl.type = "text";
  inputAddItemEl.name = "text";
  inputAddItemEl.required;
  inputAddItemEl.minLength = 3;

  let buttonAddItemEl = document.createElement("button");
  buttonAddItemEl.className = "button-add";
  buttonAddItemEl.type = "submit";
  buttonAddItemEl.textContent = "Add";

  addItemEl.append(h2AdditemEl, formAddItemEl);
  formAddItemEl.append(inputAddItemEl, buttonAddItemEl);

  let containerEl = document.querySelector("main");
  containerEl?.append(addItemEl);
}

//       <section class="todo-section">
//         <h2 class="todo-title">TODO</h2>
//         <ul class="todo-lists">
//           <li class="todo-item">
//             <div class="todo-checkbox-div">
//               <input class="completed-checkbox" type="checkbox" />
//             </div>
//             <div class="text-section">
//               <p class="text">Go shopping</p>
//             </div>
//             <div class="button-div">
//               <button class="delete">Delete</button>
//             </div>
//           </li>
//         </ul>
//       </section>

function renderToDo(text) {
  let todoSectionEl = document.createElement("section");
  todoSectionEl.className = "todo-section";

  let h2ToDoEl = document.createElement("h2");
  h2ToDoEl.className = "todo-title";
  h2ToDoEl.textContent = "TODO";

  let ulToDoEl = document.createElement("ul");
  ulToDoEl.className = "todo-lists";

  for (let todo of state.todos) {
    let liToDoEl = document.createElement("li");
    liToDoEl.className = "todo-item";

    let divToDoEl = document.createElement("div");
    divToDoEl.className = "todo-checkbox-div";
    let inputToDoEl = document.createElement("input");
    inputToDoEl.className = "completed-checkbox";
    inputToDoEl.type = "checkbox";

    let divToDoTextEl = document.createElement("div");
    divToDoTextEl.className = "text-section";

    let pToDoEl = document.createElement("p");
    pToDoEl.className = "text";
    pToDoEl.textContent = todo.text;

    let divButtonToDoEl = document.createElement("div");
    divButtonToDoEl.className = "button-div";

    let buttonToDoEl = document.createElement("button");
    buttonToDoEl.className = "delete";
    buttonToDoEl.textContent = "Delete";

    ulToDoEl.append(liToDoEl);
    liToDoEl.append(divToDoEl, divToDoTextEl, divButtonToDoEl);
    divToDoEl.append(inputToDoEl);
    divToDoTextEl.append(pToDoEl);
    divButtonToDoEl.append(buttonToDoEl);
  }

  todoSectionEl.append(h2ToDoEl, ulToDoEl);

  let containerEl = document.querySelector("main");
  containerEl?.append(todoSectionEl);
  // renderAddItem(text)
}

//  <section class="completed-section">
//         <h2 class="completed-title">COMPLETED</h2>
//         <ul class="completed-lists">
//           <li class="completed-item">
//             <div class="completed-checkbox-div">
//               <input class="completed-checkbox" type="checkbox" />
//             </div>
//             <div class="text-section">
//               <p class="text">See the doctor</p>
//             </div>
//             <div class="button-section">
//               <button class="delete">Delete</button>
//             </div>
//           </li>
//         </ul>
//       </section>

function renderCompleted(text) {

   for(let todo of state.todos) {let completedSectionEl = document.createElement("section");
    completedSectionEl.className = "completed-section";

    let h2El = document.createElement("h2");
    h2El.className = "completed-title";
    h2El.textContent = "Completed"

    let ulEl = document.createElement("ul");
    ulEl.className = "completed-lists";

    let liEl = document.createElement("li");
    liEl.className = "completed-item";

    let divEl = document.createElement("div");
    divEl.className = "completed-checkbox-div";

    let inputEl = document.createElement("input")
    inputEl.className = "class=completed-checkbox"
    inputEl.type ="checkbox"


    let divEl2 = document.createElement("div")
    divEl2.className = "text-section"

    let pEl = document.createElement("p")
    pEl.className = "text"
    pEl.textContent ="see the doctor"

   let divbtnEl = document.createElement("div")
   divbtnEl.className ="button-section"

   let btnEl = document.createElement("button")
   btnEl.className = "delete" 
   btnEl.textContent = "Delete"
   btnEl.addEventListener("click",  function () {
    deleteTodo(todo.text)
    render()
  })
   
   
    


   completedSectionEl.append(h2El,ulEl)
   ulEl.append(liEl)
   liEl.append(divEl,divEl2,divbtnEl)

   let containerEl = document.querySelector("main");
  containerEl?.append(completedSectionEl);
}

 
  
}


function deleteTodo(text) {
  let updatedTodos = state.todos.filter(todo => todo.text !== text)
  state.todos = updatedTodos
  let btnEl = document.querySelector("button")

}