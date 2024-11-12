// prompts/zero_shot_learning.js

// Best Use Case: For tasks where the AI needs to perform a new task it hasn't been explicitly trained for.

// Description: Involves giving the AI a single example of the desired output and asking it to apply that logic to a new input.

module.exports = {
    name: 'Zero-Shot Learning',
    description: 'Teaches the AI a new task with a single example.',
    template: 'Here is an example:\n\n[Example Input]: [Example Output]\n\nNow, apply this logic to the following:\n\n[New Input]:',
    inputFields: [
        {
            name: 'Example Input',
            type: 'text',
            placeholder: 'Provide an example input'
        },
        {
            name: 'Example Output',
            type: 'textarea',
            placeholder: 'Provide the corresponding output'
        },
        {
            name: 'New Input',
            type: 'textarea',
            placeholder: 'Enter the new input you want the AI to process'
        }
    ]
};
