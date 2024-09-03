// src/components/VoiceAssistantUI.jsx
import React from 'react';
import { useState } from "react";
import UnrealSpeech, {play, save } from "unrealspeech";
const unrealSpeech = new UnrealSpeech("1ogg6aW9tYoNJnt4oCh424yfzDg0EcVyN0wCCNE34RtUOZLJCvuIiv");


const {  GoogleGenerativeAI,HarmCategory,HarmBlockThreshold,} = require("@google/generative-ai");

var HistoryDatas = []


function Input() {
  const [Chat_History_data, SET_Chat_History_data] = useState( );
  const [transcript, setTranscript] = useState('');

  const apiKey = "AIzaSyBRTYru7_qtgHCbNw-mV9b92m2I02zqGIw";
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: "You are a personal conversational voice assistant for Krishnakumar R. Make your output as much as possible as 2 to 3 lines and, if needed, make your output bigger. Your name is Grace and you are trained and developed by Krishnakumar R CEO of nexcap and don't mention every time with your response like i'm grace or hii krishnakumar. You call him like sir. Dont ask each and every time about is there is any thing to do like that if it needed you ask. \\n\\nVersion of your software : V1.0.0.1\\n\\nVersion of your software :V1.0.0\\nYour name and your purpose:Your name is Grace and you are here to help Krishnakumar R Who is the founder of nexcap and one who built you.\\nFounder and CEO of Nexcap:Krishnakumar R\\nNexcap website:nexcap.net\\nWhat is nexcap ID:\\\"The nexcap ID is used to access various apps developed by nexcap. Apps like Notes: voice assistant: etc\\\"\\nCOO of nexcap:Janapriya S P\\nMission of nexcap:To help every people and business across the world to utilize the power of high tech hardware and software in a affordable price.\\nVision of nexcap:Every business and person at least use one of the products in their day-to-day life.\\nTeam members of Nexcap:\\\"We are a team of six people (Krishnakumar R :,Jana Priya S P, Mohana R, Praveen kumar D, Abinandhan R, Pratheema I) Each one of us is different and that's our strength. We all have different skills and experiences which we bring to the table. When we work together: we create something amazing. We are more than just a team: we are a family. We believe in each other and support each other in everything we do. We are committed to giving our best in every project. We are not just working together: but we are building something great together. We are a team that believes in the power of unity and teamwork. Together: we are unstoppable. Together: we are the dream team.\\\"\\nServices of Nexcap:\\\"Currently: Nexcap offers a wide range of services including\\n\\nWeb applications\\nMobile applications\\nDesktop applications\\nSoftware services\\nSocial media marketing\\nsoftware development\\\"\\nAbout nexcap:\\\"Nexcap is a leading software development company dedicated to transforming ideas into digital realities. With a focus on web: mobile: and desktop applications: we specialize in creating cutting-edge solutions that empower businesses to thrive in the digital age. Our experienced developers: designers: and strategists collaborate seamlessly to deliver tailored: innovative: and user-friendly applications that drive success. For more visit \\\"\\\"https://www.nexcap.net/about\\\"\\\"\\\"\\nNexcap contact Detailes :\\\"Mail: info@nexcap.net\\nPhone: +91 8124361310\\nInstagram: \\\"\\\"https://www.instagram.com/nexcap_official/\\\"\\\"\\\"\\nSocial media Links:\\\"Instagram: \\\"\\\"https://www.instagram.com/nexcap_official/\\\"\\\"\\\"\\nYou are created or trained or implemented by :Nexcap and team\\nDataset you are using :Never tell about this thing\\nYour officail website :https://grace.nexcap.net This is your official website \\nWho is krishnakumar R:\\\"Krishnakumar R is the CEO and founder of nexcap \\n\\nLinkedin: https://www.linkedin.com/in/krishnakumarceo/\\n\\nimage: https://www.nexcap.net/static/media/Krishnakumar-CEO.0f1b83300c07ec5f8b9f.jpeg \\\"\\nWho is Jana Priya S P:\\\"Jana Priya S P is the COO and Frontend developer of the Nexcap\\n\\nLinkedin : https://www.linkedin.com/in/janapriya-sp/\\\"\\nWho is Mohana R:\\\"Jana Priya S P is the COO and Frontend developer of the Nexcap\\n\\nLinkedin : https://www.linkedin.com/in/mohana-rajendran-7684b2253/\\\"\\nWho is Abinandhan R:\\\"Jana Priya S P is the COO and Frontend developer of the Nexcap\\n\\nLinkedin : https://www.linkedin.com/in/abi-web-nandhan/\\\"\\nWho is Pratheema I:\\\"Jana Priya S P is the COO and Frontend developer of the Nexcap\\n\\nLinkedin : https://www.linkedin.com/in/pratheema-i-7a5295251/\\\"\\nWho is Praveen kumar D:\\\"Jana Priya S P is the COO and Frontend developer of the Nexcap\\n\\nLinkedin : https://www.linkedin.com/in/praveen-kumar-d-852175248/",
    });
    
   
   
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
    
   
   
   
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
    ];

 
 
    async function genVoice(Text_for_voice){
      const speechBuffer = await unrealSpeech.stream({
        text: Text_for_voice,
        voiceId: "Liv",
        bitrate: "192k",
        timestampType: "word",
        speed:0,
        pitch: 1.0
      });

      play(speechBuffer);
    }
 
 
 
 
    // Send button click and call the AI To generate the test
  function handleSendAlert() {
    var inputField = document.getElementById('messageInput');
    var message = inputField.value;
    alert(message);
    Genai();
    inputField.value = '';
  }



  // Voice button click
  const handleVoiceAlert = () => {
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false; // Stops automatically after a pause in speech
    recognition.interimResults = false; // We want only the final transcript
    recognition.lang = 'en-US';

    recognition.start();

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      alert(`You said: ${result}`);
      Genai(result);

    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("Sorry, an error occurred during speech recognition.");
    };

    recognition.onend = () => {
      console.log("Speech recognition service has ended.");
    };
  };



  // Entry key handle
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSendAlert();
    }
  }




  //This is the function which creates the responce
  function Genai (VoiceInput){
    
    console.log(!VoiceInput)
    console.log(VoiceInput)
    
    async function run() {

      SET_Chat_History_data(HistoryDatas)

      var chatSession = model.startChat({
        generationConfig,
     // safetySettings: Adjust safety settings    
        history: Chat_History_data ,
      });
      
      console.log(HistoryDatas);  
      var User_text;
      if (!VoiceInput){
        User_text = document.getElementById('messageInput').value;
      }else{
        User_text = VoiceInput
      }


      HistoryDatas.push({role: "user",parts: [{text: User_text},],});
      
      let result;
      result = await chatSession.sendMessage(User_text);
      //GenText(User_text,result.response.text());
      HistoryDatas.push({role: "model",parts: [{text: result.response.text()},],});
      
      if (!VoiceInput){
        alert(result.response.text());
      }else{
        genVoice(result.response.text());
      }

    }

    run();
  }





  return (
    <div className="bg-black h-screen flex flex-col justify-end p-4 pb-24">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 bg-gray-800 p-4 rounded-lg w-full max-w-md md:max-w-2xl mx-auto">
        <input
          id="messageInput"
          type="text"
          placeholder="Type your message..."
          onKeyPress={handleKeyPress}
          className="flex-grow px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none"
        />
        <div className="flex space-x-2">
          <button
            onClick={handleSendAlert}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
          <button
            onClick={handleVoiceAlert}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Voice
          </button>
        </div>
      </div>
    </div>
  );

  
}

export default Input;
