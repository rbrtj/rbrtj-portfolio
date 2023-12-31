interface PortfolioItemProps {
  title: string;
  description: string;
}

export default function PortfolioItem({ title, description }: PortfolioItemProps) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
