module.exports = function (req, res) {
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    ok: true,
    configured: Boolean(process.env.GEMINI_API_KEY),
    model: process.env.GEMINI_MODEL || "gemini-3.8-flash"
  });
};
