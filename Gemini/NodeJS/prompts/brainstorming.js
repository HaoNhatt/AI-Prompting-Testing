// prompts/brainstorming_creative_ideas.js

module.exports = {
    name: 'Brainstorming Creative Ideas',
    description: 'Generate a list of creative ideas for a given topic.',
    template: 'Brainstorm 5 creative ideas for the following topic:\n\n[Topic]:\n\n1. [Idea 1]\n2. [Idea 2]\n3. [Idea 3]\n4. [Idea 4]\n5. [Idea 5]',
    inputFields: [
        {
            name: 'Topic',
            type: 'textarea',
            placeholder: 'Enter the topic you want to brainstorm ideas for'
        }
    ]
};
