package com.jellysoft.todo.app.models;

import java.util.Date;

import com.mongodb.ReflectionDBObject;

public class Item extends ReflectionDBObject {

	private String description;
	private String summary;
	private Date dateCreated;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("description: " + description);
		builder.append("summary: " + summary);
		return builder.toString();
	}

}
