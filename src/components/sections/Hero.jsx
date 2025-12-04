import CardName from "../common/CardName";
import HeroContent from "../common/HeroContent";

export default function Hero() {
  return (
    <section
      className="
    flex items-center
    h-[100%]
    py-[80px] lg:py-[120px]
    bg-[linear-gradient(180deg,#295E90_40%,#e5ecf6_40%)] md:bg-[linear-gradient(90deg,#295E90_38%,#e5ecf6_38%)] lg:md:bg-[linear-gradient(90deg,#295E90_45%,#e5ecf6_30%)]"
    >
      <div className="container mx-auto max-w-[820px] px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Card */}
        <CardName />
        {/* Right Column: Text + CTA */}
        <HeroContent />
      </div>
    </section>
  );
}
