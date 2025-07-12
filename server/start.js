const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const authRoutes = require("./routes/auth")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "*",
  credentials: true,
}))
app.use(express.json())

app.use("/api/auth", authRoutes)

mongoose
  .connect("mongodb+srv://kohan3750:Sa4tzVgHxjmCUM8L@cluster0.vdi3teq.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ База даних підключена")
    app.listen(PORT, () => {
      console.log(`🚀 Сервер запущено на порту ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("❌ Помилка підключення до бази:", err)
  })
