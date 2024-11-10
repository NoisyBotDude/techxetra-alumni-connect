'use client';
import React, { useState, useEffect } from 'react';
import BasicInfo from '../../components/BasicUserInfo';
import Skills from '../../components/SkillsUser';
import BasicInformation from '../../components/BasicInfoRight';
import Experience from '../../components/ExperienceComp';
import { Box, Grid, Button } from '@mui/material';

export default function UserDetails() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      fetchUserData(userId);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (response.ok) {
        const data = await response.json();
        console.log('User data:', data);
        setUserData(data.user[0]);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleEditProfile = () => {
    console.log('Edit Profile button clicked');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Box mb={4}>
            <BasicInfo userData={userData} />
          </Box>
          <Box>
            {
              userData && 
              <Skills 
                skills={userData?.skills || []} 
                userId={userData?.userId}
              />
            }
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <Box mb={4}>
            {
              userData && 
              <BasicInformation 
                userInfo={userData} 
              />
            }
          </Box>
          {userData && (
            <Experience  
            initialExperiences={userData.professionalJourney || []} 
              title={"Experience"}
              userId={userData?.userId}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}