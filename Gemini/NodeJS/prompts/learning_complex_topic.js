// prompts/learning_complex_topics.js

module.exports = {
    name: 'Learning Complex Topics',
    description: 'Break down a complex topic into smaller, easier-to-understand parts.',
    template: 'Explain the following complex topic in a way that a beginner can understand:\n\n[Topic]:\n\n1. [Concept 1]\n2. [Concept 2]\n3. [Concept 3]\n4. [Concept 4]\n5. [Concept 5]',
    inputFields: [
        {
            name: 'Topic',
            type: 'textarea',
            placeholder: 'Enter the complex topic you want to learn'
        }
    ]
};