import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import {
    Alert,
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from '@mui/material';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        if (!formData.inquiryType) {
            newErrors.inquiryType = 'Please select an inquiry type';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // In a real app, you would send the data to your backend here
            console.log('Form submitted:', formData);
            setSubmitted(true);

            // Reset form after submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                inquiryType: ''
            });
        }
    };

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                Have questions or feedback? Get in touch with our team.
            </Typography>
            <Divider sx={{ mb: 4 }} />

            {submitted && (
                <Alert severity="success" sx={{ mb: 4 }}>
                    Your message has been sent successfully! We&apos;ll get back to you soon.
                </Alert>
            )}

            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            Send us a Message
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth error={!!errors.inquiryType}>
                                        <InputLabel>Inquiry Type</InputLabel>
                                        <Select
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            label="Inquiry Type"
                                            required
                                        >
                                            <MenuItem value="">Select an option</MenuItem>
                                            <MenuItem value="question">Question about quiz</MenuItem>
                                            <MenuItem value="feedback">Feedback</MenuItem>
                                            <MenuItem value="suggestion">Suggestion</MenuItem>
                                            <MenuItem value="other">Other</MenuItem>
                                        </Select>
                                        {errors.inquiryType && (
                                            <Typography variant="caption" color="error">
                                                {errors.inquiryType}
                                            </Typography>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        error={!!errors.subject}
                                        helperText={errors.subject}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Your Message"
                                        name="message"
                                        multiline
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={!!errors.message}
                                        helperText={errors.message}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        endIcon={<SendIcon />}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Paper elevation={3} sx={{ height: '100%', px: 3, alignContent: "center"}}>
                        <Typography variant="h5" gutterBottom>
                            Contact Information
                        </Typography>

                        <Box sx={{ mt: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <LocationOnIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        Our Location
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        123 Food Street, Culinary District, NY 10001
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <EmailIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        Email Us
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        info@foodquizapp.com
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        Call Us
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        +1 (555) 123-4567
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="h6" gutterBottom>
                            Operating Hours
                        </Typography>

                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Typography variant="body2" fontWeight="bold">
                                    Monday - Friday:
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2">
                                    9:00 AM - 6:00 PM
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant="body2" fontWeight="bold">
                                    Saturday:
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2">
                                    10:00 AM - 4:00 PM
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant="body2" fontWeight="bold">
                                    Sunday:
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2">
                                    Closed
                                </Typography>
                            </Grid>
                        </Grid>

                        <Box sx={{ mt: 3 }}>
                            <Typography variant="body2" color="text.secondary">
                                We typically respond to inquiries within 24-48 business hours.
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Contact;