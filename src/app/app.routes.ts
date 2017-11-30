import { ModuleWithProviders } from "@angular/core";
import { VocabularyComponent } from "./vocabulary/vocabulary.component";
import { RouterModule } from "@angular/router";
import { NamingComponent } from "./naming/naming.component";
import { PrinciplesComponent } from "./principles/principles.component";

export var routeModule: ModuleWithProviders = RouterModule.forRoot([
    { path: 'vocabulary', component: VocabularyComponent },
    { path: 'naming', component: NamingComponent },
    { path: 'principles', component: PrinciplesComponent }
], { useHash: true});