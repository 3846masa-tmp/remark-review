import ReviewCompiler from '../ReviewCompiler';

import join from './join';
import joinWithLineBreak from './joinWithLineBreak';

import ignore from './ignore';
import escape from './escape';
import heading from './heading';
import reference from './reference';
import image from './image';
import footnote from './footnote';
import table from './table';
import crossReference from './crossReference';
import footnoteReference from './footnoteReference';
import blockMathjax from './blockMathjax';

export interface Converters {
  [key: string]: (...args: any[]) => any,
}

export { ReviewCompiler };
export default <Converters> {
  ignore,
  image,
  table,
  heading,
  footnote,
  crossReference,
  footnoteReference,
  blockMathjax,
  yaml: ignore,
  html: ignore,
  definition: ignore,
  tableCaption: ignore,
  crossReferenceLabel: ignore,
  footnoteDefinition: ignore,
  delete: join,
  strong: join,
  emphasis: join,
  tableCell: join,
  paragraph: join,
  link: join,
  root: joinWithLineBreak,
  blockquote: joinWithLineBreak,
  list: joinWithLineBreak,
  listItem: join,
  tableRow: joinWithLineBreak,
  code: escape,
  inlineCode: escape,
  text: escape,
  linkReference: reference,
  imageReference: reference,
};
