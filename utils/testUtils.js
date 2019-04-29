
/**
 * @description Return Shallow Wrapper containing nodes(s) with the given data-test value.
 * @param wrapper -Enzyme shallow wrapper to search within.
 * @param value - Value of data-test attribute for search.
 * @returns {ShallowWrapper|ReactWrapper|NodePath|number|never|bigint|T|T}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}
