import React, { useEffect } from "react";
import { usePorcupine } from "@picovoice/porcupine-react";
import heyGraceKeywordModel from "./WakeWord/Hey_grace";
import PORCUPINE_MODEL_BASE64 from "./WakeWord/porcupine_params.pv";

function VoiceWidget(props) {
  const {
    keywordDetection,
    isLoaded,
    isListening,
    error,
    init,
    start,
    stop,
    release,
  } = usePorcupine();

  const porcupineKeyword = { 
    publicPath: heyGraceKeywordModel,
    label: "Hey Grace" // An arbitrary string used to identify the keyword once the detection occurs.
  };
  
  const porcupineModel = { base64: PORCUPINE_MODEL_BASE64 };

  useEffect(() => {
    const initialize = async () => {
      await init(
        "JLTi5rk0x1BJGrjPF4G5SwpU67bgIddGTKwlZyWH8+BQwWo3dw94qA==",
        porcupineKeyword,
        porcupineModel
      );
    //   await start(); // Start listening after initialization
    };

    initialize();
  }, [init, start, porcupineKeyword, porcupineModel]); // Add dependencies if needed

  useEffect(() => {
    if (keywordDetection !== null) {
      // ... use keyword detection result
      alert("heeyyyyy na vanthutaaaa..........");
    }
  }, [keywordDetection]);

  
}

export default VoiceWidget;
