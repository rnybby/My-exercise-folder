const ul = document.querySelector('ul')
const userTask = document.querySelector('#todo');
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newTask = document.createElement('li');
    const removeBtn = document.createElement('button');
    newTask.textContent = userTask.value;
    removeBtn.innerText = 'X';
    removeBtn.addEventListener('click',()=>{
    newTask.remove();
})
newTask.append(removeBtn);
ul.append(newTask);
localStorage.setItem('Task', newTask.innerText);
form.reset();
localStorage.getItem('task')
})

ul.addEventListener('click', (e) => {
if(e.target.tagName === 'BUTTON'){
    e.target.parentElement.remove();
}
else if(e.target.tagName === 'LI'){
  e.target.style.textDecoration = e.target.style.textDecoration === "line-through" ? "" : "line-through";
}
})



