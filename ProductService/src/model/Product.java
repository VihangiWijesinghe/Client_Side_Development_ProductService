package model;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import repository.DBConnection;

public class Product {
	
	private DBConnection connection = new DBConnection();
	
	private int id;
	private String productName;
	private double productPrice;
	private int ownerId;
	private int buyerId;
	private String created_at;
	private String updated_at;
	private boolean isCompleted;
	private int categoryId;
	
	public Product() {
		super();
	}

	public Product(String productName, double productPrice, int ownerId, boolean isCompleted, int categoryId) {
		super();
		this.productName = productName;
		this.productPrice = productPrice;
		this.ownerId = ownerId;
		this.isCompleted = isCompleted;
		this.categoryId = categoryId;
	}

	public int getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}

	public int getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}

	public String getCreated_at() {
		return created_at;
	}

	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}

	public String getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(String updated_at) {
		this.updated_at = updated_at;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	@Override
	public String toString() {
		return "Product [productName=" + productName + ", productPrice=" + productPrice + ", ownerId=" + ownerId
				+ ", created_at=" + created_at + ", updated_at=" + updated_at + ", isCompleted=" + isCompleted
				+ ", categoryId=" + categoryId + "]";
	}
	
public String ReadTabProducts() {
		
		
		String output = "";
		 String status;
	   
		try {
	      Connection con = connection.getConnection();
	      
	      if (con == null) {
	    	  return "Error while connecting to the database for reading."; 
	      }
	      
	      //html table(table headings)
	      
	      output = "<table border = '1'><tr><th> Product Name </th>"
	      +	"<th> Product Price</th>"
	      + "<th> Owner Id</th>"
	      + "<th> Status </th>"
	      +"<th> Category Id</th> </tr>";

	      String query = "select p.id , p.product_name, p.product_price, p.owner_id, p.is_completed, p.category_id from product p";
	      
	      Statement stmt = con.createStatement();
	      ResultSet rs = stmt.executeQuery(query);

	      while (rs.next()) {
	          
	        String pid = Integer.toString(rs.getInt("id"));
	        String product_name = rs.getString("product_name");
	        String product_price = Double.toString(rs.getDouble("product_price")); 
	        String  owner_id =Integer.toString(rs.getInt("owner_id"));
	        //String created_at = rs.getString("created_at");
	       // String updated_at = rs.getString("updated_at");
	        
	        String is_completed = Boolean.toString(rs.getBoolean("is_completed"));
	        String category_id = Integer.toString(rs.getInt("category_id"));
	        
	        //Add products to html table 
	        output += "<tr><td>" + product_name +"</td>";
	        output += "<td>" + product_price + "</td>";
	        output += "<td>" + owner_id + "<td>";
	        output += "<td>" + is_completed + "</td>";
	        output += "<td>" + category_id + "</td>";
	        
	        //buttons
	        output += "<td> <input name = 'btnUpdate' type ='button' value = 'Update'>"
	        		+ "class='btnUpdate btn btn-secondary' data-pid= '" + pid + "'></td>"
	        		+ "<td> <input name = 'btnRemove' type = 'button' value = 'Remove' "
	        		+"class = 'btnRemove btn btn-danger' date-pid = '" + pid + "'></td></tr>";
	        
	      }
	      con.close();
	      
	    //complete the html table
	        output += "</table>";

	    } catch (Exception e) {
	    	output = "Error while reading the products";
	    	System.err.println(e.getMessage());
	    
	    }
		return output;

	}
}
