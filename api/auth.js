export default function handler(req, res) {

    res.setHeader("Content-Type", "text/plain");

    res.status(200).send(`loadstring(game:HttpGet("https://raw.githubusercontent.com/prsphecy/flow/refs/heads/main/Initializer.lua"))()
`);

}
