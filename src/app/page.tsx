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
