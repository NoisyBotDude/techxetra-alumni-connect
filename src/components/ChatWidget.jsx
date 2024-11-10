"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Paper,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const users = [
  { id: 1, name: "Alice Johnson", avatar: "/path-to-avatar1.jpg" },
  { id: 2, name: "Bob Smith", avatar: "/path-to-avatar2.jpg" },
  { id: 3, name: "Cathy Brown", avatar: "/path-to-avatar3.jpg" },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});
  const [image, setImage] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    if (!messages[user.id]) {
      setMessages((prev) => ({ ...prev, [user.id]: [] }));
    }
  };

  const handleSendMessage = () => {
    if (message.trim() || image) {
      setMessages((prev) => ({
        ...prev,
        [selectedUser.id]: [
          ...prev[selectedUser.id],
          { id: Date.now(), text: message, sender: "user", image },
        ],
      }));
      setMessage("");
      setImage(null);
    }
  };

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleBackToContacts = () => {
    setSelectedUser(null);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Toggle Button */}
      <IconButton
        onClick={toggleChat}
        className="text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg"
        sx={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}
      >
        {isOpen ? <CloseIcon /> : <ChatBubbleOutlineIcon />}
      </IconButton>

      {/* Chat Window */}
      {isOpen && (
        <Box
          component={Paper}
          elevation={4}
          className="w-80 md:w-96 bg-gray-800 text-white rounded-lg shadow-lg"
          sx={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            maxHeight: "70vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box className="p-3 flex items-center justify-between border-b border-gray-700">
            {selectedUser ? (
              <IconButton onClick={handleBackToContacts} className="text-gray-400">
                <ArrowBackIcon />
              </IconButton>
            ) : null}
            <Typography variant="h6" className="text-white font-semibold flex-grow text-center">
              {selectedUser ? selectedUser.name : "Chats"}
            </Typography>
            <Box className="flex items-center space-x-2">
              {selectedUser && (
                <IconButton onClick={handleOpenMenu} className="text-gray-400">
                  <MoreVertIcon />
                </IconButton>
              )}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#2E2E2E",
                    color: "white",
                  },
                }}
              >
                <MenuItem onClick={handleCloseMenu}>View Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Mute Notifications</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Delete Chat</MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* User List */}
          {!selectedUser && (
            <List className="bg-gray-700 text-white">
              {users.map((user) => (
                <ListItem
                  button
                  key={user.id}
                  onClick={() => handleSelectUser(user)}
                  selected={selectedUser?.id === user.id}
                >
                  <ListItemAvatar>
                    <Avatar src={user.avatar} alt={user.name} />
                  </ListItemAvatar>
                  <ListItemText primary={user.name} />
                </ListItem>
              ))}
            </List>
          )}

          {/* Chat Area */}
          {selectedUser && (
            <Box className="flex-1 overflow-y-auto p-3">
              {messages[selectedUser.id]?.map((msg) => (
                <Box
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  } mb-2`}
                >
                  <Box
                    className={`rounded-lg p-2 max-w-xs text-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-200"
                    }`}
                  >
                    {msg.text}
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="attachment"
                        className="mt-2 rounded max-h-40"
                      />
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          )}

          {/* Input Area */}
          {selectedUser && (
            <Box className="p-3 border-t border-gray-700 flex items-center space-x-2">
              <TextField
                placeholder="Type a message..."
                variant="outlined"
                size="small"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
                InputProps={{
                  className: "bg-gray-700 text-white",
                }}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="image-upload"
                type="file"
                onChange={handleImageUpload}
              />
              <label htmlFor="image-upload">
                <IconButton component="span" className="text-blue-400">
                  <AddAPhotoIcon />
                </IconButton>
              </label>
              <Button
                onClick={handleSendMessage}
                variant="contained"
                color="primary"
                className="bg-blue-600"
              >
                <SendIcon />
              </Button>
            </Box>
          )}
        </Box>
      )}
    </div>
  );
};

export default ChatWidget;