type PageIntroProps = { eyebrow: string; title: string; description: string };

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-[#dce4df] bg-white pb-16 pt-32 sm:pb-24 sm:pt-36">
      <div className="shell rise-in">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="section-title mt-6">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#65736c] sm:text-xl">{description}</p>
      </div>
    </section>
  );
}
