import { useEffect, useState, ReactNode } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
}


interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      setIsLoading(true);
    } else {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return <div>{isLoading ? props.children : null}</div>;
};

export default Protected;
