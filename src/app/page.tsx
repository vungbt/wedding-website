import { Bridesmaids, Groomsmen, OurLoveStory, WelcomeBlock } from '@/libraries/blocks';
import { Button } from '@/libraries/common';

export default function Home() {
  return (
    <div>
      <WelcomeBlock />
      <OurLoveStory />
      <Bridesmaids />
      <Groomsmen />
    </div>
  );
}
