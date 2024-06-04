document.getElementById('searchBar').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let items = document.getElementById('productList').getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        let name = items[i].getElementsByClassName('product-name')[0];
        let textValue = name.textContent || name.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
});

document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    let productName = document.getElementById('productName').value;
    let productImage = document.getElementById('productImage').value;
    let productPrice = document.getElementById('productPrice').value;

    // Crear un nuevo elemento de lista
    let newProduct = document.createElement('li');
    newProduct.innerHTML = `
        <div class="product">
            <img src="${productImage}" alt="${productName}">
            <div class="product-name">${productName}</div>
            <div class="product-price">$${parseFloat(productPrice).toFixed(2)}</div>
        </div>
    `;

    // Añadir el nuevo producto a la lista
    document.getElementById('productList').appendChild(newProduct);

});

function limpiarForm(){
     // Limpiar el formulario
     document.getElementById('addProductForm').reset();
};

function eliminarProducto(){
// Añadir funcionalidad de eliminación a los productos existentes (si hay alguno)
document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.parentElement.remove();
    });
});
}