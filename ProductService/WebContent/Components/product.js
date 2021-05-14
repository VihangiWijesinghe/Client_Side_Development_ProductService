const PORT = 8180;

function getData() {
  //load initial data to the view
  $.ajax({
    url: `http://localhost:${PORT}/ProductService/api/v2/product/getproducts`,
			
    type: "GET",
    success: function (result) {
      
	const productData = result;
    const tableId = $("#product_table");
      
	let output = ``;
    
	productData.forEach((data) => {
        output =
          output +
          `<tr>
          <td>${data.id}</td>
          <td>${data.productName}</td>
          <td>${data.productPrice}</td>
          <td>${data.ownerId}</td>
		  <td>${data.completed}</td>
		  <td>${data.categoryId}</td>
          <td style="display: flex; flex-direction: row; align-itmes: center">
            <button
              id="${data.id}"
              type="button"
              class="btn btn-success btnUpdate"
              style="margin-right: 10px">
              Update
            </button>
            <button
              id="${data.id}"
              class="btn btn-danger btnRemove"
              type="button"
              style="margin-left: 10px"
            >
              Delete
            </button>
          </td>
        </tr>
        `;
      });

      tableId.html(output);
    },
  });



}
getData();

//delete Product
$(document).on("click", ".btnRemove", (event) => {
  const deleteId = event.target.id;
  const target = event.target;
  target.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Wait`;

  $.ajax({
    url: `http://localhost:${PORT}/ProductService/api/v2/product/deletebyid/${deleteId}`,

    type: "DELETE",
    complete: function (result) {
      if (result.status == 200) {
        target.parentNode.parentNode.style.display = "none";
        $("#deleteLabel").css("display", "block");

        setTimeout(() => {
          $("#deleteLabel").css("display", "none");
        }, 2000);
      } else {
        $("#deleteLabelerror").css("display", "block");
        target.innerHTML = `Delete`;
        setTimeout(() => {
          $("#deleteLabelerror").css("display", "none");
        }, 2000);
      }
    },
  });
});


//update Product
$(document).on("click", ".update", (event) => {
  event.preventDefault();

  const target = event.target;
  const id = $("#id").val();
  const name = $("#pname").val();
  const price = Number.parseFloat($("#pprice").val());
  const ownerid =  Number.parseInt($("#selectOwnerid").val()); 
  const catid = Number.parseInt($("#cid").val()); 
  //const status1 = Boolean.parseBoolean($("#selectstat").val());

 

  target.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Wait`;

  $.ajax({
    url: `http://localhost:${PORT}/ProductService/api/v2/product/update/${id}`,
    type: "PUT",
    data: JSON.stringify({
      productName: name,
      productPrice: price,
      ownerId: ownerid,
	  categoryId :catid
    }),
    contentType: "application/json",
    dataType: "json",
    complete: function (response, status) {
      target.innerHTML = `Update`;
      if (response.status) {
        getData();
        $("#updateLabel").css("display", "block");

        setTimeout(() => {
          $("#updateLabel").css("display", "none");
        }, 2000);
      } else {
        $("#updateLabelerror").css("display", "block");

        setTimeout(() => {
          $("#updateLabelerror").css("display", "none");
        }, 2000);
      }
    },
  });
});

//update in rows
$(document).on("click", ".btnUpdate", (event) => {
  const targetParent = event.target.parentNode.parentNode.children;
  const id = targetParent[0].innerHTML;
  const name = targetParent[1].innerHTML;
  const price = targetParent[2].innerHTML;
  const ownerid = targetParent[3].innerHTML;
  const catid = targetParent[5].innerHTML;

  $("#id").val(id);
  $("#pname").val(name);
  $("#pprice").val(price);
  $("#selectOwnerid").val(ownerid);
  $("#cid").val(catid);

});



//insert Products
$(document).on("click", ".submit", (event) => {
  event.preventDefault();
  const target = event.target;
  const name = $("#pname").val();
  const price = Number.parseFloat($("#pprice").val());
  const ownerid =  Number.parseInt($("#selectOwnerid").val()); 
  const catid = Number.parseInt($("#cid").val()); 

  target.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Wait`;

  $.ajax({
    url: `http://localhost:${PORT}/ProductService/api/v2/product/addproduct`,
    type: "POST",
    data: JSON.stringify({
      productName: name,
      productPrice: price,
      ownerId: ownerid,
      categoryId :catid
    }),
    contentType: "application/json",
    dataType: "json",
    complete: function (response, status) {
      const newlyAddedItems = {
        productName: name,
      productPrice: price,
      ownerId: ownerid,
      categoryId :catid
      };
      onItemSaveComplete(response, status, newlyAddedItems, target);
    },
  });
});


function onItemSaveComplete(response, status, newlyAddedItems, target) {
  if (response.status == 201) {
    $("#insertLabel").css("display", "block");
    target.innerHTML = `Submit`;
    let tableId = $("#product_table");
    let output = `${tableId.html()}`;
    output =
      output +
      `<tr>
      <td>${Number.parseInt(Math.random() * 100)}</td>
      <td>${newlyAddedItems.productName}</td>
      <td>${newlyAddedItems.productPrice}</td>
      <td>${newlyAddedItems.ownerId}</td>
	  <td>${newlyAddedItems.categoryId}</td>
      <td style="display: flex; flex-direction: row; align-itmes: center">
        <button
          type="button"
          class="btn btn-success btnUpdate"
          style="margin-right: 10px"
        >
          Update
        </button>
        <button
          class="btn btn-danger btnRemove"
          type="button"
          style="margin-left: 10px"
        >
          Delete
        </button>
      </td>
    </tr>
    `;
    tableId.html(output);
    setTimeout(() => {
      $("#insertLabel").css("display", "none");
    }, 2000);
  } else {
    $("#insertLabelerror").css("display", "block");
    target.innerHTML = `Submit`;
    setTimeout(() => {
      $("#insertLabelerror").css("display", "none");
    }, 2000);
  }
}
