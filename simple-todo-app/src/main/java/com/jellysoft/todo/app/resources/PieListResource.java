package com.jellysoft.todo.app.resources;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/pies")
public class PieListResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Pie[] getPies() {
		Pie pieA = new Pie();
		Pie pieB = new Pie();

		Pie[] pies = new Pie[2];
		pies[0] = pieA;
		pies[1] = pieB;

		pieA.getIngredients().add("Beef");
		pieB.getIngredients().add("Chicken");

		return pies;
	}

	public static class Pie {
		String name = "Pie Name";
		int slices = 1;
		List<String> ingredients = new ArrayList<String>();

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public int getSlices() {
			return slices;
		}

		public void setSlices(int slices) {
			this.slices = slices;
		}

		public List<String> getIngredients() {
			return ingredients;
		}

		public void setIngredients(List<String> ingredients) {
			this.ingredients = ingredients;
		}

	}
}
