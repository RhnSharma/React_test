import hljs from "highlight.js"
import "highlight.js/styles/base16/dracula.css"

hljs.configure({
  languages: ["php", "javascript", "json", "bash", "scss", 'css', 'html'],
})

const highlightCode = () => {
  const codes = document.querySelectorAll("pre > code")
  for (let key in codes) {
    if (typeof codes[key] === "object") {
      hljs.highlightElement(codes[key])
    }
  }
}

export default { highlightCode }