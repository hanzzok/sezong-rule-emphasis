import { Decorator, RenderableInline, RenderableText } from 'sezong/api';

export const ItalicRule: Decorator<ItalicText> = {
  compile: ([primaryInput]) => new ItalicText(primaryInput),
  name: 'italic',
  namespace: 'std'
};

export class ItalicText extends RenderableText {
  constructor(data: RenderableInline) {
    super(data);
  }

  public debug() {
    return `Italic(${this.data.debug()})`;
  }
}
