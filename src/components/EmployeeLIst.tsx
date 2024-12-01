import { useSupabaseData } from '@/hooks/useSupabaseData';

import Spinner from './loading/Spinner';

import { Employee } from '@/types/Employee';

const EmployeeLIst = () => {
  const {
    data: employees,
    error,
    loading,
  } = useSupabaseData<Employee[]>('employees');

  if (loading) return <Spinner />;
  if (error) return <p>Error cargando empleados: {error.message}</p>;

  return <div>
    <h1>
    EmployeeLIst
    </h1>
    {JSON.stringify(employees)}
    </div>;
};

export default EmployeeLIst;
