// prompts/learning_new_skills.js

module.exports = {
    name: 'Learning New Skills',
    description: 'Get a roadmap for learning a new skill.',
    template: 'I want to learn [Skill].  Provide a step-by-step roadmap for learning this skill, including resources and key concepts:\n\n1. [Step 1]\n2. [Step 2]\n3. [Step 3]\n4. [Step 4]\n5. [Step 5]',
    inputFields: [
        {
            name: 'Skill',
            type: 'textarea',
            placeholder: 'Enter the new skill you want to learn'
        }
    ]
};
