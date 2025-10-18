import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from project root
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "..", "frontend")));
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "Mentor Matching Backend" });
});

app.post("/api/match-company", async (req, res) => {
  try {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      return res.status(500).json({
        error: "Webhook URL not configured",
        message: "Please set N8N_WEBHOOK_URL environment variable",
      });
    }

    console.log("Received mentor matching request:", {
      company: req.body.company_name,
      sector: req.body.sector,
      timestamp: new Date().toISOString(),
    });

    // Forward request to n8n webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(
        `n8n webhook error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    console.log("Mentor matching completed:", {
      company: req.body.company_name,
      matches: data.matches?.length || 0,
      timestamp: new Date().toISOString(),
    });

    res.json(data);
  } catch (error) {
    console.error("Mentor matching error:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Mentor Matching Backend running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 API endpoint: http://localhost:${PORT}/api/match-company`);
});
