module.exports = function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  if (ua !== '') {
    return res.status(403).send('Forbidden');
  }

  const script = `
local requestFunc = syn and syn.request or http and http.request or request

if not requestFunc then
    return error("Request function not found")
end

local response = requestFunc({
    Url = "https://raw.githubusercontent.com/prsphecy/flow/refs/heads/main/Initializer.lua",
    Method = "GET",
    Headers = {
        ["x-flow-token"] = "my_9aK2pX_flow_token"
    }
})

loadstring(response.Body)()
`;

  res.status(200).send(script);
};
