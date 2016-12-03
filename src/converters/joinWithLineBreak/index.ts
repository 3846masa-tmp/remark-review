import ReviewCompiler from '../../ReviewCompiler';

export default function blockquote(
  this: ReviewCompiler,
  node: any,
) {
  node.value = this.all(node).join('\n');
  return node;
}
