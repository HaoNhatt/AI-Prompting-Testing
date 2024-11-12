// prompts/top_down_approach.js
module.exports = {
    name: 'Top-Down Approach',
    description: 'Start with a general goal and break it down.',
    template: 'My goal is to [Overall Goal].\n\n1. First, I will [Step 1].\n2. Next, I will [Step 2].\n3. Finally, I will [Step 3].',
    inputFields: [
        {
            name: 'Overall Goal',
            type: 'text',
            placeholder: 'Describe the overall goal'
        },
        {
            name: 'Step 1',
            type: 'text',
            placeholder: 'Describe the first step'
        },
        {
            name: 'Step 2',
            type: 'text',
            placeholder: 'Describe the second step'
        },
        {
            name: 'Step 3',
            type: 'text',
            placeholder: 'Describe the third step'
        }
    ]
};