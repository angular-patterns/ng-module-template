import { trigger, animate, style, group,state, query, transition } from '@angular/animations';

export const baseAnimation =
trigger('baseAnimation', [
    state('in', style({opacity: 0})),
    transition('void => *', [
      style({opacity: 0}),
      group([
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          opacity: 0,
          
        }))
      ])
    ])
  ])
