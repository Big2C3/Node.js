import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");
  
  // const jsonResponseBody = JSON.stringify({ location: "Earth" });
  const jsonResponseBody = JSON.stringify({ location: "Mars" }); //cambiata location in "Mars"
  response.setHeader("Content-Length", jsonResponseBody.length )
 
  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});


//*     $ curl -v localhost:3000
//*     * Host localhost:3000 was resolved.
//*     * IPv6: ::1
//*     * IPv4: 127.0.0.1
//*     *   Trying [::1]:3000...
//*     * Connected to localhost (::1) port 3000
//*     * using HTTP/1.x
//*     > GET / HTTP/1.1
//*     > Host: localhost:3000
//*     > User-Agent: curl/8.10.1
//*     > Accept: */*
//*     >
//*     * Request completely sent off
//*     < HTTP/1.1 200 OK
//*     < Content-Type: application/json
//*     < Date: Tue, 01 Apr 2025 08:48:21 GMT
//*     < Connection: keep-alive
//*     < Keep-Alive: timeout=5
//*     < Content-Length: 19
//*     <
//*     {"location":"Mars"}* Connection #0 to host localhost left intact