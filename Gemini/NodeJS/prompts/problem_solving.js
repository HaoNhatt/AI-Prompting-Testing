// prompts/problem_solving.js

module.exports = {
    name: 'Problem-Solving and Decision Making',
    description: 'Get help with problem-solving and decision making by analyzing options and potential outcomes.',
    template: 'I am facing the following problem:\n\n[Problem]:\n\nMy options are:\n\n1. [Option 1]\n2. [Option 2]\n3. [Option 3]\n\nAnalyze these options and suggest the best course of action, considering the potential outcomes and risks:\n\n[Analysis and Recommendation]',
    inputFields: [
        {
            name: 'Problem',
            type: 'textarea',
            placeholder: 'Describe the problem you are facing'
        },
        {
            name: 'Option 1',
            type: 'textarea',
            placeholder: 'Describe the first option'
        },
        {
            name: 'Option 2',
            type: 'textarea',
            placeholder: 'Describe the second option'
        },
        {
            name: 'Option 3',
            type: 'textarea',
            placeholder: 'Describe the third option'
        }
    ]
};
