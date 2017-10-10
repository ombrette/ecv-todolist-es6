const ul = document.getElementById('todolist');
const url = 'https://api.myjson.com/bins/9l2ez';
// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let todolist = data.todos;
//   console.log(todolist);
//   return todolist.map(function(todo_item) {
//     let li = document.createElement('li');
//     li.innerHTML = `${todo_item.label}`;
//     ul.appendChild(li);
//   })
// })
// .catch(function(error) {
//   console.log(error);
// });

(async() => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    let todolist = data.todos;
    console.log(todolist);
    return todolist.map(function(todo_item) {
      let li = document.createElement('li');
      li.innerHTML = `${todo_item.label}`;
      if(todo_item.complete){
        li.className += " complete";
        li.setAttribute('data-complete', true);
      }
      ul.appendChild(li);
    })
  } catch (e) {
    console.log(e);
  }
})();

ul.addEventListener("click",function(event){
    if(event.target.nodeName !=='LI') {
        return;
    }
    console.log(event.target.id);
    event.target.classList.toggle('complete');
});
