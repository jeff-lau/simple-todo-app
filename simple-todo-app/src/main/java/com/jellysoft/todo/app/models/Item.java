package com.jellysoft.todo.app.models;

import java.util.Date;

public class Item {

	private int itemId;
	private String description;
	private String summary;
	private Date dateCreated;

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

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
		builder.append("itemId: " + itemId);
		builder.append("description: " + description);
		builder.append("summary: " + summary);
		return builder.toString();
	}

}
