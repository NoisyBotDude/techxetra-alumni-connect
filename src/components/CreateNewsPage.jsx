"use client";

import React, { useState } from "react";
import { Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

const CreateNewsPage = ({ type }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    content: "",
    imageUrl: "",
    tags: "",
    size: "small",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, type, tags: formData.tags.split(",") }),
      });
      if (response.ok) {
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} created successfully!`);
        router.push("/");
      } else {
        alert("Failed to create entry. Please try again.");
      }
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-purple-700 via-blue-700 to-indigo-900 min-h-screen text-white rounded-lg">
      <Typography variant="h4" className="font-bold text-center mb-6">
        Create {type.charAt(0).toUpperCase() + type.slice(1)}
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField
          fullWidth
          variant="outlined"
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="bg-white rounded-lg text-gray-800"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={4}
          className="bg-white rounded-lg text-gray-800"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Date"
          name="date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={handleChange}
          className="bg-white rounded-lg text-gray-800"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          multiline
          rows={6}
          className="bg-white rounded-lg text-gray-800"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Image URL"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="bg-white rounded-lg text-gray-800"
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Tags (comma-separated)"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="bg-white rounded-lg text-gray-800"
        />
        <FormControl fullWidth variant="outlined" className="bg-white rounded-lg">
          <InputLabel>Size</InputLabel>
          <Select
            label="Size"
            name="size"
            value={formData.size}
            onChange={handleChange}
          >
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-bold py-2"
        >
          Create {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      </form>
    </div>
  );
};

export default CreateNewsPage;