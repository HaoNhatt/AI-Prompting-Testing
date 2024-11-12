// prompts/rule_of_three.

// Best Use Case: For tasks requiring different perspectives on a problem, generating multiple creative variations.

// Description: Guides the AI to think of a problem in multiple perspectives, improve the quality and diversity of the response, optimizing prompt effectiveness.

module.exports = {
    name: 'Rule of Three',
    description: 'Generate three variations of the prompt for different perspectives.',
    template: 'Generate three different prompts for the following task:\n\n**Task:** [Task]\n\n**Prompt 1:**\n[Prompt 1]\n\n**Prompt 2:**\n[Prompt 2]\n\n**Prompt 3:**\n[Prompt 3]',
    inputFields: [
        {
            name: 'Task',
            type: 'textarea',
            placeholder: 'Describe the task you want the AI to perform'
        }
    ]
};