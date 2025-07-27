"use client";
import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

// Import specific icon objects for better tree-shaking
import arrowLeftLong from '@iconify-icons/fa6-solid/arrow-left-long';
import instagram from '@iconify-icons/fa/instagram';
import facebook from '@iconify-icons/fa/facebook';
import youtube from '@iconify-icons/fa/youtube';
import github from '@iconify-icons/fa/github';
import linkedin from '@iconify-icons/fa/linkedin';
import twitter from '@iconify-icons/fa/twitter';
import crown from '@iconify-icons/lucide/crown';
import users from '@iconify-icons/lucide/users';
import mail from '@iconify-icons/lucide/mail';
import circle from '@iconify-icons/lucide/circle';
import star from '@iconify-icons/lucide/star';
import laugh from '@iconify-icons/lucide/laugh';
import filter from '@iconify-icons/ci/filter';
import heart from '@iconify-icons/ci/heart-outline';
import settingsOutline from '@iconify-icons/ion/settings-outline';
import arrowLeftRight from '@iconify-icons/bi/arrow-left-right';

// Direct mapping of icon objects for better performance
const ICON_OBJECTS: Record<string, any> = {
  'fa6-solid:arrow-left-long': arrowLeftLong,
  'fa:instagram': instagram,
  'fa:facebook': facebook,
  'fa:youtube': youtube,
  'fa:github': github,
  'fa:linkedin': linkedin,
  'fa:twitter': twitter,
  'lucide:crown': crown,
  'lucide:users': users,
  'lucide:mail': mail,
  'lucide:circle': circle,
  'lucide:star': star,
  'lucide:laugh': laugh,
  'ci:filter': filter,
  'ci:heart': heart,
  'ion:settings-outline': settingsOutline,
  'bi:arrow-left-right': arrowLeftRight,
};

export type IconProps = {  
  icon: string | any;
  className?: string;
  size?: number | string;
  color?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Icon({ 
  icon, 
  className, 
  size = 24,
  color,
  onClick,
  ariaLabel,
}: IconProps) {  
  const iconData = typeof icon === 'string' ? 
    (ICON_OBJECTS[icon] || icon) : icon;
  
  return (
    <IconifyIcon
      icon={iconData}
      className={className}
      height={size}
      width={size}
      color={color}
      onClick={onClick}
      aria-label={ariaLabel}
    />
  );
}

export default Icon;
