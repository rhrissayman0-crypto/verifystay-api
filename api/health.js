export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: "VerifyStay API is running 🚀",
    status: "healthy"
  });
}
