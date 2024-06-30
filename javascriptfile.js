document.getElementById('myForm').addEventListener('submit', function (event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    if (!nameInput.value.trim() || !emailInput.value.trim()) {
        alert('fill in all fields.');
        event.preventDefault();
    }
});
