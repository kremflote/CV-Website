import { useEffect, useState, type FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import type { IShowcase } from "../interfaces/IShowcase";
import { getShowcases } from "../services/CvService";
import type { IShowcaseResponseList } from "../interfaces/IServiceResponses";
import { ShowcaseContext } from "./ShowcaseContext";

export const ShowcaseProvider: FC<IProviderProps> = ({ children }) => {
  const [showcases, setShowcases] = useState<IShowcase[]>([]);
  const [showcaseIsLoading, setShowcaseIsLoading] = useState<boolean>(true);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const initializeShowcases = async () => {
      const response: IShowcaseResponseList = await getShowcases();

      if (isCancelled) return;

      if (!response.success) {
        setInitError(response.error ?? "Failed to load showcases");
        setShowcaseIsLoading(false);
        return;
      }

      setInitError(null);
      setShowcases(response.data);
      setShowcaseIsLoading(false);
    };

    void initializeShowcases();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <ShowcaseContext.Provider
      value={{
        showcases,
        showcaseIsLoading,
        initError,
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};
