import React, { useState } from 'react';
import { Box, Button, Textarea, Heading, List, ListItem } from '@chakra-ui/react';
import { toShahmukhi, toGurmukhi } from '../utils/gurmukhi-utils'; // Ensure path is correct
import ShahmukhiKeyboard from '../components/ShahmukhiKeyboard'; // Ensure path is correct

const words = [
    ['کہ', 'ਕਿ'],
    // Add more test words as needed
];

const Home = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isShahmukhiToGurmukhi, setIsShahmukhiToGurmukhi] = useState(true); // Toggle between conversion types

    const handleConvert = () => {
        // Ensure conversion functions are working correctly
        const convertedText = isShahmukhiToGurmukhi ? toShahmukhi(inputText) : toGurmukhi(inputText);
        setOutputText(convertedText);
    };

    const handleKeyPress = (char) => {
        setInputText(inputText + char); // Append the clicked character to the input
    };

    return (
        <Box maxW="lg" mx="auto" p={5}>
            <Heading as="h1" mb={5}>Gurmukhi to Shahmukhi Converter</Heading>
            <Textarea
                placeholder="Type or paste text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                size="lg"
                mb={4}
            />
            <Button colorScheme="teal" onClick={handleConvert} mb={4}>
                {isShahmukhiToGurmukhi ? 'Convert to Shahmukhi' : 'Convert to Gurmukhi'}
            </Button>
            <Button colorScheme="blue" onClick={() => setIsShahmukhiToGurmukhi(!isShahmukhiToGurmukhi)} mb={4}>
                Toggle to {isShahmukhiToGurmukhi ? 'Gurmukhi' : 'Shahmukhi'}
            </Button>
            <Textarea
                placeholder="Converted text will appear here..."
                value={outputText}
                readOnly
                size="lg"
            />
            <Box mt={5}>
                <Heading as="h2" size="md" mb={2}>Test Words</Heading>
                <List spacing={3}>
                    {words.map(([shahmukhi, gurmukhi], index) => (
                        <ListItem key={index}>
                            {gurmukhi} - {shahmukhi}
                        </ListItem>
                    ))}
                </List>
            </Box>
            <ShahmukhiKeyboard onKeyPress={handleKeyPress} />
        </Box>
    );
};

export default Home;
