import { bootstrap, mvc } from './snippets';

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
            code: {
                samples: [
                    {
                        title: 'app.module.ts',
                        code: mvc.appmodule,
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
            code: {
                samples: [
                    
                ]
            }
        },        
    ]
}