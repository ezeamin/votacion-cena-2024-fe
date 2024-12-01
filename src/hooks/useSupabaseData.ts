import { useEffect, useState } from 'react';

import { TableValue } from '@/constants/tables';

import { supabase } from '@/supabaseClient';

type SupabaseFetchResult<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export const useSupabaseData = <T>(
  table: TableValue,
  selectQuery: string = '*'
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase.from(table).select(selectQuery);

      if (error) {
        setError(error);
        setData(null);
      } else {
        setData(data as T);
      }

      setLoading(false);
    };

    fetchData();
  }, [table, selectQuery]);

  return { data, error, loading } as SupabaseFetchResult<T>;
};
