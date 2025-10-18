// Simple test script to debug the API
const fetch = require("node-fetch");

async function testAPI() {
  try {
    console.log("🧪 Testing backend API...");

    const response = await fetch("http://localhost:3001/api/match-company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_name: "Test Company",
        sector: "E-commerce",
        requirements: "We need help with marketing",
      }),
    });

    console.log("Response status:", response.status);
    console.log(
      "Response headers:",
      Object.fromEntries(response.headers.entries())
    );

    const data = await response.text();
    console.log("Response body:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

testAPI();
