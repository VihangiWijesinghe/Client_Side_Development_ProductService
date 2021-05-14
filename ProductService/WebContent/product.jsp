<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@page import="model.Product"%>

<!DOCTYPE html>
<html>
	
	<head>
	  <meta charset="ISO-8859-1">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
		
		<title>Product Service</title>
		 <!--<link rel="stylesheet" href="Views/bootstrap.min.css">
		 <script src="Components/jquery-3.2.1.min.js"> </script>  -->
		<link rel="stylesheet" href="Views/product.css"> 	
				
			 <style>
		         .show {
		         display: "block";
		         }
		         .hide {
		         display: "none";
		         }
	        </style>
	</head>
	<body>
		<div class = "container" > 
		<br>
			<div class="row" > 
				<div class = "headingProduct"><div class = "col-12" >
					<br>
					<h3> Product Management  </h3>
					<br></br>
			</div>
			</div>
			</div>
			<div class="row"> 
				<div class = "col-12 bglightBlue"  >
					
					<form id = "formProduct" name = "formProduct" class = "form1">
					<span class="border">
					<br>
					
						<div class = "form-group">
							<label for="prodctName" >Product Id : </label> <br>
							<input id = "id" name= "id" type = "text" class="form-control"  > <br>
						</div>
						
						<div class = "form-group">
							<label for="prodctName" >Product Name : </label> <br>
							<input id = "pname" name= "pname" type = "text" class="form-control" placeholder="Enter Product Name" > <br>
						</div>
						
						<div class = "form-group">
							<label for="prodctPrice">Product Price : </label> <br>
							<input id = "pprice" name= "pprice" type = "text" class="form-control" placeholder="Enter Product Price" ><br>
						</div>
						
						<div class="form-group">
    						<label for="SelectOwnerId">Owner Id:</label><br>
    						<input id = "selectOwnerid" name= "selectOwnerid" type = "text" class="form-control" placeholder="Enter Owner Id" ><br>
    						
 						 </div>
 						 
 						 <div class = "form-group">
							<label for="catid">Category Id : </label> <br>
							<input id = "cid" name= "cid" type = "text" class="form-control" placeholder="Enter Category Id" ><br>
						</div>
 						 
 						  <br>
      					
      					
      					<br>
      					
      					<button class="btn btn-primary btnsv submit">Submit</button>
      					<button class="btn btn-primary btnsv update" >Update</button>
      					
      					
      					<br><br>
      					</span>
				</form>
				<div id="deleteLabel" class="alert alert-success hide" role="alert" style="display: none">
      Product deleted Successfully. 
      </div>
      <div id="insertLabel" class="alert alert-success hide" role="alert" style="display: none">
      Product Added Successfully. 
      </div>
      <div id="updateLabel" class="alert alert-success hide" role="alert" style="display: none">
     Product Updated Successfully.
      </div>
      <div id="deleteLabelerror" class="alert alert-danger hide" role="alert" style="display: none">
      Error while deleting the Product.
      </div>
      <div id="insertLabelerror" class="alert alert-danger hide" role="alert" style="display: none">
      Error while inserting the Product. 
      </div>
      <div id="updateLabelerror" class="alert alert-danger hide" role="alert" style="display: none">
      Error while updating the Product. 
      </div>
      
      <table class="table">
	      <thead>
	      <tr>
	      <th scope="col">Product Id</th>
	      <th scope="col">Product Name</th>
	      <th scope="col">Price</th>
	      <th scope="col">Owner Id</th>
	      <th scope="col">Status</th>
	      <th scope="col">Category Id</th>
	      </tr>
	      </thead>
	      <tbody id="product_table">
	      </tbody>
      </table>
				<br>
				
				
				</div>
				
			</div>
		</div>				


		 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
		      <script
		         src="https://code.jquery.com/jquery-3.6.0.js"
		         integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
		         crossorigin="anonymous"></script>
		      <script src="Components/product.js"></script>
	</body>
</html>