package com.jellysoft.todo.app.persistence;

import java.net.UnknownHostException;

import com.mongodb.MongoClient;

public class Database {

	private Database instance = null;
	private MongoClient client = null;
	
	private Database(MongoClient client){
		this.client = client;
	}
	
	public synchronized Database getInstance() throws UnknownHostException{
		if (instance == null){
			this.instance = new Database(new MongoClient("localhost", 28017));
		}
		return this;
	}
	
	public MongoClient getMongoClient(){
		return this.client;
	}
}
