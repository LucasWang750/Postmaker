import { createWorker } from 'tesseract.js';
import React, { useEffect, useState } from 'react';



function Recognize(props) {

  const worker = createWorker({
    logger: m => console.log(m),
  });

  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(props.images.secure_url);
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing...');

  useEffect(() => {
    doOCR();
  });

  console.log(ocr);

  return (
      <p className="middle text">{ocr}</p>
  );
}

export default Recognize;