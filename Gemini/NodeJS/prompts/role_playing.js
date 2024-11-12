// prompts/role_playing.js

// Best Use Case: For creative tasks, generating dialogue, or simulating interactions.

// Description: Assigns roles to the AI and the user, creating a more engaging and focused prompt.

module.exports = {
    name: 'Role Playing',
    description: 'Create a dialogue with the AI by assigning roles.',
    template: 'You are [Role 1] and I am [Role 2]. Let\'s have a conversation about [Topic]:\n\n[Role 1]: ',
    inputFields: [
        {
            name: 'Role 1',
            type: 'text',
            placeholder: 'First role'
        },
        {
            name: 'Role 2',
            type: 'text',
            placeholder: 'Second role'
        },
        {
            name: 'Topic',
            type: 'text',
            placeholder: 'Topic of conversation'
        }
    ]
};