const hostname = "localhost";
const port = 3000;

// httpモジュールでWebサーバーを実装
import http from "node:http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World");
});
server.listen({
    host: hostname,
    port
});
