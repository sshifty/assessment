import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Defaultform from "./DefaultForm";

const UserCreateForm = () => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { userId } = useParams();

  const apiUrl = userId
    ? `https://assessment-users-backend.herokuapp.com/users/${userId}.json`
    : "https://assessment-users-backend.herokuapp.com/users/";
  const fetchUser = async () => {
    try {
      console.log(userId);
      const data = await fetch(apiUrl);
      const fetchedData = await data.json();
      const { first_name, last_name } = fetchedData;
      setUser({ first_name, last_name });
    } catch (e) {
      //do something when there is a network error
      console.log(e);
    }
  };
  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, []);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };
  const onSubmit = async (e) => {
    const { first_name, last_name } = user;
    e.preventDefault();
    let requestOptions = {};
    if (!userId) {
      requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "active",
          first_name,
          last_name,
        }),
      };
    } else {
      requestOptions = {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      };
    }

    try {
      const data = await fetch(apiUrl, requestOptions);

      if (!data.ok) {
        //Server not providing json with success put request, unless the request is faulty
        const res = await data.json();
        let errorTemp = {};
        for (let key of Object.keys(res)) {
          errorTemp = {
            ...errorTemp,
            [key]: res[key][0],
          };
        }
        setErrors(errorTemp);
      } else {
        setErrors({});
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Defaultform
      onSubmit={onSubmit}
      handleChange={handleChange}
      errors={errors}
      user={user}
    />
  );
};

export default UserCreateForm;
