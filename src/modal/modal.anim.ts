import { trigger, animate, style, group, state, transition, AnimationTriggerMetadata } from '@angular/animations';


export const baseAnimation: AnimationTriggerMetadata =
  trigger('baseAnimation', [
    state('void', style({position:'fixed', opacity: 0}) ),
    // route 'enter' transition
    transition(':enter', [

      // css styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
    ]),
    transition(':leave', [

      // css styles at start of transition
      style({ opacity: 1 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 0 }))
    ]),
  ])
