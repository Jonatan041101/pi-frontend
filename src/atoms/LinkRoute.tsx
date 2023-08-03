import { IconTypes } from '@/types/icon';
import { Routes } from '@/types/routes';
import { BackgroundColorBtn } from '@/types/style';
import Link from 'next/link';
import React from 'react';
import Icons from './icon';
interface Props {
  children: React.ReactNode;
  href: Routes;
  icon?: IconTypes;
  background?: BackgroundColorBtn;
  nonStyles?: boolean;
}
export default function LinkRoute({
  children,
  href,
  background,
  icon,
  nonStyles,
}: Props) {
  return (
    <Link
      href={href}
      className={`${background} ${nonStyles ? '' : 'button'}  `}
    >
      {children}
      {icon && (
        <i className="button__i">
          <Icons icon={icon} />
        </i>
      )}
    </Link>
  );
}
