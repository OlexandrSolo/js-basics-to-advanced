const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const elements = new FormData(evt.currentTarget);
    elements.forEach((value, name) => {
        if (value.trim() === '') {
            alert('All fields must be filled!');
            return;
        }
    });
    const fields = {
        [form.elements.email.name]: form.elements.email.value,
        [form.elements.password.name]: form.elements.password.value,
    }
    console.log(fields);
    evt.currentTarget.reset();
}

