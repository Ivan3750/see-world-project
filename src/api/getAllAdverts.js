export const getAllAdverts = async ()=> {
  return  await fetch("https://68654bdb5b5d8d033980a51b.mockapi.io/adverts").then(res=> res.json())
}