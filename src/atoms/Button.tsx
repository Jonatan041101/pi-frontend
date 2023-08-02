import { BackgroundColorBtn } from '@/types/style';
import React from 'react';
import Icons from './icon';

interface Props {
  text: string;
  icon?: string;
  background: BackgroundColorBtn;
}

export default function Button({ text, icon, background }: Props) {
  return (
    <div className={`${background} button`}>
      <button className="button__action">
        <span className="button__text">{text}</span>
        {icon && (
          <i className="button__i">
            <Icons icon="arrow" />
          </i>
        )}
      </button>
    </div>
  );
}
