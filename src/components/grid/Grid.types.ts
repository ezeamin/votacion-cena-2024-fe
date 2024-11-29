import type { AnyProp } from '@/types';

export type GridProps = AnyProp &
  (
    | {
        container: boolean;
        children?: React.ReactNode;
        gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;
        useScreen?: boolean;
        xl?: never;
        lg?: never;
        md?: never;
        sm?: never;
        xs?: never;
        item?: never;
        rowSpan?: never;
      }
    | {
        item: boolean;
        xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
        lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
        md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
        sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
        xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
        children?: string | React.ReactNode;
        rowSpan?: 1 | 2 | 3 | 4 | 5 | 6;
        container?: never;
        gap?: never;
        useScreen?: never;
      }
  ) & {
    className?: string;
    component?:
      | 'div'
      | 'span'
      | 'section'
      | 'article'
      | 'main'
      | 'header'
      | 'footer'
      | 'form';
    justifyContent?:
      | 'around'
      | 'between'
      | 'center'
      | 'end'
      | 'evenly'
      | 'normal'
      | 'start'
      | 'stretch';
    alignContent?:
      | 'around'
      | 'baseline'
      | 'between'
      | 'center'
      | 'end'
      | 'evenly'
      | 'normal'
      | 'start'
      | 'stretch';
    alignItems?: 'baseline' | 'center' | 'end' | 'start' | 'stretch';
    verticalAlign?:
      | 'auto'
      | 'baseline'
      | 'center'
      | 'end'
      | 'start'
      | 'stretch';
  };
