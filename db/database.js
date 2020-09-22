import { Client } from "https://deno.land/x/postgres/mod.ts";

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: "[APP_USER]",
      database: "blog",
      hostname: "localhost",
      password: "[PASSWORD]",
      port: 5432,
    });

    await this.client.connect();
  }
}

export default new Database().client;
