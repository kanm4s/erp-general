import { createContext, useContext, useEffect, useState } from "react";
import { getAllUser } from "../api/user";

const EmployeeContext = createContext();

function EmployeeContextProvider(props) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmployee = async () => {
    try {
      setLoading(true);
      const res = await getAllUser();
      setEmployees(res.data.Users);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, loading }}>
      {props.children}
    </EmployeeContext.Provider>
  );
}

const useEmployee = () => {
  const ctx = useContext(EmployeeContext);
  return ctx;
};

export { EmployeeContextProvider, EmployeeContext, useEmployee };
