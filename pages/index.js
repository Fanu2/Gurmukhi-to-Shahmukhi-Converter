import React, { useState } from 'react';
import { Box, Button, Textarea, Heading, List, ListItem } from '@chakra-ui/react';
import { toShahmukhi } from 'gurmukhi-utils'; // Adjust the import as per your utility

const words = [
  ['کہ', 'ਕਿ'],
  // Uncomment or add more test words as needed
];

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleConvert = () => {
    const convertedText = toShahmukhi(inputText);
    setOutputText(convertedText);
  };

  return (
    <Box maxW="lg" mx="auto" p={5}>
      <Heading as="h1" mb={5}>Gurmukhi to Shahmukhi Converter</Heading>
      <Textarea
        placeholder="Type or paste Gurmukhi text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        size="lg"
        mb={4}
      />
      <Button colorScheme="teal" onClick={handleConvert} mb={4}>
        Convert to Shahmukhi
      </Button>
      <Textarea
        placeholder="Converted Shahmukhi text will appear here..."
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
    </Box>
  );
};

export default Home;
