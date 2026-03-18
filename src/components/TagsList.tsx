export default function TagsList({
  tags,
  color,
}: {
  tags: string[];
  color: string;
}) {
  return (
    <div className='flex flex-wrap gap-3'>
      {tags.map((d, i) => (
        <div
          key={i}
          className='px-3 py-1 rounded-full background-blur-3xl bg-grey-05 border'
          style={{
            borderColor: `var(--color-${color})`,
            color: `var(--color-${color})`,
          }}
        >
          {d}
        </div>
      ))}
    </div>
  );
}
