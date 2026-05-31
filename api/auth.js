export default function handler(req, res) {

const token = req.headers["x-flow-token"];

if (token !== "my_9aK2pX_flow_token") {
    return res.status(403).send("You are not authorized to view this endpoint.");
}

res.setHeader("Content-Type", "text/plain");

res.status(200).send(`

loadstring(game:HttpGet("https://raw.githubusercontent.com/prsphecy/flow/refs/heads/main/Initializer.lua"))()
`);
}
