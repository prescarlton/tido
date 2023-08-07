/* converts JS object into query params */
const querify = (data: { [k: string]: string | number | boolean }) => {
  return (
    Object.keys(data).length > 0 &&
    "?" +
      Object.keys(data)
        .map((k) => `${k}=${data[k]?.toString()}`)
        .join("&")
  )
}

export default querify
