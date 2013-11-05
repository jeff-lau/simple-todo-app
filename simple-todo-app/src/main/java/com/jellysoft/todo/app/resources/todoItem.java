package com.jellysoft.todo.app.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

public class todoItem {
	@Path("/todo/{id}")
	public class getToDoItem {
	    
	    /** Method processing HTTP GET requests, producing "text/plain" MIME media
	     * type.
	     * @return String that will be send back as a response of type "text/plain".
	     */
	    @GET 
	    @Produces("text/plain")
	    public String getIt() {
	        return "Hi there!";
	    }
	}

}
