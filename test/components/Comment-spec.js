import React from 'react';
import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import Comment from '../../src/components/Comment';

describe('Comment', () => {
  const renderer = createRenderer();
  it('propsに設定した文字列がそのまま出力される', () => {
    renderer.render(
       <Comment author="takashi">hello</Comment>
    );
    const actualElement = renderer.getRenderOutput();
    const expectedElement = (
      <div className="comment">
        <h3 className="commentAuthor">
          takashi
        </h3>
        <span dangerouslySetInnerHTML={{ __html: '<p>hello</p>\n' }} />
      </div>
    );
    expect(actualElement).toEqualJSX(expectedElement);
  });
});