import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Paper,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { submitDemoRequest } from '../services/database';

const DemoRequestForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    
    try {
      await submitDemoRequest({
        ...data,
        userType: data.userType,
        sport: data.sport,
        submissionDate: new Date().toISOString(),
      });
      
      setSuccess(true);
      reset();
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message || 'Failed to submit demo request. Please try again.');
    } finally {
      setLoading(false);
    }
  };
