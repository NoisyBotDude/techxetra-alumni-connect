import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, IconButton } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import EventIcon from '@mui/icons-material/Event';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Sample news items data
const newsItems = [
  {
    title: 'Upcoming Workshop on AI',
    description: 'Join our AI workshop to enhance your skills. Limited slots available!',
    type: 'event',
    date: 'March 20, 2024',
    size: 'large',
  },
  {
    title: 'New Achievements by Our Students',
    description: 'Our students won the regional coding competition! Congratulations to all winners.',
    type: 'achievement',
    date: 'March 15, 2024',
    size: 'small',
  },
  {
    title: 'Important Announcement',
    description: 'Campus will be closed on March 22 for a public holiday.',
    type: 'announcement',
    date: 'March 10, 2024',
    size: 'small',
  },
  {
    title: 'New Course Launches This Summer',
    description: 'We are excited to announce new courses on AI and Blockchain starting this summer.',
    type: 'announcement',
    date: 'March 5, 2024',
    size: 'large',
  },
  {
    title: 'Student Exchange Program',
    description: 'Applications are now open for our exchange program with top universities worldwide.',
    type: 'event',
    date: 'March 2, 2024',
    size: 'small',
  },
];

const NewsFeed = () => {
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
      <Typography variant="h4" className="text-center text-purple-700 font-extrabold mb-8">
        News and Updates
      </Typography>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {newsItems.map((item, index) => (
          <Card 
            key={index} 
            className={`shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white rounded-xl 
              ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}`}
          >
            <CardHeader
              avatar={
                <Avatar className="bg-white text-indigo-700">
                  {getIcon(item.type)}
                </Avatar>
              }
              title={
                <Typography variant="h6" className="font-bold text-lg">
                  {item.title}
                </Typography>
              }
              subheader={
                <Typography variant="body2" className="text-gray-200">
                  {item.date}
                </Typography>
              }
              className="pb-0"
            />
            <CardContent>
              <Typography variant="body2" className="text-gray-100">
                {item.description}
              </Typography>
            </CardContent>
            <div className="flex justify-end p-3">
              <IconButton className="bg-white text-indigo-600 hover:bg-gray-200 rounded-full transition duration-300">
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;