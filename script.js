// Inicializando o carrinho de compras como um array vazio
let cart = [];

// Função para adicionar um produto ao carrinho
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Função para atualizar a exibição do carrinho na página
function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - R$${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remover</button>`;
        cartList.appendChild(listItem);
    });

    // Atualiza o total
    document.getElementById('cart-total').textContent = `Total: R$${total.toFixed(2)}`;
}

// Função para remover um item do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Função de checkout (simples, apenas alertando o usuário)
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert(`Compra finalizada! Total: R$${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`);
        cart = [];
        updateCart();
    }
}

// Inicializando a seção do carrinho de compras
document.addEventListener('DOMContentLoaded', () => {
    const cartHTML = `
        <section id="cart" class="cart-section">
            <h2>Carrinho da JM Store</h2>
            <ul id="cart-items"></ul>
            <p id="cart-total">Total: R$0,00</p>
            <button class="checkout-btn" onclick="checkout()">Finalizar Compra</button>
        </section>
    `;
    document.body.insertAdjacentHTML('beforeend', cartHTML);
});
