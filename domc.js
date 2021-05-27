var removeItem = document.getElementsByClassName("btn-danger");
console.log(removeItem);
for (var i = 0; i < removeItem.length; i++) {
  var button = removeItem[0];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateTotal();
  });
}
function updateTotal() {
  var cartItemsContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemsContainer.getElementsByClassName("cart-rows");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartrow = cartRows[i];
    var pricetotal = cartrow.getElementsByClassName("cart-price")[0];
    var quantityelement = cartrow.getElementsByClassName("counter")[0];
    var price = parseFloat(priceElemnt.innerText.replace("DT", ""));
    var quantity = quantityelement.counter;
    total = total + price * quantity;
  }
  document.getElementsByClassName("totalp")[0].innerText = "DT" + total;
}

var plus = document.getElementsByClassName("btn-plus");
var counter = document.getElementsByClassName("counter");
var minus = document.getElementsByClassName("btn-minus");
for (var i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    this.previousElementSibling.innerHTML =
      Number(this.previousElementSibling.innerHTML) + 1;
  });
  minus[i].addEventListener("click", function () {
    console.log(this.nextElementSibling);
    if (Number(this.nextElementSibling.innerHTML) > 1)
      this.nextElementSibling.innerHTML =
        Number(this.nextElementSibling.innerHTML) - 1;
    else this.nextElementSibling.innerHTML = 1;
  });
}

/*var buttonlike = document.getElementById("btnh1");

buttonlike.addEventListener("click", function Toggle1() {
  if (buttonlike.style.color == "red") {
    buttonlike.style.color = "grey";
  } else {
    uttonlike.style.color = "red";
  }
}*/
