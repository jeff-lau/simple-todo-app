package com.jellysoft.todo.app.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;


@Path("/todo")
public class todoItem {
	
    @GET 
    @Produces("JSON")
    @Path("/todo/{itemId}")
    public String getItem(int itemId) {
        return "Hi there!";
    }

    
    
}
