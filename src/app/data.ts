import { bootstrap, mvc, rxjs } from './snippets';

export const data = {
    concepts: [
        {
            id: 'bootstrap',
            title: 'Angular Bootstrap Process',
            link: '/bootstrap',
            concept: {
                title: 'Conceptual Architecture',
                img: 'bootstrap'                
            },
            demoUrl: 'https://stackblitz.com/edit/angular-ttj9dw?embed=1&file=app/app.component.html',
            code: {
                samples: [
                    {
                        title: 'index.html',
                        code: bootstrap.indexhtml,
                        description: `` 
                    },   
                    {
                        title: 'main.ts',
                        code: bootstrap.main,
                        description: `` 
                    },                    
                    {
                        title: 'app.module.ts',
                        code: bootstrap.appmodule,
                        description: `` 
                    },                    
                    {
                        title: 'app.component.ts',
                        code: bootstrap.appcomponent,
                        description: `` 
                    }, 
                    {
                        title: 'app.component.html',
                        code: bootstrap.appcomponenthtml,
                        description: `` 
                    },                                        
                 
                ]
            }
        },
        {
            id: 'mvc',
            title: 'Model View Controller',
            link: '/mvc',
            concept: {
                title: 'Conceptual Architecture',
                img: 'mvc'                
            },
            demoUrl: 'https://stackblitz.com/edit/angular-vifwsz?embed=1&file=app/app.component.ts',
            code: {
                samples: [
                    {
                        title: 'data/my.service.ts',
                        code: mvc.myservice,
                        description: ``
                    },
                    {
                        title: 'foo/foo.component.ts',
                        code: mvc.foocomponent,
                        description: ``
                    },
                    {
                        title: 'foo/foo.component.html',
                        code: mvc.foocomponenthtml,
                        description: ``
                    }, 
                    {
                        title: 'app.component.ts',
                        code: mvc.appcomponent,
                        description: ``
                    },                                       
                    {
                        title: 'app.component.html',
                        code: mvc.appcomponenthtml,
                        description: ``
                    },
                    {
                        title: 'app.module.ts',
                        code: mvc.appmodule,
                        description: ``
                    },                    
                ]
            }
        },
        {
            id: 'databinding',
            title: 'Data and Event Binding',
            link: '/databinding',
            concept: {
                title: 'Conceptual Architecture',
                img: 'databinding'                
            },
            demoUrl: '',
            code: {
                samples: [
                    
                ]
            }
        },    
        {
            id: 'ngmodule',            
            title: 'NgModule',
            link: '/ngmodule',
            concept: {
                title: 'Conceptual Architecture',
                img: 'ngmodule'                
            },
            demoUrl: '',            
            code: {
                samples: [
                    
                ]
            }
        },  
        {
            id: 'module-deps',            
            title: 'Module Dependencies',
            link: '/module-deps',
            concept: {
                title: 'Conceptual Architecture',
                img: 'module-deps'                
            },
            demoUrl: '',            
            code: {
                samples: [
                    
                ]
            }
        },  
        {
            id: 'import-export',            
            title: 'Importing / Exporting from Modules',
            link: '/import-export',
            concept: {
                title: 'Conceptual Architecture',
                img: 'import-export'                
            },
            demoUrl: '',            
            code: {
                samples: [
                    
                ]
            }
        }, 
        {
            id: 'module-linking',            
            title: 'Module Linking',
            link: '/module-linking',
            concept: {
                title: 'Conceptual Architecture',
                img: 'module-linking'                
            },
            demoUrl: '',            
            code: {
                samples: [
                    
                ]
            }
        },    
        {
            id: 'dependency-injection',            
            title: 'Dependency Injection',
            link: '/dependency-injection',
            concept: {
                title: 'Conceptual Architecture',
                img: 'dependency-injection'                
            },
            demoUrl: '',    
            code: {
                samples: [
                    
                ]
            }
        },        
        {
            id: 'provider-scope',            
            title: 'Provider Scope',
            link: '/provider-scope',
            concept: {
                title: 'Conceptual Architecture',
                img: 'provider-scope'                
            },
            demoUrl: '',            
            code: {
                samples: [
                    
                ]
            }
        },   
        {
            id: 'rxjs',            
            title: 'Functional Reactive Programming',
            link: '/rxjs',
            concept: {
                title: 'Conceptual Architecture',
                img: 'rxjs'                
            },
            demoUrl: 'https://stackblitz.com/edit/angular-kzxfds?embed=1&file=app/app.component.ts',            
            code: {
                samples: [
                    {
                        title: 'app.module.ts',
                        code: rxjs.appmodule,
                        description: ``
                    },
                    {
                        title: 'app.component.ts',
                        code: rxjs.appcomponent,
                        description: ``
                    },
                    {
                        title: 'app.component.html',
                        code: rxjs.appcomponenthtml,
                        description: ``
                    },                   
                ]
            }
        },         
    ]
}