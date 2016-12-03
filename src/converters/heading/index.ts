import ReviewCompiler from '../../ReviewCompiler';
import visit = require('unist-util-visit');

export default function heading(
  this: ReviewCompiler,
  node: any,
) {
  node.label = '';

  visit(node, 'crossReferenceLabel', (crNode: any) => {
    node.label += this.convert(crNode);
  });

  node.value = this.all(node).join('');

  return node;
}
