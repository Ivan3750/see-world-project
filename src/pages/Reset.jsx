import { useState } from "react"
import { Link } from "react-router-dom"

const PasswordReset = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [message, setMessage] = useState("")



  return (
    <form
      className="max-w-[450px] px-[24px] py-[40px] border m-auto my-3 box-border h-[450px]"
    >
      <h1 className="text-[#111111] font-bold text-[28px] text-center mb-[15px]">
        Відновлення паролю
      </h1>
      <p className="text-[#111111] font-normal text-[16px] text-center mb-[15px]">
      Введіть email на який ви проходили
      реєстрацію, ми відправимо інструкції      </p>

      <input
        type="text"
        name="emailOrPhone"
        placeholder="Email*"
        value={emailOrPhone}
        onChange={(e) => setEmailOrPhone(e.target.value)}

      />
 <Link
          to="/login"
          className="text-[#766F6F] font-normal text-[18px] my-[15px] text-center block underline"
        >
          Згадали пароль?
        </Link>
      <button
        type="submit"
        className="mt-2 bg-[#266294] text-white py-2 px-4 w-full"
      >
Відправити запит      </button>


      {message && (
        <p className="text-center text-red-600 font-medium mt-4">{message}</p>
      )}
    </form>
  )
}

export default PasswordReset
