import { useEffect, useState } from 'react';

import { getAllEmployees } from '@/api/employeeApi';

import { Employee } from '@/types/Employee';

const HomeView = () => {
  const [employees, setEmployees] = useState<Employee[] | []>([]);
  console.log('🌭 ~ HomeView ~ employees:', employees);

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeesData = await getAllEmployees();

      if (employeesData.length > 0) setEmployees(employeesData);
    };

    fetchEmployees();
  }, []);

  return <div>HomeView</div>;
};
export default HomeView;
