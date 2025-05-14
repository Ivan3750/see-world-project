const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, birthDate, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({ firstName, lastName, email, phone, birthDate, password: hashedPassword })
    await user.save()

    res.status(201).json({ message: '✅ Користувач зареєстрований' })
  } catch (err) {
    res.status(500).json({ error: '❌ Помилка реєстрації' })
  }
})


router.post('/login', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body

    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
    })

    if (!user) return res.status(404).json({ error: '❌ Користувач не знайдений' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(401).json({ error: '❌ Невірний пароль' })

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' })

    res.json({ message: '✅ Вхід успішний', token })
  } catch (err) {
    res.status(500).json({ error: '❌ Помилка входу' })
  }
})

module.exports = router
