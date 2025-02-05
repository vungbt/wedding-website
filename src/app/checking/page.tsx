'use client';
import CheckingView from '@/libraries/blocks/checking/view';
import { HydrateWrapper } from '@/libraries/common/hydrate-wrap';

export default function CheckingPage() {
  return (
    <HydrateWrapper>
      <CheckingView />
    </HydrateWrapper>
  );
}
