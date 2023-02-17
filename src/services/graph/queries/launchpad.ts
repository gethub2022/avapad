import gql from 'graphql-tag';

export const launchpadPoolsQuery = gql`
  query poolsQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $block: Block_height
    $where: Pool_filter = {}
  ) {
    pools(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      block: $block
      where: $where
    ) {
      id
      ipfsLink
      poolAddress
      index
      projectName
      tokenAddress
      tokenName
      tokenDecimals
      tokenSymbol
      tokenType
      merkleRoot
      raiseAmount
      smallLogo
      logo
      shortDescription
      website
      telegram
      twitter
      medium
      github
      accessType
      description
      initialSupply
      tokenDistribution
      listingON
      listingTime
      vesting
      whiteListedIpfs
    }
  }
`;
