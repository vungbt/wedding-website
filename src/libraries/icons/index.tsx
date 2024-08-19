import { CSSProperties, FC } from 'react';
import Loading from './loading';
import Facebook from './facebook';
import Instagram from './instagram';
import Logo from './logo';
import Bars from './bars';
import Close from './close';
import ChevronLeft from './chevron-left';
import ChevronRight from './chevron-right';
import Tiktok from './tiktok';
export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

export type IconName =
  | 'loading'
  | 'facebook'
  | 'instagram'
  | 'logo'
  | 'bars'
  | 'close'
  | 'chevron-right'
  | 'chevron-left'
  | 'tiktok';
export type IconsType = Record<IconName, Icon>;

export const Icons: IconsType = {
  loading: (props: IconProps) => {
    return <Loading {...props} />;
  },
  facebook: (props: IconProps) => {
    return <Facebook {...props} />;
  },
  instagram: (props: IconProps) => {
    return <Instagram {...props} />;
  },
  logo: (props: IconProps) => {
    return <Logo {...props} />;
  },
  bars: (props: IconProps) => {
    return <Bars {...props} />;
  },
  close: (props: IconProps) => {
    return <Close {...props} />;
  },
  'chevron-left': (props: IconProps) => {
    return <ChevronLeft {...props} />;
  },
  'chevron-right': (props: IconProps) => {
    return <ChevronRight {...props} />;
  },
  tiktok: (props: IconProps) => {
    return <Tiktok {...props} />;
  }
};

export const RenderIcon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = Icons[name];
  return <Icon {...reset} />;
};
