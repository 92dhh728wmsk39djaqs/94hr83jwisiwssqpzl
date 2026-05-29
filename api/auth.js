const crypto = require("crypto");

module.exports = async (req, res) => {
  const ua = req.headers["user-agent"] || "";

  const isRoblox =
    ua.includes("Roblox") ||
    req.headers["roblox-id"] ||
    req.query.source === "roblox";

  if (!isRoblox) {
    return res.status(403).send("Forbidden");
  }

  const token = crypto.randomBytes(16).toString("hex");

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "no-store");

  res.send(`
getgenv().od_token = "${token}"

loadstring(game:HttpGet("https://raw.githubusercontent.com/prsphecy/flow/refs/heads/main/Initializer.lua"))()
`);
};
