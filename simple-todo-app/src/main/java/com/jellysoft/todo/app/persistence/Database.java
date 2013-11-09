package com.jellysoft.todo.app.persistence;

import java.net.UnknownHostException;

import org.apache.log4j.Logger;

import com.mongodb.DB;
import com.mongodb.MongoClient;

public class Database {

	private static final Logger LOGGER = Logger
			.getLogger(com.jellysoft.todo.app.persistence.Database.class);

	private static final String DB_NAME = "ToDoAppDB";

	private Database instance = null;
	private MongoClient client = null;

	private Database(MongoClient client) {
		this.client = client;
	}

	public synchronized Database getInstance() throws UnknownHostException {
		if (instance == null) {
			LOGGER.info("Connecting to MongoDB");
			this.instance = new Database(new MongoClient("localhost", 28017));
		}
		return this;
	}

	public MongoClient getMongoClient() {
		return this.client;
	}

	public DB getDB() {
		return this.client.getDB(DB_NAME);
	}
}
