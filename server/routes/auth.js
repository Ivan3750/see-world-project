const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = express.Router()

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, birthDate, password } = req.body

    if (!firstName || !lastName || !email || !phone || !birthDate || !password) {
      return res.status(400).json({ error: ' Усі поля мають бути заповнені' })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: ' Некоректний email' })
    }

    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { phone }]
    })
    if (existingUser) {
      return res.status(409).json({ error: ' Користувач з таким email або телефоном вже існує' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({
      firstName,
      lastName,
      email: email.toLowerCase(),
      phone,
      birthDate,
      password: hashedPassword
    })

    await user.save()

    const tokenPayload = {
      userId: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    }
    const token = jwt.sign(tokenPayload, "SeeWorld05607", { expiresIn: '7d' })

    res.status(201).json({
      message: ' Користувач успішно зареєстрований',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone
      }
    })
  } catch (err) {
    console.error('Помилка реєстрації:', err)
    res.status(500).json({ error: ' Помилка сервера при реєстрації' })
  }
})


router.post('/login', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body

    if (!emailOrPhone || !password) {
      return res.status(400).json({ error: ' Вкажіть email/телефон та пароль' })
    }
    const user = await User.findOne({
      $or: [
        { email: emailOrPhone.toLowerCase() },
        { phone: emailOrPhone }
      ]
    })

    if (!user) return res.status(404).json({ error: ' Користувач не знайдений' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(401).json({ error: ' Невірний пароль' })

    const tokenPayload = {
      userId: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    }
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.json({
      message: ' Вхід успішний',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone
      }
    })
  } catch (err) {
    console.error('Помилка входу:', err)
    res.status(500).json({ error: ' Помилка сервера при вході' })
  }
})

module.exports = router
