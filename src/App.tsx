// src/App.tsx
import React, { useState } from 'react';
import UploadDocument from './components/UploadDocument';
import SearchPane from './components/SearchPane';

const App: React.FC = () => {
  const [documentText, setDocumentText] = useState<string>('');

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4 border-r border-gray-200">
        <UploadDocument setDocumentText={setDocumentText} />
      </div>
      <div className="w-2/3 p-4">
        <SearchPane documentText={documentText} />
      </div>
    </div>
  );
};

export default App;
