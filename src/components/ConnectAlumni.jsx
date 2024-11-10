import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Chip,
  List,
  ListItem,
  Avatar
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CheckIcon from "@mui/icons-material/Check";

export default function Alumni(props) {
  console.log(props);
  const [popularUsers, setPopularUsers] = useState([]);
  const [connections, setConnections] = useState({});
  console.log(props)

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const response = await fetch(`/api/connection/suggestions/${props.userId}`); // Replace USER_ID with the current user's ID
        const data = await response.json();
        setPopularUsers(data[0].suggestedConnections);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    getSuggestions();
  }, []);

  const handleConnectionRequest = async (userId, action) => {
    const response = await fetch('/api/connection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senderId: userId, receiverId: userId, action }), // Replace USER_ID
    });
    if (response.ok) {
      setConnections(prev => ({
        ...prev,
        [userId]: action === 'send' ? 'PENDING' : action === 'accept' ? 'CONNECTED' : null,
      }));
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        borderRadius: 2,
        p: 3,
        width: 320,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        marginRight: "230px"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          Alumni Suggestion
        </Typography>
        <Box component="span" sx={{ color: "orange", fontSize: "1.25rem", ml: 1 }}>
          
        </Box>
      </Box>

      <List>
        {popularUsers && popularUsers?.map((user) => (
          <ListItem
            key={user.userId}
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1,
              px: 0,
              "&:hover": { backgroundColor: "#2c2c2c", borderRadius: 1 }
            }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  bgcolor: user.color,
                  width: 40,
                  height: 40,
                  mr: 2,
                  color: "#1e1e1e",
                  fontWeight: "bold"
                }}
              >
                {user.initials}
              </Avatar>

              <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#ffffff"
                  sx={{ fontSize: "1rem" }}
                >
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography
                  variant="body2"
                  color="#9c9c9c"
                  sx={{ fontSize: "0.85rem" }}
                >
                  {user.role}
                </Typography>
                <Box display="flex" gap={1} mt={0.5}>
                  <Chip
                    label={`${user.followers} Followers`}
                    sx={{
                      backgroundColor: "#333",
                      color: "#9c9c9c",
                      fontSize: "0.75rem",
                      height: 24
                    }}
                    size="small"
                  />
                  <Chip
                    label={`${user.posts} Posts`}
                    sx={{
                      backgroundColor: "#333",
                      color: "#9c9c9c",
                      fontSize: "0.75rem",
                      height: 24
                    }}
                    size="small"
                  />
                </Box>
              </Box>
            </Box>

            <IconButton
              onClick={() =>
                handleConnectionRequest(user.userId, connections[user.userId] === 'PENDING' ? 'cancel' : 'send')
              }
              sx={{
                color: connections[user.userId] === 'CONNECTED' ? "green" : "#4caf50",
                transition: "color 0.3s",
                "&:hover": { color: "#66bb6a" }
              }}
            >
              {connections[user.userId] === 'CONNECTED' ? <CheckIcon /> : <PersonAddIcon />}
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}