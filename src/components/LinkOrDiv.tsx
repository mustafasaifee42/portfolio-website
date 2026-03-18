type Props = {
  as?: 'a' | 'div';
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export function LinkOrDiv({ as: Component = 'div', href, ...props }: Props) {
  if (Component === 'a') {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' {...props} />
    );
  }

  return <div {...props} />;
}
