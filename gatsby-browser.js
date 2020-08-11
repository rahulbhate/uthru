import "./src/styles/global.css"
const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }
  
  export const onClientEntry = () => {
    window.onload = () => {
      addScript("https://js.createsend1.com/javascript/copypastesubscribeformlogic.js")
      addScript("http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js")
    }
  }