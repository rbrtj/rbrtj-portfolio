import PortfolioItem from './components/PortfolioItem';

const portfolioItems = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
  },
];

export default function Home() {
  return (
    <>
      <div className="flex" />
      <div>
        <h1 className="text-2xl font-semibold mb-4">Portfolio</h1>
        {portfolioItems.map((item) => (
          <PortfolioItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
