const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
const fs = require("fs")
const authRoutes = require("./routes/auth")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)


const clientPath = path.join(__dirname, "../build")

if (fs.existsSync(clientPath)) {
  console.log("🧠 React клієнт підключено з:", clientPath)

  app.use("/see-world-project", express.static(clientPath))

  app.get("/see-world-project/*", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"))
  })
} else {
  console.warn("⚠️ React frontend не знайдено. Лише API працює.")
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Базу даних підключено")
    app.listen(PORT, () => console.log(`🚀 Сайт запущено на порту ${PORT}`))
  })
  .catch((err) => {
    console.error("❌ Базу даних не підключено:", err)
  })
