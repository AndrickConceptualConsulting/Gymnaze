import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Chip,
  useTheme,
  alpha
} from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const SimpleCaptcha = ({ onVerify, disabled = false }) => {
  const theme = useTheme();
  const [challenge, setChallenge] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  // Challenge types with sports-themed content
  const challengeTypes = [
    {
      type: 'selectSports',
      question: 'Select all team sports',
      items: [
        { id: 1, name: 'Basketball', isCorrect: true, icon: '🏀' },
        { id: 2, name: 'Tennis', isCorrect: false, icon: '🎾' },
        { id: 3, name: 'Soccer', isCorrect: true, icon: '⚽' },
        { id: 4, name: 'Golf', isCorrect: false, icon: '⛳' },
        { id: 5, name: 'Volleyball', isCorrect: true, icon: '🏐' },
        { id: 6, name: 'Swimming', isCorrect: false, icon: '🏊' }
      ]
    },
    {
      type: 'selectEquipment',
      question: 'Select items used in baseball',
      items: [
        { id: 1, name: 'Bat', isCorrect: true, icon: '🏏' },
        { id: 2, name: 'Helmet', isCorrect: true, icon: '⛑️' },
        { id: 3, name: 'Racket', isCorrect: false, icon: '🎾' },
        { id: 4, name: 'Glove', isCorrect: true, icon: '🥊' },
        { id: 5, name: 'Puck', isCorrect: false, icon: '🏒' },
        { id: 6, name: 'Ball', isCorrect: true, icon: '⚾' }
      ]
    },
    {
      type: 'selectMath',
      question: 'Select numbers that equal 10',
      items: [
        { id: 1, name: '5 + 5', isCorrect: true, icon: '➕' },
        { id: 2, name: '3 + 6', isCorrect: false, icon: '➕' },
        { id: 3, name: '7 + 3', isCorrect: true, icon: '➕' },
        { id: 4, name: '4 + 4', isCorrect: false, icon: '➕' },
        { id: 5, name: '2 × 5', isCorrect: true, icon: '✖️' },
        { id: 6, name: '3 × 4', isCorrect: false, icon: '✖️' }
      ]
    }
  ];

  const generateChallenge = useCallback(() => {
    const randomType = challengeTypes[Math.floor(Math.random() * challengeTypes.length)];
    // Shuffle items
    const shuffledItems = [...randomType.items].sort(() => Math.random() - 0.5);
    setChallenge({ ...randomType, items: shuffledItems });
    setSelectedItems([]);
    setError(false);
    setIsVerified(false);
  }, []);

  useEffect(() => {
    generateChallenge();
  }, [generateChallenge]);

  const handleItemClick = (item) => {
    if (disabled || isVerified) return;

    setSelectedItems(prev => {
      const isSelected = prev.some(selected => selected.id === item.id);
      if (isSelected) {
        return prev.filter(selected => selected.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleVerify = () => {
    if (!challenge || selectedItems.length === 0) return;

    const correctItems = challenge.items.filter(item => item.isCorrect);
    const isCorrect = 
      selectedItems.length === correctItems.length &&
      selectedItems.every(selected => selected.isCorrect) &&
      correctItems.every(correct => selectedItems.some(selected => selected.id === correct.id));

    if (isCorrect) {
      setIsVerified(true);
      setError(false);
      onVerify(true);
    } else {
      setError(true);
      setTimeout(() => {
        generateChallenge();
      }, 1500);
    }
  };

  useEffect(() => {
    if (selectedItems.length > 0 && challenge) {
      const correctItems = challenge.items.filter(item => item.isCorrect);
      if (selectedItems.length === correctItems.length) {
        handleVerify();
      }
    }
  }, [selectedItems, challenge]);

  if (!challenge) return null;

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        border: `2px solid ${isVerified ? theme.palette.success.main : error ? theme.palette.error.main : theme.palette.divider}`,
        borderRadius: 2,
        backgroundColor: isVerified ? alpha(theme.palette.success.main, 0.05) : 'background.paper',
        transition: 'all 0.3s ease'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
          Human Verification
        </Typography>
        <IconButton 
          onClick={generateChallenge} 
          disabled={disabled || isVerified}
          size="small"
          sx={{ color: 'text.secondary' }}
        >
          <RefreshIcon />
        </IconButton>
      </Box>

      <AnimatePresence mode="wait">
        <motion.div
          key={challenge.type}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            {challenge.question}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {challenge.items.map((item) => {
              const isSelected = selectedItems.some(selected => selected.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: disabled || isVerified ? 1 : 1.05 }}
                  whileTap={{ scale: disabled || isVerified ? 1 : 0.95 }}
                >
                  <Chip
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </Box>
                    }
                    onClick={() => handleItemClick(item)}
                    variant={isSelected ? "filled" : "outlined"}
                    color={isVerified && item.isCorrect ? "success" : isSelected ? "primary" : "default"}
                    disabled={disabled || isVerified}
                    sx={{
                      cursor: disabled || isVerified ? 'default' : 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: disabled || isVerified ? 'none' : 'translateY(-1px)'
                      }
                    }}
                  />
                </motion.div>
              );
            })}
          </Box>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Typography variant="body2" color="error" sx={{ mb: 1 }}>
                Incorrect selection. Generating new challenge...
              </Typography>
            </motion.div>
          )}

          {isVerified && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Typography variant="body2" color="success.main" sx={{ fontWeight: 600 }}>
                ✓ Verification complete!
              </Typography>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </Paper>
  );
};

export default SimpleCaptcha;