// src/components/UploadDocument.tsx
import React from 'react';

interface UploadDocumentProps {
  setDocumentText: (text: string) => void;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({ setDocumentText }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setDocumentText(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Upload Document</h2>
      <input type="file" accept=".pdf,.txt" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadDocument;
