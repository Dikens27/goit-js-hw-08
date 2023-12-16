
const form = document.querySelector('.login-form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    let fill = true;
    
    data.forEach((value) => {
        if (!value) {
            fill = false;
            return;
        }
    });

    if (fill === false) {
        alert('All form fields must be filled in');
    } else {
        const elements = form.elements;
        const obj = {};
        Array.prototype.forEach.call(elements, (element) => {
            if(element.name) {
                obj[element.name] = element.value.trim();
            };
        })
        console.log(obj);
        form.reset();
    }
});




