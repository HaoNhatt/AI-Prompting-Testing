// prompts/optimizing_productivity.js

module.exports = {
    name: 'Optimizing Productivity and Workflows',
    description: 'Suggest ways to improve productivity and streamline workflows.',
    template: 'I am working on [Task]. Suggest 3 ways to improve my productivity and streamline my workflow:\n\n1. [Suggestion 1]\n2. [Suggestion 2]\n3. [Suggestion 3]',
    inputFields: [
        {
            name: 'Task',
            type: 'textarea',
            placeholder: 'Describe the task you are working on'
        }
    ]
};