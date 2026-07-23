export default async function handler(req, res) {
  if (req.method !== "GET") {
  return res.status(405).json({
    error: "Method not allowed"
  });
}

  try {
    const response = await fetch("https://verification.didit.me/v3/session/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.DIDIT_SECRET_KEY
      },
      body: JSON.stringify({
        workflow_id: process.env.DIDIT_WORKFLOW_ID,
        vendor_data: `guest-${Date.now()}`
      })
    });

    const data = await response.json();

    return res.status(response.status).json(data);

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}
