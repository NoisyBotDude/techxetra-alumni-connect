import React, { useState } from 'react';
import CreateNewsModal from './CreateNewsModal';
import { Button } from '@mui/material';

const NewsModal = (props) => {
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);

  const handleAddNews = async (data) => {
    const response = await fetch('/api/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('News created successfully');
      setIsNewsModalOpen(false);
    } else {
      console.error('Failed to create news');
    }
  };

  return (
    <div>
      <Button onClick={() => setIsNewsModalOpen(true)}>Add News</Button>
      {isNewsModalOpen && (
        <CreateNewsModal
          handleAddNews={handleAddNews}
          onClose={() => setIsNewsModalOpen(false)}
          data={props.data}
        />
      )}
    </div>
  );
};

export default NewsModal;