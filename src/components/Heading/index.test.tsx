/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import {act} from 'react-dom/test-utils';
import Heading from "./index";

describe('Heading', () => {
  let container: Element | null = null;
  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if(container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading />, container);
    })
    expect(container?.innerHTML).toBeDefined();
  });
   it('render with children', () => {
    act(() => {
      render(<Heading>Title</Heading>, container);
    })
    expect(container?.textContent).toBe("Title");
  });
   it('render with props size="s"', () => {
    act(() => {
      render(<Heading type="h3">Title</Heading>, container);
    })
    expect(container?.querySelector('h3')).not.toBeNull();
  });
});