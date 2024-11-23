const address = document.querySelector(".header_address");
const types = document.querySelector('.soprano_regular__types')

if (window.matchMedia("(max-width: 425px)").matches) {
    address.innerText = "Волгодонск, ул. Кошевого, 27";
    types.innerText = "Подходит для всех типов кожи и волос";
}