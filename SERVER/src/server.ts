import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
const app = fastify();
const prisma = new PrismaClient();
// HTTP Method: GET,POST,PUT,PACTH,DELTE

      app.get("/users", async () => {
  const users = await prisma.user.findMany();

  return users;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server runnin on http");
  });
