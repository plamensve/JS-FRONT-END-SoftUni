document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let allBtn = Array.from(document.querySelectorAll('.add-product'))

   for (let btn of allBtn){
       btn.addEventListener("click", addProduct)
   }

    function addProduct(event) {
        const productDiv = event.target.closest('.product');

        const productName = productDiv.querySelector('.product-title').textContent
        const price = productDiv.querySelector('.product-line-price').textContent;

        let textArea = document.querySelector('textarea')
        textArea.textContent += `Added ${productName} for ${Number(price).toFixed(2)} to the cart.\n`

        shoppingCart(productName, price)
    }

   let allProducts = new Set();
   let totalPrice = 0;

   function shoppingCart(productName, price) {
       allProducts.add(productName)
       totalPrice += Number(price);
   }

   let checkoutBtn = document.querySelector('.checkout')
    checkoutBtn.addEventListener('click', checkoutResult)

    function checkoutResult(event){
    let textArea = document.querySelector('textarea');
    textArea.textContent += `You bought ${Array.from(allProducts).join(', ')} for ${totalPrice.toFixed(2)}.`;

    let allBtn = Array.from(document.querySelectorAll('.add-product'));
    for (let x of allBtn) {
        x.disabled = true;
    }

    checkoutBtn.disabled = true;
}

}
