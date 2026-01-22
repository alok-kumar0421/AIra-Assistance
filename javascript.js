let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
        let hours= day.getHours()
        console.log(hours)
        if(hours>=0 && hours<=12){
            speak("Good Morning Sir")
        }else if(hours>=12 && hours<4){
            speak("Good after noon sir")
        }else{
            speak("Good evening sir")
        }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")){
        speak("Hello sir, how can I help you?")
    }
    else if(message.includes("hu r u")||message.includes("who are you")){
        speak("I am Aira, virtual assistance, created by  mister Alok")
    }
    else if(message.includes("open youtube")){
        speak("Opening YouTube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("Opening google")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("Opening facebook")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("time")){
    let time = new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric"
    })
    speak(time)
}
else if(message.includes("date")){
    let time = new Date().toLocaleString(undefined, {
        day: "numeric",
        month: "short"
    })
    speak(time)
}
else if(message.includes("what can you do")){
        speak("what are going in your mind, i can do everything ,because i am very powwerfull assistance")
    }
    else if(message.includes("tumhara malik kaun hai")){
        speak("mere malik to mister Alok hai, unhone hi mujhe banaya hai")
    }
    else if(message.includes("would you like to marry me")||message.includes("do you like to marry me")||message.includes("like to marry me")){
        speak("No, i am virtual assistance, my gender is different, from Human, so i can marry with only Artificial intelligent, like, grok,chatgpt,gemini, recently i like deepseek")
    }
    else{
        speak(`this is what i found on internet about${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}