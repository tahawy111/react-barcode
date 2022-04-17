import React, { useState, useCallback } from "react";
import BarcodeReader from "react-barcode-reader";

const Test = () => {
  const [result, setResult] = useState("No result");

  const handleScan = useCallback((data) => {
    setResult(data);
  }, []);
  return (
    <div>
      <BarcodeReader onScan={handleScan} />
      <p>{result}</p>
    </div>
  );
};

export default Test;
