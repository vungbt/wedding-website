import {
  Attend,
  Bridesmaids,
  Groomsmen,
  Invitation,
  Location,
  OurLoveStory,
  Testimonials,
  WeddingGallery,
  WelcomeBlock
} from '@/libraries/blocks';
import { Button } from '@/libraries/common';

export default function Home() {
  return (
    <>
      <WelcomeBlock />
      <OurLoveStory />
      <Invitation />
      <Location />
      <Bridesmaids />
      <Groomsmen />
      <WeddingGallery />
      <Testimonials />
      <Attend />
    </>
  );
}
