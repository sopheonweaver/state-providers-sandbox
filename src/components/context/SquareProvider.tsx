import React, { useMemo } from 'react';

interface SquareContextProps {
  counters: Record<string, number>;
  increment: (id: string) => void;
}

const defaultContext: SquareContextProps = {
  counters: {},
  increment: () => {},
};

export const SquareContext = React.createContext<SquareContextProps>(defaultContext);

interface SquareProviderProps {
  children: React.ReactNode;
}

const SquareProvider = ({ children }: SquareProviderProps) => {
  const [counters, setCounters] = React.useState<Record<string, number>>({});

  const contextValue = useMemo(
    () => ({
      counters,
      increment: (id: string) => {
        setCounters((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      },
    }),
    [counters]
  );

  return <SquareContext.Provider value={contextValue}>{children}</SquareContext.Provider>;
};

export default SquareProvider;
