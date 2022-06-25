import '@emotion/react';
import { Theme as ProjectTheme } from '../components/ui/StylesProvider';

declare module '@emotion/react' {
  export interface Theme extends ProjectTheme {}
}
