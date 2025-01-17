import Hero from "@/components/hero";
import performanceImg from '/public/performance.jpg';

export default function PerformancePage() {
  return (
    <>
    
      <Hero imgData={performanceImg} title='Performance' imgalt='performance Image'/>
    </>
  );
}