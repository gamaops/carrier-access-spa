import { animate, state, style, transition, trigger } from '@angular/animations';

export const TopFadeAnimation = trigger(
  'TopFade',
  [
    transition(
      ':enter',
      [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate(
          '1s ease-out',
          style({ transform: 'translateY(0%)', opacity: 1 })
        )
      ]
    ),
    transition(
      ':leave',
      [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate(
          '1s ease-in',
          style({ transform: 'translateY(-100%)', opacity: 0 })
        )
      ]
    ),
  ]
);
