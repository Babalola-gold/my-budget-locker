function addUp() {

  var pName = productName.value;
  var quant = quantityOwn.value;
  var prices = priceName.value;
  var budgetObj = { pName, quant, prices };
  var budgetArray = JSON.parse(localStorage.getItem("budget")) || [];
  
  if (pName == "" && quant == "" && prices == "") {
    showError.innerHTML =  `Enter your budget details` 
  } else {
    budgetArray.push(budgetObj)
    productName.value = ""
    quantityOwn.value = ""
    priceName.value = ""
    window.location.href = "result.html"
  }
  localStorage.setItem("budget", JSON.stringify(budgetArray))
  
}




  

