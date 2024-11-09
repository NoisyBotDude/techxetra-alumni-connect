'use client'
import React, { useState } from "react";
import { Box, Radio, Typography, IconButton, TextField, MenuItem, Button, FormControl, RadioGroup, FormControlLabel } from "@mui/material";
import { Close, PhotoCamera } from "@mui/icons-material";

const CreateNewsModal = ({ handleAddNews, onClose, data }) => {
  const [title, setTitle] = useState('');
  const [newsType, setNewsType] = useState('news');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Box
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90"
      sx={{ zIndex: 1300 }}
    >
      <Box className="flex flex-col items-center w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg">
        <Box className="flex justify-between items-center w-full p-4 border-b border-gray-700">
          <Typography variant="h6">Create News</Typography>
          <IconButton className="text-gray-400" onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Box className="overflow-y-auto w-full p-4" sx={{ maxHeight: '60vh' }}>
          {/* Cover Image Upload Section */}
          <Box className="flex flex-col items-center w-full mb-4 p-4 bg-gray-700 rounded-md">
            <IconButton color="primary" component="label" className="text-gray-400">
              <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
              <PhotoCamera sx={{ fontSize: 40 }} />
            </IconButton>
            <Typography variant="body2" className="text-gray-400">
              Upload cover image
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Minimum width 480 pixels, 16:9 recommended
            </Typography>
          </Box>

          {/* News Title */}
          <Typography variant="body2" className="text-gray-400 mb-1">News Title</Typography>
          <TextField
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4"
            InputProps={{ className: "bg-gray-700 text-white" }}
          />

          {/* News Type */}
          <FormControl component="fieldset" className="w-full mb-4">
            <Typography variant="body2" className="text-gray-400 mb-1">News Type</Typography>
            <RadioGroup
              row
              value={newsType}
              onChange={(e) => setNewsType(e.target.value)}
            >
              <FormControlLabel value="news" control={<Radio />} label="News" />
              <FormControlLabel value="announcement" control={<Radio />} label="Announcement" />
              <FormControlLabel value="event" control={<Radio />} label="Event" />
              <FormControlLabel value="achievement" control={<Radio />} label="Achievement" />
            </RadioGroup>
          </FormControl>

          {/* Description */}
          <TextField
            label="Description"
            multiline
            rows={2}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            className="bg-gray-700 text-white mb-4"
            InputLabelProps={{ className: "text-gray-400" }}
          />

          {/* Content */}
          <TextField
            label="Content"
            multiline
            rows={4}
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
            variant="outlined"
            className="bg-gray-700 text-white mb-4"
            InputLabelProps={{ className: "text-gray-400" }}
          />

          {/* Tags */}
          <TextField
            label="Tags (comma-separated)"
            type="text"
            fullWidth
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mb-4"
            InputProps={{ className: "bg-gray-700 text-white" }}
          />
        </Box>

        {/* Footer Actions */}
        <Box className="flex justify-end w-full p-4 border-t border-gray-700">
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 text-white"
            onClick={() => handleAddNews({
              title,
              type: newsType,
              description,
              content,
              tags: tags.split(",").map(tag => tag.trim()),
              image,
              authorIds: [data.userId]
            })}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNewsModal;