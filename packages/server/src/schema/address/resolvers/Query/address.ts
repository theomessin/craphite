import type { QueryResolvers } from "./../../../types.generated";

export const address: NonNullable<QueryResolvers["address"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return [
    {
      __typename: "InternalAddress",
      id: "0xc0ffee254729296a45a3885639AC7E10F9d54979",
      username: "theomessin",
    },
    {
      __typename: "ExternalAddress",
      id: "0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E",
      contactName: "SpaceX",
    },
  ];
};
