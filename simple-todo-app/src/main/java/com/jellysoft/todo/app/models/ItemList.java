package com.jellysoft.todo.app.models;

import java.util.Date;
import java.util.List;

import com.mongodb.ReflectionDBObject;

public class ItemList extends ReflectionDBObject {

	private String name;
	private Date dateCreated;
	private List<Item> itemList;

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

	public List<Item> getItemList() {
		return itemList;
	}

	public void setItemList(List<Item> itemList) {
		this.itemList = itemList;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
