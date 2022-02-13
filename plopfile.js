module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a component',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your component name?'
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/components/{{pascalCase name}}.component.tsx',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Component.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/{{pascalCase name}}.styled.ts',
                templateFile:
                    'plop-templates/Component.styled.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/{{pascalCase name}}.types.ts',
                templateFile:
                    'plop-templates/Component.types.ts.hbs',
            },
        ],
    })
    plop.setGenerator('UI', {
            description: 'Create a component',
            // User input prompts provided as arguments to the template
            prompts: [
                {
                    // Raw text input
                    type: 'input',
                    // Variable name for this input
                    name: 'name',
                    // Prompt to display on command line
                    message: 'What is your component name?'
                },
            ],
            actions: [
                {
                    // Add a new file
                    type: 'add',
                    // Path for the new file
                    path: 'src/UI/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
                    // Handlebars template used to generate content of new file
                    templateFile: 'plop-templates/Component.ts.hbs',
                },
                {
                    type: 'add',
                    path:
                        'src/UI/{{pascalCase name}}/{{pascalCase name}}.styled.ts',
                    templateFile:
                        'plop-templates/Component.styled.ts.hbs',
                },
                {
                    type: 'add',
                    path:
                        'src/UI/{{pascalCase name}}/{{pascalCase name}}.types.ts',
                    templateFile:
                        'plop-templates/Component.types.ts.hbs',
                },
            ],
        });
};
