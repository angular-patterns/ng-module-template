import { CategoryEnum } from "../app/category-enum.model";

export var principles: Guide = {
    title: 'Single Responsibility Principle',
    description: 'Apply the single responsibility principle (SRP) to all components, services, and other symbols. This helps make the app cleaner, easier to read and maintain, and more testable.',
    rules:
        [{
            title: 'Rule of One',
            source: 'google',
            code: 'Google Style 01-01',
            description: ' ',

            tips: [
                { category: CategoryEnum.Do, message: 'Do define one thing, such as a service or component, per file. Consider limiting files to 400 lines of code.' },
                { category: CategoryEnum.Do, message: 'Do follow a pattern that describes the symbol\'s feature then its type. The recommended pattern is <code>feature.type.ts</code>.' },
                { category: CategoryEnum.Reason, message: 'One component per file makes it far easier to read, maintain, and avoid collisions with teams in source control.' },
                { category: CategoryEnum.Reason, message: 'One component per file avoids hidden bugs that often arise when combining components in a file where they may share variables, create unwanted closures, or unwanted coupling with dependencies.' },
                { category: CategoryEnum.Reason, message: 'A single component can be the default export for its file which facilitates lazy loading with the router.' }
            ]
        },
        {
            title: 'Small Functions',
            source: 'google',
            code: 'Google Style 01-02',
            description: '',

            tips: [
                { category: CategoryEnum.Do, message: 'Do define small functions. Consider limiting to no more than 75 lines.' },
                { category: CategoryEnum.Reason, message: 'Small functions are easier to test, especially when they do one thing and serve one purpose.' },
                { category: CategoryEnum.Reason, message: 'Small functions promote reuse.' },
                { category: CategoryEnum.Reason, message: 'Small functions are easier to read.' },
                { category: CategoryEnum.Reason, message: 'Small functions are easier to maintain.' },
                { category: CategoryEnum.Reason, message: 'Small functions help avoid hidden bugs that come with large functions that share variables with external scope, create unwanted closures, or unwanted coupling with dependencies.' },

            ]
        },
        ]
}
