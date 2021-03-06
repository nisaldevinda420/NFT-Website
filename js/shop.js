(function(){
    const addButton = document.querySelectorAll('.atc-btn');

    addButton.forEach(function(btn){
        btn.addEventListener('click',function(event){
            let fullPath = event.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.src;
            let pos = fullPath.indexOf('images') + 6;
            
            let partPath = fullPath.slice(pos);
            
            const item = {};
            item.img = `../assets/cart-images${partPath}`;

            let name = event.target.parentElement.previousElementSibling.children[0].children[0].textContent;
            let price = event.target.parentElement.previousElementSibling.children[1].children[1].textContent;
            let quantity = event.target.previousElementSibling.value;

            
            item.name = name;
            item.price = price;
            item.quantity = quantity;
            item.totalPrice = price * quantity;


            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-row','cart-row-order');
            cartItem.setAttribute('id','cart-row-order')
            cartItem.innerHTML = `           
                <div class="item-col cart-item-desc">
                    <div class="cart-imag-wrap">
                        <img src="${item.img}" alt="" class="cart-img">
                    </div>
                    <div class="cart-item-name-wrap">
                        <span>${item.name}</span>
                    </div>
                </div>
                <div class="unit-col">
                    <i class="fa-solid fa-circle-dollar-to-slot cart-coin"></i>
                    <span class="unit-price">${item.price}</span>
                </div>
                <div class="qty-col">
                    <span class="cart-item-quantity">x &nbsp; ${item.quantity}</span>
                </div>
                <div class="price-col">
                    <i class="fa-solid fa-circle-dollar-to-slot cart-coin"></i>
                    <span class="cart-price">${item.totalPrice}</span>
                </div>
            </div>
            `;

            const cart = document.getElementById('cart-content');
            const total = document.querySelector('#all-cart-items');

            cart.insertBefore(cartItem, total);
            alert('Your item has been added to the cart.');

            showTotal();

        });
    });


    function showTotal(){
        const total = [];
        const items = document.querySelectorAll('.cart-price');
        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        })
     
        

        const totalMoney = total.reduce(function(total, item){
            total += item;
            return total;
        }, 0);
        const finalMoney = totalMoney.toFixed(0);

        document.getElementById('final-total').textContent = finalMoney;
    }

})();

function checkout(){
    
    const cartObject = document.getElementById('cart-content');
    const cartContents = cartObject.innerHTML;

    const invoiceObject = document.getElementById('invoice-content');
    invoiceObject.innerHTML = cartContents;
    
    var invoiceDetails = document.getElementById('invoice')
    var visibility = invoiceDetails.style.visibility;
    invoiceDetails.style.visibility = visibility == "visible" ? 'hidden' : "visible";

}

function removeItems(){

    document.getElementById('final-total').textContent = '0';

    for (let i = 0; i < 10; i++) {
        const cartItems = document.getElementById("cart-row-order");
        cartItems.remove();
    }
}

function getDetails() {
    const customerName = document.querySelector('#customer-name').value;
    const customerEmail = document.querySelector('#customer-email').value;
    const emailError = document.getElementById('error-email');
    const nameError = document.getElementById('error-name');
    const invoice = document.getElementById('invoice');

    nameErrorMsg = "* Name is required";
    emailErrorMsg = "* Email is required";

    console.log(customerName);
    console.log(customerEmail);

    if (customerName == '' || customerEmail == ''){
        window.alert('Please enter the required personal information.');
        if (customerName == ''){
            nameError.style.visibility = 'visible';
            nameError.textContent = nameErrorMsg; 
        }
        else{
            nameError.style.visibility = 'hidden'; 
        }
        if (customerEmail == ''){
            emailError.style.visibility = 'visible';
            emailError.textContent = emailErrorMsg;
        }
        else{
            emailError.style.visibility = 'hidden'; 
        }
    }
    else{
        invoiceName = document.querySelector('#invoice-name');
        invoiceName.textContent = customerName;

        invoiceName = document.querySelector('#invoice-email');
        invoiceName.textContent = customerEmail;

        invoice.scrollIntoView();
        checkout();
    }

    
  }
