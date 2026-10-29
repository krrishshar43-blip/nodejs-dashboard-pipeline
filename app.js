const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DevOps CI/CD Dashboard</title>
      <style>
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: #e2e8f0;
        }
        header {
          padding: 25px 8%;
          background: #111c33;
          border-bottom: 1px solid #334155;
        }
        header h1 { margin: 0; color: #38bdf8; }
        header p { color: #94a3b8; margin-bottom: 0; }
        main { max-width: 1000px; margin: 45px auto; padding: 0 20px; }
        .hero {
          padding: 35px;
          background: #1e293b;
          border-radius: 16px;
          margin-bottom: 25px;
        }
        .hero h2 { font-size: 30px; margin-top: 0; }
        .status {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 20px;
          background: #14532d;
          color: #86efac;
          font-weight: bold;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 18px;
        }
        .card {
          background: #1e293b;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #334155;
        }
        .card h3 { color: #38bdf8; }
        .card p { color: #cbd5e1; line-height: 1.6; }
        footer {
          text-align: center;
          padding: 25px;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>DevOps Dashboard</h1>
        <p>Continuous Integration & Continuous Delivery Project</p>
      </header>
      <main>
        <section class="hero">
          <span class="status">● Application Running</span>
          <h2>Welcome to My CI/CD Project</h2>
          <p>This project demonstrates a Node.js application, Docker containerization, GitHub source control, and a Jenkins pipeline.</p>
        </section>
        <section class="cards">
          <div class="card">
            <h3>01. Source Code</h3>
            <p>GitHub is used to store and manage the application code.</p>
          </div>
          <div class="card">
            <h3>02. Testing</h3>
            <p>Automated syntax validation checks the JavaScript application.</p>
          </div>
          <div class="card">
            <h3>03. Containerization</h3>
            <p>Docker packages the Node.js application into a container image.</p>
          </div>
          <div class="card">
            <h3>04. CI/CD Pipeline</h3>
            <p>Jenkins runs pipeline stages to demonstrate the delivery workflow.</p>
          </div>
        </section>
      </main>
      <footer>Built as a DevOps learning project | Node.js + Docker + Jenkins</footer>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("DevOps Dashboard running on port 3000");
});