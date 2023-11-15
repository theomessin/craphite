import message from "./greet";
import { createServer } from "node:http";

const server = createServer((req, res) => {
    res.write(message);
});

server.listen(3000);
