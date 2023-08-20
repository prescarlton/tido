import { JSONContent } from "@tiptap/core"
import { isArray } from "lodash"

const convertRawFromJSON = (
  rawContent?: string | JSONContent | JSONContent[] | null
) => {
  if (!rawContent) return rawContent
  // try to convert the content into a string (if it hasn't already been parsed)
  let parsedContent: JSONContent | JSONContent[]
  if (typeof rawContent != "string") {
    parsedContent = rawContent
  } else {
    try {
      parsedContent = JSON.parse(rawContent)
    } catch (err) {
      throw new Error("Invalid Description")
    }
  }
  let contentList: JSONContent[] = []
  if (isArray(parsedContent)) {
    contentList = contentList.concat(parsedContent)
  } else {
    contentList.push(parsedContent)
  }

  let textContent = ""
  // recursively get all text nodes from the parsedContent and add it to textContent
  contentList?.forEach((content) => {
    if (content.content) {
      textContent += convertRawFromJSON(content.content) || ""
    } else {
      textContent += content.text || ""
    }
  })
  return textContent
}

export default convertRawFromJSON
