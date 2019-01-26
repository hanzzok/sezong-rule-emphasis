import { Decorator, RenderableInline, RenderableText } from 'sezong/api';

export const UnderlineRule: Decorator<UnderlineText> = {
  compile: ([primaryInput]) => new UnderlineText(primaryInput),
  name: 'underline',
  namespace: 'std'
};

export class UnderlineText extends RenderableText {
  constructor(data: RenderableInline) {
    super(data);
  }

  public debug() {
    return `Underline(${this.data.debug()})`;
  }
}
