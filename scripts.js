
let stream = null // init stream var so we can use anywhere
const constraints = {
    video: true, // use yout headphones, or be prepared for feedback
    audio: true
}

const getMicAndCamera = async () => {
    
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints)
        console.log(stream)
    } catch (err) {
        // user denied acess to constraints
        console.log(err)    
    }
} 

document.querySelector('#share').addEventListener('click',e=>getMicAndCamera(e))