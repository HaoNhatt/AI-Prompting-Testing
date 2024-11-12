// prompts/personalized_recommendations.js

module.exports = {
    name: 'Personalized Recommendations',
    description: 'Get tailored recommendations based on your preferences and interests.',
    template: 'Based on my interests in [Interests] and my preference for [Preferences], suggest 5 [Type of Recommendations]:\n\n1. [Recommendation 1]\n2. [Recommendation 2]\n3. [Recommendation 3]\n4. [Recommendation 4]\n5. [Recommendation 5]',
    inputFields: [
        {
            name: 'Interests',
            type: 'textarea',
            placeholder: 'List your interests (e.g., movies, music, books, travel)'
        },
        {
            name: 'Preferences',
            type: 'textarea',
            placeholder: 'Describe your preferences (e.g., genres, styles, formats)'
        },
        {
            name: 'Type of Recommendations',
            type: 'text',
            placeholder: 'Specify the type of recommendations you need (e.g., movies, books, restaurants)'
        }
    ]
};
