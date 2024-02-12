// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const getAllDonuts = async() => {
  const response = await fetch('http://localhost:9000/donut/')
  const donut = await response.json()
  return donut
}

export const getDonut = async(id) => {
const response = await fetch('http://localhost:9000/donut/' + id)
const donut = await response.json()
return donut
}

export const deleteDonut = async (id) => {
  const response = await fetch('http://localhost:9000/donut/'+ id, {
      method: 'DELETE'
  })
  const donutDelete = await response.json()
  if(donutDelete.error) console.log(donutDelete.error)
  console.log('todo fue bien')
  return
}

export const updateDonut = async(id, bodyParam) => {
  const response = await fetch('http://localhost:9000/donut/' + id, {
    method: 'PUT',
    headers: { "Content-type": "application/json"},
    body: JSON.stringify(bodyParam)
  })
  const donutUpdated = await response.json()
  if(donutUpdated.error) {console.log(error)}
  else {console.log(donutUpdated)}
return donutUpdated
}

export const createDonut = async(bodyParam) =>{
  const response = await fetch('http://localhost:9000/donut/', {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(bodyParam)
  })
  const donutCreated = await response.json()
  if(donutCreated.error) console.log(error)
  console.log(donutCreated)
return
}