import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  })

  const [loginMethod, setLoginMethod] = useState("email")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleMethodChange = (method) => {
    setLoginMethod(method)
    setFormData({ emailOrPhone: "", password: "" })
    setMessage("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailOrPhone: formData.emailOrPhone,
          password: formData.password,
        }),
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
    <form
      onSubmit={handleSubmit}
      className="max-w-[450px] px-[24px] py-[40px] border m-auto my-3 box-border"
    >
      <h1 className="text-[#111111] font-bold text-[32px] text-center mb-[15px]">
        Увійти
      </h1>
      <p className="text-[#111111] font-normal text-[18px] text-center mb-[15px]">
        Увійдіть, щоб отримати можливість запропонувати своє житло
      </p>

      <div className="flex justify-around mb-4">
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            checked={loginMethod === "phone"}
            onChange={() => handleMethodChange("phone")}
            className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm checked:bg-[#266294] checked:border-[#266294] transition duration-200 "
          />{" "}
          Номер телефону
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            checked={loginMethod === "email"}
            onChange={() => handleMethodChange("email")}
            className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm checked:bg-[#266294] checked:border-[#266294] transition duration-200 "
          />{" "}
          Email
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type={loginMethod === "email" ? "email" : "tel"}
          name="emailOrPhone"
          placeholder={loginMethod === "email" ? "Email*" : "Номер телефону*"}
          value={formData.emailOrPhone}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль*"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <p className="text-[#766F6F] font-normal text-[18px] text-center block underline mt-[10px]">
        Забули пароль?
      </p>

      <button
        type="submit"
        className="mt-5 bg-[#266294] text-white py-2 px-4 w-full"
      >
        Увійти
      </button>

      <p className="text-[#111111] font-bold text-[20px] text-center my-[15px]">
        Не маєте акаунту?
      </p>
      <Link
        to="/regestation"
        className="text-[#766F6F] font-normal text-[18px] text-center block underline"
      >
        Зареєструйтесь
      </Link>

      {message && (
        <p className="text-center text-red-600 font-medium mt-4">{message}</p>
      )}
    </form>
  )
}

export default Login
