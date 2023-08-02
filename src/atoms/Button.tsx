import { BackgroundColorBtn } from '@/types/style';
import React from 'react';
import Icons from './icon';
import { IconTypes } from '@/types/icon';

interface Props {
  text: string;
  icon?: IconTypes;
  background: BackgroundColorBtn;
}

export default function Button({ text, icon, background }: Props) {
  return (
    <div className={`${background} button`}>
      <button className="button__action">
        <span className="button__text">{text}</span>
        {icon && (
          <i className="button__i">
            <Icons icon={icon} />
          </i>
        )}
      </button>
    </div>
  );
}
