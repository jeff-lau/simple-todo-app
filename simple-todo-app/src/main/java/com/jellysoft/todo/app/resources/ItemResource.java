package com.jellysoft.todo.app.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import com.jellysoft.todo.app.models.Item;

@Path("/item")
public class ItemResource {

	private static Logger LOGGER = Logger
			.getLogger(com.jellysoft.todo.app.resources.ItemResource.class);

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String test() {
		return "Welcome to Jeffs REST Services!";
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{itemId}")
	public Item getItem(@PathParam("itemId") int itemId) {
		System.out.println("Getting Item Id - " + itemId);
		Item i = new Item();
		i.setDescription("Something to do!");
		i.setItemId(1);
		i.setSummary("Item Summary");
		return i;
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void createNewItem(Item item) {
		System.out.println(item);
	}

	@DELETE
	@Path("/{itemId}")
	public void deleteItem(@PathParam("itemId") int itemId) {
		LOGGER.info("Deleting item - " + itemId);
	}

}
