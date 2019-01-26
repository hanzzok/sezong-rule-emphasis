import { Message, MessageType } from 'sezong';
import {
  BlockConstructor,
  getIfExists,
  RenderableBlock,
  validateKeys
} from 'sezong/api';

export const Header3Rule: BlockConstructor<Header3Block> = {
  compile: ([primaryInput], { configuration }, messages, wholeTokens) => {
    if (primaryInput.length === 0) {
      messages.push(
        new Message(
          MessageType.Informal,
          'You should insert primary input on header',
          wholeTokens[0],
          wholeTokens.slice(-1)[0]
        )
      );
    }
    messages.push(...validateKeys(configuration, ['anchor']));
    const anchor = getIfExists(configuration, 'anchor');
    return new Header3Block(primaryInput, anchor);
  },
  name: '###',
  namespace: 'std'
};

export class Header3Block extends RenderableBlock {
  constructor(public readonly text: string, public readonly anchor?: string) {
    super();
  }
  public debug(): string {
    return `Header3(${this.text})`;
  }
}
