export const code = {
    main: { language: 'typescript', content: require('!!raw-loader!../../code/bootstrap/main.ts') },
    appmodule: { language: 'typescript', content: require('!!raw-loader!../../code/bootstrap/app.module.ts') },
    appcomponent: { language: 'typescript', content: require('!!raw-loader!../../code/bootstrap/app.component.ts') },
    appcomponenthtml: { language: 'html', content: require('!!raw-loader!../../code/bootstrap/app.component.html') },
    indexhtml: { language: 'html', content: require('!!raw-loader!../../code/bootstrap/index.html') },
    
}