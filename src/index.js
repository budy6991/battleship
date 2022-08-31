import alertsomething from "./example"
import "./style.css"
import Icon from "./icon.png"

function consolelog() {
    console.log('Long live to greece')
}

const body = document.querySelector('body')

const myIcon = new Image()
myIcon.src = Icon

// body.appendChild(myIcon)

consolelog()

alertsomething()