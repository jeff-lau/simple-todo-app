package com.jellysoft.todo.app.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import com.mongodb.ReflectionDBObject;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ItemList extends ReflectionDBObject {

	private String name;
	private String summary;
	private Date dateCreated;
	private List<Item> items = new ArrayList<Item>();
	private Date lastUpdatedDate;
	private Object someRandom;

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

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public Object getSomeRandom() {
		return someRandom;
	}

	public void setSomeRandom(Object someRandom) {
		this.someRandom = someRandom;
	}

	public String getId() {
		return this.get_id().toString();
	}

	public Date getLastUpdatedDate() {
		return lastUpdatedDate;
	}

	public void setLastUpdatedDate(Date lastUpdatedDate) {
		this.lastUpdatedDate = lastUpdatedDate;
	}

	public Map toMapWithoutId() {
		Map output = super.toMap();
		output.remove("_id");
		return output;
	}

}
