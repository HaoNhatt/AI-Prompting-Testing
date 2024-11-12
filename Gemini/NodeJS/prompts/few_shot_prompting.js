// prompts/few_shot_learning.

// Best Use Case: Similar to ZSL but with multiple examples to improve learning.

// Description: Provides a few examples of the desired input - output pairs to help the AI generalize the pattern.

module.exports = {
    name: 'Few-Shot Learning',
    description: 'Teaches the AI a new task with multiple examples.',
    template: 'Here are some examples:\n\n[Example 1 Input]: [Example 1 Output]\n[Example 2 Input]: [Example 2 Output]\n[Example 3 Input]: [Example 3 Output]\n\nNow, apply this logic to the following:\n\n[New Input]:',
    inputFields: [
        {
            name: 'Example 1 Input',
            type: 'text',
            placeholder: 'Provide the first example input'
        },
        {
            name: 'Example 1 Output',
            type: 'textarea',
            placeholder: 'Provide the corresponding output for the first example'
        },
        {
            name: 'Example 2 Input',
            type: 'text',
            placeholder: 'Provide the second example input'
        },
        {
            name: 'Example 2 Output',
            type: 'textarea',
            placeholder: 'Provide the corresponding output for the second example'
        },
        {
            name: 'Example 3 Input',
            type: 'text',
            placeholder: 'Provide the third example input'
        },
        {
            name: 'Example 3 Output',
            type: 'textarea',
            placeholder: 'Provide the corresponding output for the third example'
        },
        {
            name: 'New Input',
            type: 'textarea',
            placeholder: 'Enter the new input you want the AI to process'
        }
    ]
};