function deleteItem(e){
  product = e.currentTarget.parentNode.parentNode;
  product_list = product.parentNode;

  product_list.removeChild(product);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var grandTotal = 0;

  for (var i = 0; i < document.getElementsByClassName('product').length; i++) {
    var price = Number(document.getElementsByClassName('price')[i].innerText.replace(/^[$]/, ""));
    var quantity = document.getElementsByClassName('quantity')[i].value;
    var total = price * quantity;

    document.getElementsByClassName('total')[i].innerText = "$" + total.toFixed(2);

    grandTotal += total;
  }

  document.getElementById('total').innerText = "$" + grandTotal.toFixed(2);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
