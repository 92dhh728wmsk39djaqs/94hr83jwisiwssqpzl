module.exports = function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  // Temporary: log the UA to see what executors actually send
  console.log('UA:', JSON.stringify(ua));

  if (ua !== '') {
    return res.status(403).send('Forbidden');
  }

  // ... rest of handler
};
