import { useRouter } from "next/navigation";

 export const useRedirection = () => {
  const router = useRouter();

  const handleRedirection = (direction: string) => {
    router.push(direction);
  };

  return handleRedirection;
};
