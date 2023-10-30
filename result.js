var budgetArray = JSON.parse(localStorage.getItem("budget"));
    
    if (budgetArray && budgetArray.length > 0) {
      var totalSpent = 0;
      displayAll();
      resultCard.innerHTML += `<p>Total Spent: $${totalSpent.toFixed(2)}</p>`;
    }
  
    function deleteAny(i) {
      var confirmAlert =confirm('Are you sure you want to delete?');
      if (confirmAlert== true) {
        budgetArray.splice(i, 1);
      totalSpent = 0;
      resultCard.innerHTML = ""; 
      displayAll(); // 
      localStorage.setItem("budget", JSON.stringify(budgetArray));  
      } 
      
    }
    
    function editAny(i){
      var newName = productName.value;
  var quant = quantityOwn.value;
  var prices = priceName.value;
      budgetArray[i]["pName"] = newName;
      budgetArray[i]["quant"] = quant;
      budgetArray[i]["prices"] = prices;
      localStorage.setItem("budget", JSON.stringify(budgetArray));
      totalSpent = 0; // 
      resultCard.innerHTML = ""; 
      displayAll()

    }
  
    function displayAll() {
      for (var i = 0; i < budgetArray.length; i++) {
        var item = budgetArray[i];
        var itemCost = item.quant * item.prices;
        totalSpent += itemCost;
        resultCard.innerHTML += `
          <div class="card" style="width: 18rem; display: flex;">
            <div class="card-body" >
              <h5 class="card-text">Product: ${item.pName}</h5>
              <h5 class="card-text">Quantity: ${item.quant} </h5>
              <h5 class="card-text">Price: $${item.prices}  </h5>
              <h5 class="card-text">Total: $${itemCost} </h5>
              <a href="#" class="btn btn-danger" onclick="deleteAny(${i})">Delete</a>
              <a href="#" class="btn btn-warning"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a>
              <!-- Button trigger modal -->


            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit here</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <input type="text" placeholder="Product name" id="productName">
                  <input type="number"  placeholder="Quantity" id="quantityOwn">
                  <input type="number" placeholder="Price" id="priceName">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="editAny(${i})" data-bs-dismiss="modal">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
                        </div>
                      </div>`;
      }
    }