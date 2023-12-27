export default function Error({children}) {
  return (
    <p className="p-2 my-2 rounded-xl bg-red-800 font-bold text-white text-center transition-all uppercase">
      {children}
    </p>
  );
}
