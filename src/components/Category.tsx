type Props = { name: string; setFilters: any };

export default function Category({ name, setFilters }: Props) {
  const handleSetFilters = () => {
    setFilters((prev: any) => {
      if (prev.includes(name)) return prev;
      return [...prev, name];
    });
  };

  return (
    <span
      className="category text-normal pointer capitalize"
      onClick={handleSetFilters}
    >
      {name}
    </span>
  );
}
