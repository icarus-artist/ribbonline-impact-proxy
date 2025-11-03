// api/health.js
export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: 'ribbonline-impact-proxy',
    time: new Date().toISOString(),
  });
}
