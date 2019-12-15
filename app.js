const form = document.getElementById('registrar'); // select form element
const input = form.querySelector('input'); // select input element in form

const ul = document.getElementById('invitedList');

function createLi(text){
        // select element, create element, appened to element.
    const li = document.createElement('li');
    li.textContent = text;
    
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    label.appendChild(checkbox);
    li.appendChild(label);
    
    // remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    li.appendChild(removeButton);

    return li;  // js functions return undefined by default... return statement is needed.
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const text = input.value;   
    input.value = "";

    const li = createLi(text);

    // append li to ul
    ul.appendChild(li);


});


// handler for checkbox
ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked; //true or false

    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        const li = e.target.parentNode;
        const ul = li.parentNode;

        ul.removeChild(li);
    }
});