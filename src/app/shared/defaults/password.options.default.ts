export const passwordOptionsDefaults = {
    defaultValue: "email@gmail.com",
    fields:  [{
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email',
          required: true,
        }
      }]   
}