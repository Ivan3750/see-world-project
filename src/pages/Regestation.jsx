import { useState } from "react"
import { Link } from "react-router-dom"

const Regestation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
    confirmPassword: ""
  })

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      return setMessage("❌ Паролі не співпадають")
    }

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          birthDate: formData.birthDate,
          password: formData.password
        })
      })

      const data = await response.json()
      if (response.ok) {
        setMessage(data.message)
      } else {
        setMessage(data.error)   
      }
    } catch (error) {
      setMessage("❌ Помилка підключення до сервера")
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-[450px] px-[24px] py-[40px] border m-auto my-3 box-border"
      >
        <h1 className="text-[#111111] font-bold text-[32px] text-center mb-[15px]">
          Зареєструватися
        </h1>
        <p className="text-[#111111] font-normal text-[18px] text-center mb-[15px]">
          Зареєструйтесь, щоб отримати можливість забронювати житло
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="Ваше ім'я*"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Прізвище*"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефону*"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="date"
            name="birthDate"
            placeholder="Ваш вік*"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>

        <h2 className="text-[#111111] font-bold text-[24px] text-left my-[15px]">
          Придумайте пароль
        </h2>
        <div className="flex flex-col gap-3">
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Підтвердіть пароль"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <p className="text-[#111111] font-bold text-[20px] text-center my-[15px]">
          Вже маєте акаунт?
        </p>
        <Link
          to="/login"
          className="text-[#766F6F] font-normal text-[18px] text-center block underline"
        >
          Авторизуйтесь
        </Link>

        {message && (
          <p className="text-center text-red-600 font-medium mt-4">{message}</p>
        )}

        <button
          type="submit"
          className="mt-5 bg-[#266294] text-white py-2 px-4 w-full "
        >
          Зареєструватися
        </button>
      </form>
    </>
  )
}

export default Regestation
