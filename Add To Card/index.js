// Add your JavaScript here.
const sizeOptions = document.querySelectorAll('.size-option');

sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
        sizeOptions.forEach(opt => opt.classList.remove('selected')); // Verwijder 'selected' van alle opties
        option.classList.add('selected'); // Voeg 'selected' toe aan de geklikte optie
    });
});
const addToBagButton = document.querySelector('.add-to-bag');
const showNotification = () => {
    const notification = document.createElement('div');
    notification.textContent = 'Item is toegevoegd aan je winkelwagentje!';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#007bff';
    notification.style.color = '#ffffff';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    document.body.appendChild(notification);

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
};

addToBagButton.addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-option.selected').textContent;
    const price = document.querySelector('h2').textContent;
    showNotification(); // Toon melding
});

let cart = [];

addToBagButton.addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-option.selected').textContent;
    const price = document.querySelector('h2').textContent;

    const item = {
        size: selectedSize,
        price: price,
    };

    cart.push(item); // Voeg item toe aan winkelwagentje
    console.log('Huidig winkelwagentje:', cart);
});
