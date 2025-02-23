export default {
  meta: {
    fixable: 'code',
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === '@emotion/css') {
          context.report({
            node: node.source,
            message: `Vanilla emotion should not be used`,
          })
        }
      },
    }
  },
}
