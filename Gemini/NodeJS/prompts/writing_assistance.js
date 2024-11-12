// prompts/writing_assistance.

module.exports = {
    name: 'Writing Assistance',
    description: 'Get help with writing tasks, such as outlining, summarizing, or editing.',
    template: 'I am writing about [Topic]. Please help me with the following writing task:\n\n[Writing Task]:\n\n[Output]',
    inputFields: [
        {
            name: 'Topic',
            type: 'textarea',
            placeholder: 'Enter the topic you are writing about'
        },
        {
            name: 'Writing Task',
            type: 'textarea',
            placeholder: 'Describe the specific writing task you need assistance with (e.g., outline, summarize, edit)'
        }
    ]
};