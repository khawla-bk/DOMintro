let removeItem = document.getElementsByClassName("btn-danger");
console.log(removeItem);
for (let i = 0; i < removeItem.length; i++) {
  removeItem[i].addEventListener("click", function () {
    removeItem[i].parentElement.parentElement.remove();
    updateTotal();
  });
}
function updateTotal() {
  
  let price = document.getElementsByClassName("cart-price");
  let quantity = document.getElementsByClassName("counter");
  let total = 0;
  console.log(price);
  console.log(quantity);
  console.log(total);
  for (let i = 0; i < price.length; i++) {
    total =
      total + price[i].innerHTML.replace("DT", "") * quantity[i].innerHTML;
    console.log(total);

  }
  let totalprice = document.querySelector(".totalp");
  totalprice.innerHTML = total;
}

var plus = document.getElementsByClassName("btn-plus");
var counter = document.getElementsByClassName("counter");
var minus = document.getElementsByClassName("btn-minus");
for (var i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    this.previousElementSibling.innerHTML =
      Number(this.previousElementSibling.innerHTML) + 1;
    updateTotal();
  });
  minus[i].addEventListener("click", function () {
    console.log(this.nextElementSibling);
    if (Number(this.nextElementSibling.innerHTML) > 1)
      this.nextElementSibling.innerHTML =
        Number(this.nextElementSibling.innerHTML) - 1;
    else this.nextElementSibling.innerHTML = 1;
    updateTotal();
  });
}

let buttonlike = document.getElementsByClassName("btn-heart");
for (let i = 0; i < buttonlike.length; i++) {
  buttonlike[i].addEventListener("click", function () {
    if (buttonlike[i].style.color == "red") {
      buttonlike[i].style.color = "grey";
    } else {
      buttonlike[i].style.color = "red";
    }
  });
}
