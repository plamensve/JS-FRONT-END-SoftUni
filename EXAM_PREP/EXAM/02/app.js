window.addEventListener("load", solve);

function solve() {
    let addBtn = document.getElementById('add_btn')
    addBtn.addEventListener('click', onAdd)

    function onAdd(event){
        event.preventDefault();

        let firstName = document.getElementById('first_name').value;
        let lastName = document.getElementById('last_name').value;
        let phone = document.getElementById('phone').value;

        if (!firstName || !lastName || !phone){
            return;
        }

        let mainUl = document.getElementById('pending_contact_list')
        let li = document.createElement('li')
        li.className = 'contact'
        mainUl.appendChild(li)

        let spanNames = document.createElement('span');
        spanNames.className = 'names'
        spanNames.textContent = `${firstName} ${lastName}`
        li.appendChild(spanNames)

        let spanPhone = document.createElement('span');
        spanPhone.className = 'phone_number'
        spanPhone.textContent = phone
        li.appendChild(spanPhone)

        let editBtn = document.createElement('button');
        editBtn.className = 'edit_btn'
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click', () => onEdit(firstName, lastName, phone, li))
        li.appendChild(editBtn)

        let verifyBtn = document.createElement('button');
        verifyBtn.className = 'verify_btn'
        verifyBtn.textContent = 'Verify'
        verifyBtn.addEventListener('click', () => onVerify(li, firstName, lastName, phone))
        li.appendChild(verifyBtn)

        document.getElementById('first_name').value = '';
        document.getElementById('last_name').value = '';
        document.getElementById('phone').value = '';

    }

    function onEdit(firstName, lastName, phone, li){
        document.getElementById('first_name').value = firstName;
        document.getElementById('last_name').value = lastName;
        document.getElementById('phone').value = phone;

        li.remove();
    }

    function onVerify(li, firstName, lastName, phone){
        li.remove()

        let contactList = document.getElementById('contact_list')
        let contactLi = document.createElement('li')
        contactLi.className = 'verified_contact'
        contactList.appendChild(contactLi)

        let contactNames = document.createElement('span');
        contactNames.className = 'names';
        contactNames.textContent = `${firstName} ${lastName}`
        contactLi.appendChild(contactNames)

        let contactPhone = document.createElement('span')
        contactPhone.className = 'phone_number';
        contactPhone.textContent = phone;
        contactLi.appendChild(contactPhone)

        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete_btn'
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', () => onDelete(contactLi))
        contactLi.appendChild(deleteBtn)
    }

    function onDelete(contactLi){
        contactLi.remove()
    }
}
