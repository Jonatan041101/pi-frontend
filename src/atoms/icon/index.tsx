import { IconTypes } from '@/types/icon';
import React from 'react';
import Arrow from './arrow';

interface Props {
  icon: IconTypes;
}

export default function Icons({ icon }: Props) {
  return <>{icon === 'arrow' && <Arrow />}</>;
}
