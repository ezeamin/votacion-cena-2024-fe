/* eslint-disable no-console */
import { supabase } from '@/supabaseClient';

import { Employee } from '@/types/Employee';

export const getAllEmployees = async (): Promise<Employee[]> => {
  const { data, error } = await supabase.from('employees').select();
  
  if (error) {
    console.error('🧨Error fetching employees:', error);
    return [];
  }

  return data as Employee[];
};
