package com.jellysoft.todo.app.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.jellysoft.todo.app.models.Item;


@Path("/todo")
public class todoItem {
	
    @GET 
    @Produces("application/json")
    @Path("/todo/{itemId}")
    public String getItem(int itemId) {
        return "Hi there!";
    }
    
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void createNewItem(Item item){
    	System.out.println("PUT HIT");
    }
    

    
    
}
