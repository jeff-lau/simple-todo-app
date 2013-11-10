package com.jellysoft.todo.app.persistence;

import java.net.UnknownHostException;

import org.apache.log4j.Logger;

import com.jellysoft.todo.app.models.ItemList;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;

public class Database {

	private static final String MONGO_DB_HOST = "localhost";

	private static final int MONGO_DB_PORT = 27017;

	private static final Logger LOGGER = Logger.getLogger(com.jellysoft.todo.app.persistence.Database.class);

	private static final String DB_NAME = "simple-todo-app-db";
	private static final String COLLECTION_NAME = "simple-todo-app-collection";

	private static Database instance = null;
	private MongoClient client = null;

	private Database(MongoClient client) {
		this.client = client;
	}

	public static synchronized Database getInstance() throws UnknownHostException {
		if (instance == null) {
			LOGGER.info("Connecting to MongoDB");
			instance = new Database(new MongoClient(MONGO_DB_HOST, MONGO_DB_PORT));
		}
		return instance;
	}

	public MongoClient getMongoClient() {
		return this.client;
	}

	public DB getDB() {
		return this.client.getDB(DB_NAME);
	}

	public DBCollection getItemListCollection() {
		DBCollection collection = getDB().getCollection(COLLECTION_NAME);
		collection.setObjectClass(ItemList.class);
		return collection;
	}
}
