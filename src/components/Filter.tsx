type Props = { name: string; setFilters: any };

export default function Filter({ name, setFilters }: Props) {
  const handleRemoveFilter = () => {
    setFilters((prev: any) => {
      return prev.filter((state: any) => {
        return state !== name;
      });
    });
  };

  return (
    <div className="flex-align text-med">
      <span className="capitalize">{name}</span>
      <span className="pointer m-left-small" onClick={handleRemoveFilter}>
        x
      </span>
    </div>
  );
}
