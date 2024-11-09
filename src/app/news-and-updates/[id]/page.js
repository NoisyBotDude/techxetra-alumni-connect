"use client"

import React from 'react';
import { Avatar, Button, Typography, IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import EventIcon from '@mui/icons-material/Event';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const NewsDetail = ({ news }) => {
  const suggestions = [
    {
      title: 'Next Workshop on Cloud Computing',
      type: 'event',
      date: 'March 25, 2024',
    },
    {
      title: 'Celebrating Campus Achievements',
      type: 'achievement',
      date: 'March 12, 2024',
    },
    {
      title: 'Library Renovation Complete!',
      type: 'announcement',
      date: 'March 5, 2024',
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'announcement':
        return <AnnouncementIcon className="text-pink-500" />;
      case 'event':
        return <EventIcon className="text-green-500" />;
      case 'achievement':
        return <EmojiEventsIcon className="text-yellow-500" />;
      default:
        return <AnnouncementIcon />;
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Main News Content */}
      <div className="mb-10">
        <div className="relative">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <IconButton className="bg-white text-indigo-700 hover:bg-gray-200">
              <BookmarkIcon />
            </IconButton>
            <IconButton className="bg-white text-indigo-700 hover:bg-gray-200">
              <ShareIcon />
            </IconButton>
          </div>
        </div>
        <Typography variant="h3" className="text-purple-700 font-extrabold mt-6">
          {news.title}
        </Typography>
        <Typography variant="body1" className="text-gray-500 mb-4">
          {news.date}
        </Typography>
        <Typography variant="body1" className="text-gray-800 mb-6 leading-relaxed">
          {news.content}
        </Typography>
      </div>

      {/* Suggested News Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-700 p-6 rounded-xl shadow-lg">
        <Typography variant="h5" className="text-white font-bold mb-4">
          You May Also Like
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestions.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-2 mb-2">
                <Avatar className="bg-gray-100 text-indigo-700">{getIcon(item.type)}</Avatar>
                <Typography variant="body2" className="text-gray-500">
                  {item.date}
                </Typography>
              </div>
              <Typography variant="h6" className="font-semibold text-gray-800 mb-2">
                {item.title}
              </Typography>
              <IconButton className="text-indigo-600 hover:text-indigo-800 transition duration-300">
                <ArrowForwardIcon />
              </IconButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sample data for the news article
const sampleNews = {
  title: 'Celebrating Excellence: Awards for Our Top Students',
  date: 'March 20, 2024',
  content: `Our institution is proud to announce the annual excellence awards for outstanding students who have demonstrated remarkable achievements in academics, sports, and community service. Join us in celebrating the success of these students and their inspiring contributions.`,
  imageUrl: 'https://via.placeholder.com/800x400', // Placeholder image URL
};

const NewsPage = () => <NewsDetail news={sampleNews} />;

export default NewsPage;