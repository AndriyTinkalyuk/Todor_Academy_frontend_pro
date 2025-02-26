const filterInput = document.querySelector('.tasks_filter input');
const tasks = document.querySelectorAll('.task');

filterInput.addEventListener('input', () => { 
    const filterValue = filterInput.value.toLowerCase();
    tasks.forEach(task => {
        taskTitle = task.querySelector('p');
        task.style.display = taskTitle.textContent.toLowerCase().includes(filterValue) ?  'block' : 'none'; // or .startWith() але мені більш подобається .includes()
    })
})