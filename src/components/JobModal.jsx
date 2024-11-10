import React, { useState } from 'react';
import CreateJobModal from './CreateJobModal';
import { Button } from '@mui/material';

const JobsModal = (props) => {
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);

  const handleAddJobs = async (data) => {
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

  console.log("news comp: ", props.data);

  return (
    <div>
      <Button onClick={() => setIsNewsModalOpen(true)}>Add News</Button>
      {isNewsModalOpen && (
        <CreateJobModal
          handleAddJob={handleAddJobs}
          onClose={() => setIsNewsModalOpen(false)}
          data={props.data}
        />
      )}
    </div>
  );
};

export default JobsModal;