// Sends the unanswered question to your staff via a webhook (Slack, Discord, or any URL).
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  const { name = '', phone = '', question = '', history = [] } = req.body || {};
  if (!name.trim() || !/^[0-9+\-\s]{8,15}$/.test(phone)) return res.status(400).json({ error: 'Name and valid phone required' });
  const ticket = 'T' + Date.now().toString(36).toUpperCase().slice(-6);
  const text = `New help-desk ticket ${ticket}\nName: ${name}\nPhone: ${phone}\nQuestion: ${question}\nRecent chat: ${JSON.stringify(history).slice(0, 800)}`;
  console.log(text);
  if (process.env.WEBHOOK_URL) {
    try { await fetch(process.env.WEBHOOK_URL, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ text, content: text }) }); } catch (e) {}
  }
  res.json({ ticket, execPhone: process.env.EXEC_PHONE || '' });
};
