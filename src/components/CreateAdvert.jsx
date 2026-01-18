import React, { useState } from "react"
import upload from "../assets/upload.svg"
const CreateAdvert = () => {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    street: "",
    type: {
      house: true,
      apartment: false,
      room: false,
      studio: false,
    },
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: "",
    email: "",
    photos: [],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      type: {
        ...Object.fromEntries(
          Object.keys(prev.type).map((key) => [key, false])
        ),
        [type]: true,
      },
    }))
  }

  const handleNumberChange = (field, direction) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Math.max(1, prev[field] + (direction === "inc" ? 1 : -1)),
    }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photos: Array.from(e.target.files),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Дані форми:", formData)
    alert("Форма відправлена! 🔥")
  }

  return (
    <section>
      <h1 className="text-center text-[32px] mb-[36px] text-[#111111] font-bold">
        Створити оголошення
      </h1>

      <form
        onSubmit={handleSubmit}
        className=" border-[#266294] border-2 w-full"
      >
        <div className="flex-col gap-[20px] flex max-w-[500px] my-0 mx-auto mb-[64px]">
          <div>
            <h2 className="h2-create">Ваша країна</h2>
            <input
              name="country"
              type="text"
              className="input"
              placeholder="Введіть назву країни"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h2 className="h2-create">Вкажіть населений пункт</h2>
            <input
              name="city"
              type="text"
              className="input"
              placeholder="Населений пункт"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h2 className="h2-create">Вулиця, район міста</h2>
            <input
              name="street"
              type="text"
              className="input"
              placeholder="Наприклад, вул. Олімпійська"
              value={formData.street}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h2 className="h2-create">Тип приміщення</h2>
            <div className="flex items-center gap-[5px] justify-between">
              {["house", "apartment", "room", "studio"].map((type) => (
                <div key={type} className="flex gap-[10px] items-center">
                  <label htmlFor={type}>
                    {type === "house"
                      ? "Будинок"
                      : type === "apartment"
                      ? "Квартира"
                      : type === "room"
                      ? "Кімната"
                      : "Студія"}
                  </label>
                  <input
                    type="checkbox"
                    name={type}
                    checked={formData.type[type]}
                    onChange={() => handleCheckboxChange(type)}
                  />
                </div>
              ))}
            </div>
          </div>
          {["guests", "bedrooms", "beds", "bathrooms"].map((field) => (
            <div className="flex justify-between" key={field}>
              <p className="text-[24px] text-[#111111] font-normal">
                {
                  {
                    guests: "Гості",
                    bedrooms: "Спальні",
                    beds: "Ліжка",
                    bathrooms: "Ванні кімнати",
                  }[field]
                }
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleNumberChange(field, "dec")}
                >
                  -
                </button>
                <p className="text-[24px] font-bold">{formData[field]}</p>
                <button
                  type="button"
                  onClick={() => handleNumberChange(field, "inc")}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div>
            <h2 className="h2-create">Особливості приміщення</h2>
            <textarea
              name="description"
              className="border-[#266294] border-4 bg-transparent w-full h-[126px]"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div>
            <h2 className="h2-create">Завантажте фото</h2>
            <p className="text-[#766F6F] text-[16px] mb-[10px]">
              Щоб розпочати, потрібно зробити 5 фотографій.
            </p>
            <div className="border-[#266294] border-2 w-full  flex items-center justify-center flex-col gap-[20px] p-[40px] h-full">
              <img src={upload} alt="Upload" />

              <span className="text-[24px] font-bold text-[#111111]">
                Перетягніть фотографії сюди
              </span>
              <label htmlFor="file-input" className="cursor-pointer">
                <span className="text-[#111111] underline text-[20px]">
                  Завантажити зі свого присторою
                </span>
              </label>
              <input
                multiple
                type="file"
                id="file-input"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div>
            <h2 className="h2-create">Email для підтвердження</h2>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Введіть email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#266294] text-[20px] text-[#EBF8FF] h-[52px] hover:bg-[#B5D9F8] transition-all  border-[4px]"
          >
            Підтвердити
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateAdvert
