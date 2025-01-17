import Hero from '@/components/hero';
import scaleImg from '/public/scale.jpg';

export default function ScaleFunction () {
  return (
    <>
      <Hero imgData={scaleImg} title='Scale' imgalt='Scale' />
    </>
  );
}