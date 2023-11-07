interface ContextDividerProps {
  colour: string;
}

const ContextDivider = ({ colour }: ContextDividerProps) => {
  const colourVar = colour === 'primary' ? 'bg-primary' : 'bg-secondary';
  return (
    <div className={`w-full ${colourVar} h-[1.2px] my-8 opacity-50`}></div>
  );
};

export default ContextDivider;
