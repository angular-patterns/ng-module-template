# ng-primsjs

An angular component for syntax highlighting using primsjs.

## Pre-requisites

* prismjs
* Angular5+

## Installation

Prismjs is a PEER depedency.

npm install prismjs
npm install ng-prismjs

## Setup

**app.module.ts**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrismModule } from 'ng-prismjs';

@NgModule({
  imports:      [ 
    BrowserModule, 
    PrismModule
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule {
}
```

## Usage

### Create a code Snippet (make sure it is not compiled)

**snippet.html**

```html
<div>
   <b>This is an HTML snippet!</b>
</div>
```

### Import the snippet

Use `raw-loader` and `require` to read the snippet into a variable.  The `!!` ensures that no other loaders are processing the file.

Bind the snippet to the `prism` component.

**app.component.ts**

```typescript
import { Component } from '@angular/core';
const snippet: string = require('!!raw-loader!./path/to/snippet.html');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: string;
  language: string;
  constructor() {
     this.content = snippet;
     this.language = 'html'
  }
}

```

**app.component.html**

```html
<prism [content]="content" [language]="language"></prism>
```

