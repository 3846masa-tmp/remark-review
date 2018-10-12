import { UNIST } from 'unist';
import { defaultsDeep } from 'lodash';

import ReVIEWCompiler from '../../ReVIEWCompiler';

export default function join(this: ReVIEWCompiler, node: UNIST.Parent) {
  const value = this.all(node)
    .join('')
    .trim()
    .replace(/\t/g, '\x20\x20');
  return defaultsDeep(
    {
      value,
    },
    node,
  ) as UNIST.Node;
}
