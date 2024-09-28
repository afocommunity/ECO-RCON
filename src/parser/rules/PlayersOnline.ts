import OnlinePlayers from "../../definitions/OnlinePlayers";
import LogParserRule from "../../definitions/RCONParserRule";

const PlayersOnline: LogParserRule<OnlinePlayers> = {
  regex: /^\\r$/,
  format: (oargs) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const args = oargs as RegExpMatchArray;
    const response: Partial<OnlinePlayers> = {} as OnlinePlayers;
    response.success = true;

    return response as OnlinePlayers;
  },
};
export default PlayersOnline;
