import { Client } from "https://deno.land/x/postgres/mod.ts";

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: "appuser",
      database: "blog",
      hostname: "localhost",
      password: "Test1234",
      port: 5432,
    });

    await this.client.connect();
  }
}

export default new Database().client;
