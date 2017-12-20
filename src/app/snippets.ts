export const bootstrap = {
    main: { language: 'typescript', content: require('!!raw-loader!../../snippets/bootstrap/main.ts') },
    appmodule: { language: 'typescript', content: require('!!raw-loader!../../snippets/bootstrap/app.module.ts') },
    appcomponent: { language: 'typescript', content: require('!!raw-loader!../../snippets/bootstrap/app.component.ts') },
    appcomponenthtml: { language: 'html', content: require('!!raw-loader!../../snippets/bootstrap/app.component.html') },
    indexhtml: { language: 'html', content: require('!!raw-loader!../../snippets/bootstrap/index.html') },   
}

export const mvc = {
    myservice: { language: 'typescript', content: require('!!raw-loader!../../snippets/mvc/data/my.service.ts') },
    foocomponent: { language: 'typescript', content: require('!!raw-loader!../../snippets/mvc/foo/foo.component.ts') },
    foocomponenthtml: { language: 'html', content: require('!!raw-loader!../../snippets/mvc/foo/foo.component.html') },
    appmodule: { language: 'typescript', content: require('!!raw-loader!../../snippets/mvc/app.module.ts') },
    appcomponent: { language: 'typescript', content: require('!!raw-loader!../../snippets/mvc/app.component.ts') },
    appcomponenthtml: { language: 'html', content: require('!!raw-loader!../../snippets/mvc/app.component.html') },    
}

export const rxjs = {
    appmodule: { language: 'typescript', content: require('!!raw-loader!../../snippets/rxjs/app.module.ts') },
    appcomponent: { language: 'typescript', content: require('!!raw-loader!../../snippets/rxjs/app.component.ts') },
    appcomponenthtml: { language: 'html', content: require('!!raw-loader!../../snippets/rxjs/app.component.html') },    
}