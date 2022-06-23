import { SWRConfig } from 'swr';
import { privateClient } from '../clients/rickMortyClient';

type CacheConfigProviderProps = {
  children: React.ReactNode;
};

const fetcher = (url: string) => privateClient.get(url).then((res) => res.data);

function CacheConfigProvider({ children }: CacheConfigProviderProps) {
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

export default CacheConfigProvider;
