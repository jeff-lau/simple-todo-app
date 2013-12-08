package com.jellysoft.todo.app.resources;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;
import org.bson.types.ObjectId;

import com.jellysoft.todo.app.models.Item;
import com.jellysoft.todo.app.models.ItemList;
import com.jellysoft.todo.app.persistence.Database;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;

@Path("/itemlists")
public class ItemListResource {

	private static Logger LOGGER = Logger.getLogger(com.jellysoft.todo.app.resources.ItemListResource.class);

	@GET
	@Path("/id/{listId}")
	@Produces(MediaType.APPLICATION_JSON)
	public ItemList getItemList(@PathParam("listId") String listId) throws UnknownHostException {
		return findItemListById(listId);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemList[] getItemLists() throws UnknownHostException {

		DBCursor curosr = Database.getInstance().getItemListCollection().find();
		List<ItemList> output = new ArrayList<ItemList>();
		while (curosr.hasNext()) {
			ItemList itemList = (ItemList) curosr.next();
			output.add(itemList);
		}
		return output.toArray(new ItemList[output.size()]);

	}

	@Path("/id/{listId}")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void addItemToList(@PathParam("listId") String listId, Item item) throws UnknownHostException {
		DBCollection collection = Database.getInstance().getItemListCollection();
		BasicDBObject itemToInsert = new BasicDBObject(item.toMap());
		BasicDBObject findQuery = new BasicDBObject("_id", new ObjectId(listId));
		BasicDBObject updateCommand = new BasicDBObject("$push", new BasicDBObject("Items", itemToInsert));
		collection.update(findQuery, updateCommand);
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ItemList createItemList(ItemList list) throws UnknownHostException {
		DBCollection collection = Database.getInstance().getItemListCollection();
		BasicDBObject basicDBObject = new BasicDBObject(list.toMap());
		collection.insert(basicDBObject);
		return findItemListById(basicDBObject.get("_id").toString());
	}

	@DELETE
	@Path("/id/{listId}")
	public void deleteItemList(@PathParam("listId") String listId) throws UnknownHostException {
		LOGGER.info("Removing Item List - " + listId);
		DBCollection collection = Database.getInstance().getItemListCollection();
		DBObject itemToRemove = findItemListById(listId);
		if (itemToRemove != null) {
			collection.remove(itemToRemove);
		}
	}

	// @PUT
	// @Path("/id/{listId}")
	// @Consumes(MediaType.APPLICATION_JSON)
	// public void updateItemList(@PathParam("listId") String listId, ItemList
	// updatedList) throws UnknownHostException {
	// updatedList.setLastUpdatedDate(new Date());
	// Database.getInstance().getItemListCollection()
	// .update(new BasicDBObject("_id", new ObjectId(listId)), new
	// BasicDBObject(updatedList.toMapWithoutId()));
	//
	// }

	/**
	 * finds ItemList by ID. NULL if none is found.
	 * 
	 * @param id
	 * @return
	 * @throws UnknownHostException
	 */
	private ItemList findItemListById(String id) throws UnknownHostException {
		DBCollection collection = Database.getInstance().getItemListCollection();
		return (ItemList) collection.findOne(new BasicDBObject("_id", new ObjectId(id)));
	}

}
