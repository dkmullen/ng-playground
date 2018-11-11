import {BREAKPOINT} from '@angular/flex-layout';

const NEW_BREAKPOINTS = [
    {
        alias: 'lg.new',
        suffix: 'LgNew',
        mediaQuery: 'screen and (min-width: 1450px) and (max-width: 1809px)',
        overlapping: false
    },
    {
        alias: 'xl.new',
        suffix: 'XlNew',
        mediaQuery: 'screen and (min-width: 1810px) and (max-width: 2160px)',
        overlapping: false
    },
];

export const CustomBreakPointsProvider = { 
  provide: BREAKPOINT,
  useValue: NEW_BREAKPOINTS,
  multi: true
};