package com.jellysoft.todo.app.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.mongodb.ReflectionDBObject;

public class ItemList extends ReflectionDBObject {

	private String name;
	private Date dateCreated;
	private List<Item> items = new ArrayList<Item>();

	public ItemList() {
	}

	public ItemList(String name) {
		this.name = name;
		this.dateCreated = new Date();
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getObjectIdStr() {
		return this.get_id().toString();
	}
}
