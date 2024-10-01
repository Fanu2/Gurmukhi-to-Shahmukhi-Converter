// gurmukhi-utils.js

export const toShahmukhi = (gurmukhiText) => {
    // Your existing implementation for Gurmukhi to Shahmukhi conversion
};

export const toGurmukhi = (shahmukhiText) => {
    const shahmukhiToGurmukhiMap = {
        'ؐ': 'ਁ',
        'پ': 'ਪ',
        'ت': 'ਤ',
        'ث': 'ਥ',
        'ج': 'ਜ',
        'چ': 'ਚ',
        'خ': 'ਖ',
        'د': 'ਦ',
        'ڈ': 'ਢ',
        'ر': 'ਰ',
        'ز': 'ਜ',
        'س': 'ਸ',
        'ش': 'ਸ਼',
        'ص': 'ਸ',
        'ض': 'ਜ਼',
        'ط': 'ਤ',
        'ٹ': 'ਟ',
        'ق': 'ਕ',
        'ک': 'ਕ',
        'گ': 'ਗ',
        'ل': 'ਲ',
        'م': 'ਮ',
        'ن': 'ਨ',
        'ں': 'ਂ',
        'ہ': 'ਹ',
        'ئ': 'ਯ',
        'ے': 'ੇ',
        'و': 'ਵ',
        'ؤ': 'ਉ',
        'ٕ': '',
        ' ': ' ',
        // Add more mappings as needed
    };

    let gurmukhiText = '';
    for (let char of shahmukhiText) {
        gurmukhiText += shahmukhiToGurmukhiMap[char] || char;
    }

    return gurmukhiText;
};
