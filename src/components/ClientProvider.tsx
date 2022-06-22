import { SWRConfig } from 'swr';

type ClientProviderProps = {
  children: React.ReactNode;
};

const fetcher = (input: RequestInfo, init: RequestInit) =>
  fetch(input, init).then((res) => res.json());

function ClientProvider({ children }: ClientProviderProps) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher,
        // TODO: add error handler
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default ClientProvider;
