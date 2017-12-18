export const code = {
    main: { language: 'typescript', content: require('!!raw-loader!../../code/main.ts') },
    appmodule: { language: 'typescript', content: require('!!raw-loader!../../code/app.module.ts') },
    appcomponent: { language: 'typescript', content: require('!!raw-loader!../../code/app.component.ts') },
    appcomponenthtml: { language: 'html', content: require('!!raw-loader!../../code/app.component.html') },
    indexhtml: { language: 'html', content: require('!!raw-loader!../../code/index.html') },
    
}