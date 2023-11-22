// cute lil helper method to get a cookie by name
const getCookie = (name: string) =>
  document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || ""
export default getCookie
