document.addEventListener('DOMContentLoaded', () => {
    // select elements
    const form = document.getElementById('registrar'); // select form element
    const input = form.querySelector('input'); // select input element in form
    const divMain = document.querySelector('.main');
    const ul = document.getElementById('invitedList');

    const div = document.createElement('div');
    const filterLabel = document.createElement('label');
    filterLabel.textContent = "hide those who haven't responded"

    const filterCheckbox = document.createElement('input');
    filterCheckbox.type = 'checkbox';

    div.appendChild(filterLabel);
    div.appendChild(filterCheckbox);


    divMain.insertBefore(div, ul);

    filterCheckbox.addEventListener('change', (e) => {
        const isChecked = e.target.checked;

        const lis = ul.children;
        if(isChecked){
            for ( let i = 0; i < lis.length; i++){
                let li = lis[i];
                if(li.className === 'responded'){
                    li.style.display = '';
                }else{
                    li.style.display = 'none';
                }
            }
        }else{
            for ( let i = 0; i < lis.length; i++){
                let li = lis[i];
                li.style.display = '';
            }
        }
    })


    // function to create list item
    function createLi(text){
        // create element, set attributes, appened to element.
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);
        
        const label = document.createElement('label');
        label.textContent = 'Confirmed';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        label.appendChild(checkbox);
        li.appendChild(label);

            // remove button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        li.appendChild(editButton);
        
        // remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        li.appendChild(removeButton);

        return li;  // js functions return undefined by default... return statement is needed.
    }

    // submit name/text
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

    // remove/edit list item
    ul.addEventListener('click', (e) => {

        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;

        if (button.textContent === 'Remove'){
            ul.removeChild(li);
        }else if (button.textContent === 'Edit'){
            const span = li.firstElementChild;  // select span
            const input = document.createElement('input');  // create an input element
            input.type = 'text'; // set input type attribute to text
            input.value = span.textContent;  // set input value to the span textContent
            
            li.insertBefore(input, span);  //input first, then span
            li.removeChild(span);
            button.textContent = "Save";
        }else if (button.textContent === 'Save'){
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = "Edit";
        }
    });

}); // end DOMContentLoaded event
