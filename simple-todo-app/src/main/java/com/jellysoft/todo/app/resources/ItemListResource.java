package com.jellysoft.todo.app.resources;

import java.net.UnknownHostException;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;
import org.bson.types.ObjectId;

import com.jellysoft.todo.app.models.ItemList;
import com.jellysoft.todo.app.persistence.Database;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.WriteResult;

@Path("/itemlist")
public class ItemListResource {

	private static Logger LOGGER = Logger.getLogger(com.jellysoft.todo.app.resources.ItemListResource.class);

	@Path("/{listId}")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public ItemList getItemList(@PathParam("listId") String listId) throws UnknownHostException {
		return (ItemList) findItemListById(listId);
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	public ItemList createItemList(@QueryParam("name") String name) throws UnknownHostException {
		ItemList list = new ItemList(name);
		DBCollection collection = Database.getInstance().getItemListCollection();
		BasicDBObject basicDBObject = new BasicDBObject(list.toMap());
		WriteResult result = collection.insert(basicDBObject);
		return (ItemList) findItemListById(basicDBObject.get("_id").toString());
	}

	@DELETE
	@Path("/{listId}")
	public void deleteItemList(@PathParam("listId") String listId) throws UnknownHostException {
		LOGGER.info("Removing Item List - " + listId);
		DBCollection collection = Database.getInstance().getItemListCollection();
		DBObject itemToRemove = findItemListById(listId);
		if (itemToRemove != null) {
			collection.remove(itemToRemove);
		}
	}

	/**
	 * finds ItemList by ID. NULL if none is found.
	 * 
	 * @param id
	 * @return
	 * @throws UnknownHostException
	 */
	private DBObject findItemListById(String id) throws UnknownHostException {
		DBCollection collection = Database.getInstance().getItemListCollection();
		return collection.findOne(new BasicDBObject("_id", new ObjectId(id)));
	}
}
