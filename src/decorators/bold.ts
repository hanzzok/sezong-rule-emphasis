import { Decorator, RenderableInline, RenderableText } from 'sezong/api';

export const BoldRule: Decorator<BoldText> = {
  compile: ([primaryInput]) => new BoldText(primaryInput),
  name: 'bold',
  namespace: 'std'
};

export class BoldText extends RenderableText {
  constructor(data: RenderableInline) {
    super(data);
  }

  public debug() {
    return `Bold(${this.data.debug()})`;
  }
}
