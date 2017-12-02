import { CategoryEnum } from "../app/models/category-enum.model";
import { Guide } from "../app/models/guide.model";


export var naming: Guide = {
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
                { category: CategoryEnum.Do, message: 'Do follow a pattern that describes the symbol\'s feature then its type. The recommended pattern is <code>feature.type.ts</code>.' },
                { category: CategoryEnum.Reason, message: 'Naming conventions help provide a consistent way to find content at a glance. Consistency within the project is vital. Consistency with a team is important. Consistency across a company provides tremendous efficiency.' },
                { category: CategoryEnum.Reason, message: 'The naming conventions should simply help find desired code faster and make it easier to understand.' },
                { category: CategoryEnum.Reason, message: 'Names of folders and files should clearly convey their intent. For example, app/heroes/hero-list.component.ts may contain a component that manages a list of heroes.' }
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
        {
            title: 'Class Names (Component, Directive, Module, and Pipes)',
            source: 'ae',
            code: 'AE Style 02-03',
            description: `
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Class Naming Convention
                    </div>
                    <table class="table">
                    <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>File Name</th>
                    </tr>
                </thead>

                    <tbody>
                        <tr>
                            <td>      
                            <code>@Component({ ... })<br />
                            export class AppComponent { }
                            </code>
                            </td>
                            <td>
                                <code>app.component.ts</code>
                            </td>
                        </tr>
                        <tr>
                        <td>      
                        <code>@Component({ ... })<br />
                        export class HeroesComponent { }
                        </code>
                        </td>
                        <td>
                            <code>heroes.component.ts</code>
                        </td>
                    </tr>
                    <tr>
                    <td>      
                    <code>@Component({ ... })<br />
                    export class ValidationDirective { }
                    </code>
                    </td>
                    <td>
                        <code>validation.directive.ts</code>
                    </td>
                </tr>
                <tr>
                <td>      
                <code>@Component({ ... })<br />
                export class AppModule { }
                </code>
                </td>
                <td>
                    <code>app.module.ts</code>
                </td>
            </tr>
            <tr>
            <td>      
            <code>@Pipe({ name: 'initCaps' })<br />
            export class InitCapsPipe implements PipeTransform { }
            </code>
            </td>
            <td>
                <code>init-caps.pipe.ts</code>
            </td>
        </tr>

                    </tbody>
                    </table>
                </div>
            `,
            tips: [
                { category: CategoryEnum.Do, message: 'Do use upper camel case for the class name.' },
                { category: CategoryEnum.Do, message: 'Do match the class name to the file name' },
                { category: CategoryEnum.Reason, message: 'Consistent conventions make it easy to quickly identify and reference assets of different types.' }
            ]
        },

        {
            title: 'Service Names',
            source: 'ae',
            code: 'AE Style 02-04',
            description: `
            <table class="table">
            <thead>
                <tr>
                    <th>Symbol Name</th>
                    <th>File Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
            <code>
              @Injectable()<br />
              export class HeroDataService { }
              </code>
               </td>
                    <td><code>hero-data.<b>service</b>.ts</code></td>
                </tr> 
                <tr>
                    <td>      
                    <code>
              @Injectable()<br />
              export class CreditService { }
              </code>
                </td>
                    <td><code>credit.<b>service</b>.ts</code></td>
                </tr>                          
                <tr>
                    <td> 
                    <code>
              @Injectable()<br />
              export class Logger { }
              </code>
                  </td>
                    <td><code>logger.<b>service</b>.ts</code></td>
                </tr>
            </tbody>
        </table>

            `,
            tips: [
                { category: CategoryEnum.Do, message: 'Do use consistent names for all services named after their feature.' },
                { category: CategoryEnum.Do, message: 'Do suffix a service class name with Service. For example, <code>DataService</code> or <code>HeroService</code>. There may be some exceptions if the service is unambiguous - i.e. Logger instead of LoggerService' },
                { category: CategoryEnum.Reason, message: 'Provides a consistent way to quickly identify and reference services.' },
            ]
        },

        {
            title: 'Directive Selectors',
            source: 'ae',
            code: 'AE Style 02-06',
            description: `
            <code>
                @Directive({ selector: '[tohValidate]' })<br/>
                export class ValidateDirective { }<br />

                @Directive({ selector: '[tohCaptialize]' })<br/>
                export class CapitalizeDirective { }<br />
            </code>
             
            `,
            tips: [
                { category: CategoryEnum.Do, message: 'Do use lower camel case for naming the selectors of directives.' },
                { category: CategoryEnum.Reason, message: 'Keeps the names of the properties defined in the directives that are bound to the view consistent with the attribute names.' },
                { category: CategoryEnum.Reason, message: ' The Angular HTML parser is case sensitive and recognizes lower camel case.' }
                { category: CategoryEnum.Do, message: 'Do use a custom prefix for the selector of directives (e.g, the prefix toh from Tour of Heroes).' },
                { category: CategoryEnum.Do, message: 'Do spell non-element selectors in lower camel case unless the selector is meant to match a native HTML attribute.' },
                { category: CategoryEnum.Reason, message: 'Prevents name collisions.' },
                { category: CategoryEnum.Reason, message: 'Directives are easily identified.' },
                { category: CategoryEnum.Avoid, message: 'Avoid including the prefix in the class name.' },
                
            ]
        },
        {
            title: 'Component Selectors',
            source: 'ae',
            code: 'AE Style 02-07',
            description: `
            <code>
                @Component({ selector: 'toh-hero' })<br/>
                export class HeroComponent { }<br />

                @Component({ selector: 'admin-users' })<br/>
                export class UsersComponent { }<br />
            </code>
             
            `,
            tips: [
                { category: CategoryEnum.Do, message: 'Do use a hyphenated, lowercase element selector value (e.g. admin-users).' },
                { category: CategoryEnum.Do, message: 'Do use a custom prefix for a component selector. For example, the prefix toh represents from Tour of Heroes and the prefix admin represents an admin feature area.' },
                { category: CategoryEnum.Do, message: 'Do use a prefix that identifies the feature area or the app itself.' }
                { category: CategoryEnum.Reason, message: 'Prevents element name collisions with components in other apps and with native HTML elements.' },
                { category: CategoryEnum.Reason, message: 'Makes it easier to promote and share the component in other apps.' },
                { category: CategoryEnum.Reason, message: 'Components are easy to identify in the DOM.' },
                { category: CategoryEnum.Avoid, message: 'Avoid including the prefix in the class name.' },
                
            ]
        },
    ]
}
