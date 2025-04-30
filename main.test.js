import { describe, it, expect } from "vitest";
import { makeServer } from "./main";

describe("Test Suite", () => {
  const server = makeServer();

  describe("User routes", () => {
    it("GET /users", async () => {
      const response = await server.inject({
        method: "GET",
        url: "/users",
      });
      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ "users": [
      {
        "id": 1,
        "name": "John Doe",
      },
     {
        "id": 2,
        "name": "Jane Doe",
     },
      ]})
    });
    
    it("POST /users", async () => {
      const response = await server.inject({
        method: "POST",
        url: "/users",
        body: { name: "John Doe" },
      });
      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ user: { name: "John Doe" } });
    })

    it("POST /users with invalid data", async () => {
      const response = await server.inject({
        method: "POST",
        url: "/users",
        payload: { name: 123 },
      });
      expect(response.statusCode).toBe(400);
      expect(response.json()).toMatchObject({
        error: {
          name: 'ZodError',
      }})
    })
  })

  describe("Product routes", () => {
    it("GET /products", async () => {
      const response = await server.inject({
        method: "GET",
        url: "/products",
      });
      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({
        products: [{
          id: 1,
          name: 'Product 1'
        }, {
          id: 2,
          name: 'Product 2'
        }]
      });
    })

    it("POST /products", async () => {
      const response = await server.inject({
        method: "POST",
        url: "/products",
        body: { name: "Product 1" },
      });
      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ product: { name: "Product 1" } });
    })
    
    it("POST /products with invalid data", async () => {
      const response = await server.inject({
        method: "POST",
        url: "/products",
        payload: { name: 123 },
      });
      expect(response.statusCode).toBe(400);
      expect(response.json()).toMatchObject({
        error: {
          name: 'ZodError',
      }})
    })
  });
})