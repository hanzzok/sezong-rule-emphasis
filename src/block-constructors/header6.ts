import { Message, MessageType } from 'sezong';
import {
  BlockConstructor,
  getIfExists,
  RenderableBlock,
  validateKeys
} from 'sezong/api';

export const Header6Rule: BlockConstructor<Header6Block> = {
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
    return new Header6Block(primaryInput, anchor);
  },
  name: '######',
  namespace: 'std'
};

export class Header6Block extends RenderableBlock {
  constructor(public readonly text: string, public readonly anchor?: string) {
    super();
  }
  public debug(): string {
    return `Header6(${this.text})`;
  }
}
