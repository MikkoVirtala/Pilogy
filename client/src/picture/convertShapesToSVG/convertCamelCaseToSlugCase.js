export default function convertCamelCaseToSlugCase(camelCaseString) {
  return camelCaseString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
