"use client";

type Props = {
  title: string;
  location: string;
  imgId: number;
};

export function DestinationCard({ title, location, imgId }: Props) {
  const img = `https://picsum.photos/600/420?random=${imgId}`;

  return (
    <article className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 via-blue-500/8 to-cyan-500/6 border border-border shadow-[0_8px_30px_rgba(2,6,23,0.15)] hover:scale-[1.01] transition-transform">
      <div className="h-44 md:h-56 w-full overflow-hidden">
        <img src={img} alt={`${title} image`} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{location}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm font-medium">From <span className="text-primary">$299</span></div>
          <button className="text-sm px-3 py-1 rounded-lg bg-primary text-primary-foreground">Book</button>
        </div>
      </div>
    </article>
  );
}
