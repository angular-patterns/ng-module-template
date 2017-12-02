import { ModuleWithProviders } from "@angular/core";
import { VocabularyComponent } from "./vocabulary/vocabulary.component";
import { RouterModule } from "@angular/router";
import { principles} from '../docs/principles';
import { vocabulary} from '../docs/vocabulary';
import { naming} from '../docs/naming';
import { GuideComponent } from "./guide/guide.component";




export var AppRoutingModule: ModuleWithProviders = RouterModule.forRoot([
    { path: 'vocabulary', component: VocabularyComponent, resolve: { vocabulary: 'vocabulary' } },
    { path: 'naming', component: GuideComponent, resolve: { data: 'naming'}  },
    { path: 'principles', component: GuideComponent, resolve: { data: 'principles'}  }
], { useHash: true});
