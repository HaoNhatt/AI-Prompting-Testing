// prompts/chain_of_thought.js

// Best Use Case: For tasks requiring reasoning, problem - solving, or step - by - step instructions.

// Description: Guides the AI to break down a complex problem into a series of logical steps, making it easier to generate a coherent and accurate response.

module.exports = {
    name: 'Chain of Thought',
    description: 'Prompts the AI to think step-by-step.',
    template: 'Let\'s think step-by-step:\n\n1. [Task]:\n2. [Reasoning]:\n3. [Solution]:',
    inputFields: [
        {
            name: 'Task',
            type: 'text',
            placeholder: 'Describe the task'
        },
        {
            name: 'Reasoning',
            type: 'textarea',
            placeholder: 'Explain the reasoning process'
        },
        {
            name: 'Solution',
            type: 'textarea',
            placeholder: 'What is the final solution?'
        }
    ]
};
