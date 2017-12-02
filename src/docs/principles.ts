export var principles: Guide = {
    title: 'Single Responsibility Principle',
    description: 'Apply the single responsibility principle (SRP) to all components, services, and other symbols. This helps make the app cleaner, easier to read and maintain, and more testable.',
    rules: [
        { 
            title: 'Rule of One',
            source: 'google',
            code: 'Google Style 01-01',
            description: '<p><span class="glyphicon glyphicon-ok"></span> Do define one thing, such as a service or component, per file.</p> Consider limiting files to 400 lines of code.',
            reasons: [
                'One component per file makes it far easier to read, maintain, and avoid collisions with teams in source control.',
                'One component per file avoids hidden bugs that often arise when combining components in a file where they may share variables, create unwanted closures, or unwanted coupling with dependencies.',
                'A single component can be the default export for its file which facilitates lazy loading with the router.'
            ]
        },
        { 
            title: 'Small Functions',
            source: 'google',
            code: 'Google Style 01-02',
            description: '<p><span class="glyphicon glyphicon-ok"></span> Do define small functions. Consider limiting to no more than 75 lines.</p>',
            reasons: [
                'Small functions are easier to test, especially when they do one thing and serve one purpose.',
                'Small functions promote reuse.',
                'Small functions are easier to read.',
                'Small functions are easier to maintain.',
                'Small functions help avoid hidden bugs that come with large functions that share variables with external scope, create unwanted closures, or unwanted coupling with dependencies.'
            ]
        },
    ]
}
