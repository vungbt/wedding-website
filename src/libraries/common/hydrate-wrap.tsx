import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { RenderIcon } from '../icons';
import localStorageHelper from '@/utils/helpers/local-storage';

export function HydrateWrapper({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center">
        <RenderIcon name="loading" />
      </div>
    );
  }

  return <Fragment>{children}</Fragment>;
}
