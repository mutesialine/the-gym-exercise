export default function Button({ styles, name, children }) {
  return (
    <button className={`py-2 px-4 w-fit font-bold ${styles}`}>
      {children}
    </button>
  );
}
