import { CSSProperties, FC } from 'react';
import Bars from './bars';
import Cheers from './cheers';
import ChevronLeft from './chevron-left';
import ChevronRight from './chevron-right';
import Church from './church';
import Close from './close';
import Facebook from './facebook';
import Instagram from './instagram';
import Line from './line';
import LineTwo from './line-two';
import Loading from './loading';
import Logo from './logo';
import Tiktok from './tiktok';
import Volume from './volume';
import VolumeMute from './volume-mute';
import Random from './random';
import ViewFinder from './viewfinder';
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
  | 'tiktok'
  | 'line'
  | 'line-two'
  | 'cheers'
  | 'church'
  | 'volume'
  | 'volume-mute'
  | 'random'
  | 'view-finder';
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
  },
  line: (props: IconProps) => {
    return <Line {...props} />;
  },
  'line-two': (props: IconProps) => {
    return <LineTwo {...props} />;
  },
  cheers: (props: IconProps) => {
    return <Cheers {...props} />;
  },
  church: (props: IconProps) => {
    return <Church {...props} />;
  },
  volume: (props: IconProps) => {
    return <Volume {...props} />;
  },
  'volume-mute': (props: IconProps) => {
    return <VolumeMute {...props} />;
  },
  random: (props: IconProps) => {
    return <Random {...props} />;
  },
  'view-finder': (props: IconProps) => {
    return <ViewFinder {...props} />;
  }
};

export const RenderIcon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = Icons[name];
  return <Icon {...reset} />;
};
