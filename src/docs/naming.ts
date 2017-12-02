import { CategoryEnum } from "../app/category-enum.model";
import { Guide } from "../app/guide.model";


export var naming:Guide = {
    title: 'Naming',
    description: 'Naming conventions are hugely important to maintainability and readability. This guide recommends naming conventions for the file name and the symbol name.',
    rules: [
        { 
            title: 'General Naming Guidelines',
            source: 'google',
            code: 'Google Style 02-01',
            description: `
            `,
            tips: [
                { category: CategoryEnum.Do, message: 'Do use consistent names for all symbols.' },
                { category: CategoryEnum.Do, message: 'Do follow a pattern that describes the symbol\'s feature then its type. The recommended pattern is <code>feature.type.ts</code>.'},
                { category: CategoryEnum.Reason, message: 'Naming conventions help provide a consistent way to find content at a glance. Consistency within the project is vital. Consistency with a team is important. Consistency across a company provides tremendous efficiency.'},
                { category: CategoryEnum.Reason, message: 'The naming conventions should simply help find desired code faster and make it easier to understand.'},
                { category: CategoryEnum.Reason, message: 'Names of folders and files should clearly convey their intent. For example, app/heroes/hero-list.component.ts may contain a component that manages a list of heroes.'}
            ]        
        },

        { 
            title: 'File Naming Conventions',
            source: 'ae',
            code: 'AE Style 02-01',
            description: `
                        
        <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">List of Valid Types</div>
    
                <table class="table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>module</td>
                            <td><code>feature.<b>module</b>.ts</code></td>
                        </tr> 
                        <tr>
                            <td>routing</td>
                            <td><code>feature-<b>routing</b>.module.ts</code></td>
                        </tr>                          
                        <tr>
                            <td>component</td>
                            <td><code>feature.<b>component</b>.ts</code></td>
                        </tr>
                        <tr>
                            <td>directive</td>
                            <td><code>feature.<b>directive</b>.ts</code></td>
                        </tr>
                        <tr>
                            <td>pipe</td>
                            <td><code>feature.<b>pipe</b>.ts</code></td>
                        </tr>
                        <tr>
                            <td>service</td>
                            <td><code>feature.<b>service</b>.ts</code></td>
                        </tr>
                        <tr>
                            <td>factory</td>
                            <td><code>feature.<b>factory</b>.ts</code></td>
                        </tr>
                        <tr>
                            <td>model</td>
                            <td><code>feature.<b>model</b>.ts</code></td>
                        </tr>
    
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">Feature Naming Guidelines</div>
    
                <table class="table">
                    <thead>
                        <tr>
                            <th>Rule</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>All lowercase</td>
                            <td><code><b>feature</b>.type.ts</code></td>
                        </tr>
                        <tr>
                            <td>May contain dashes</td>
                            <td><code><b>feature-list</b>.type.ts</code></td>
                        </tr>
                        <tr>
                            <td>Avoid numbers, use string value instead</td>
                            <td><code><b>feature-one</b>.type.ts</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

           `,
            tips: [
                { category: CategoryEnum.Do, message: 'Do follow the recommended pattern that describes the symbol\'s feature then its type.' },
                { category: CategoryEnum.Do, message: 'Do select from one of the valid types listed in the table below.' },
                { category: CategoryEnum.Do, message: 'Do follow the recommended guidelines for the feature name.' },
                
            ]
        },
        { 
            title: 'Separate file names with dots and dashes',
            source: 'google',
            code: 'Google Style 02-02',
            description: `
            
            `,
            tips: [
                { category: CategoryEnum.Do, message: 'Do use dashes to separate words in the descriptive name.' },
                { category: CategoryEnum.Do, message: 'Do use dots to separate the descriptive name from the type.' },
                { category: CategoryEnum.Do, message: 'Do use consistent type names for all components following a pattern that describes the component\'s feature then its type. A recommended pattern is feature.type.ts.' },
                { category: CategoryEnum.Do, message: 'Do use conventional type names including .service, .component, .pipe, .module, and .directive. Invent additional type names if you must but take care not to create too many.' },
                
            ]
        },   
        
        // { 
        //     title: 'Symbols and file names',
        //     source: 'google',
        //     code: 'Google Style 02-03',
        //     description: `
        //     <p><span class="glyphicon glyphicon-ok"></span> Do use consistent names for all assets named after what they represent.</p>
        //     <p><span class="glyphicon glyphicon-ok"></span> Do use upper camel case for class names.</p>
        //     <p><span class="glyphicon glyphicon-ok"></span> Do match the name of the symbol to the name of the file.</p>
        //     <p><span class="glyphicon glyphicon-ok"></span> Do append the symbol name with the conventional suffix (such as Component, Directive, Module, Pipe, or Service) for a thing of that type.</p>
        //     <p><span class="glyphicon glyphicon-ok"></span> Do give the filename the conventional suffix (such as .component.ts, .directive.ts, .module.ts, .pipe.ts, or .service.ts) for a file of that type.</p>

        //     <table class="table">
        //     <thead>
        //         <tr>
        //             <th>Symbol Name</th>
        //             <th>File Name</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td>All lowercase</td>
        //             <td><code><b>feature</b>.type.ts</code></td>
        //         </tr>
        //         <tr>
        //             <td>May contain dashes</td>
        //             <td><code><b>feature-list</b>.type.ts</code></td>
        //         </tr>
        //         <tr>
        //             <td>Avoid numbers, use string value instead</td>
        //             <td><code><b>feature-one</b>.type.ts</code></td>
        //         </tr>
        //     </tbody>
        // </table>
        //     `,  
        //     reasons: [
        //         'Consistent conventions make it easy to quickly identify and reference assets of different types.'
        //     ]
        // },
    ]
}
