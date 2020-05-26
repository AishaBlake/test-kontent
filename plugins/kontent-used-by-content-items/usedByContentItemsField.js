const {
  getKontentItemNodeTypeName,
} = require('@kentico/gatsby-source-kontent')

// child --(linkedElementCodename)--> parent
// Example
// parentTypeCodename --linkedElementCodename--> childTypeCodename
// article --tags--> tag
// Creating: tag --backReferenceName--> article
const linkUsedByContentItems = (
  api,
  parentTypeCodename,
  childTypeCodename,
  linkedElementCodename,
  backReferenceName
) => {
  const {
    createResolvers,
  } = api

  // i.e. article -> kontent_item_article
  const parentGraphqlType = getKontentItemNodeTypeName(parentTypeCodename)
  // i.e. tag -> kontent_item_tag
  const childGraphqlType = getKontentItemNodeTypeName(childTypeCodename)

  const resolvers = {
    [childGraphqlType]: {
      [backReferenceName]: {
        type: `[${parentGraphqlType}]`,
        // https://www.gatsbyjs.org/docs/schema-customization/
        resolve: async (source, args, context) => {
          const allParentTypeNodes = await context.nodeModel.runQuery({
            query: {
              filter: {},
            },
            type: parentGraphqlType,
            firstOnly: false,
          })
          return allParentTypeNodes.filter(item =>
            item.preferred_language === source.preferred_language
            && item.elements[linkedElementCodename].value.includes(source.system.codename)
          )
        },
      },
    },
  }

  createResolvers(resolvers)
}

module.exports = {
  linkUsedByContentItems,
}
