interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) return null;

  return (
    <div className="flex justify-center items-center h-40">
      <div className="w-8 h-8 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mr-3"></div>
      <h2 className="text-emerald-400">Carregando...</h2>
    </div>
  );
}
