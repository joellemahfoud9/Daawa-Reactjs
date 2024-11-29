interface Props {
  children: string;
  isLoading: boolean;
}

const SubmitFAB = ({ isLoading, children }: Props) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="min-w-32 fixed z-50 bottom-12 right-12 px-4 py-2 rounded bg-accent text-white text-centers shadow-md hover:bg-opacity-90 focus:outline-amber-400"
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default SubmitFAB;
