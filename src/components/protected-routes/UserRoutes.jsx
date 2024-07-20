import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/token";
import Cookies from 'js-cookie';
import { API } from "../../api";

const UserRoutes = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        console.log("Retrieved token from cookie:", token);

        if (!token) {
            navigate("/user/signup", { replace: true });
            return;
        }

        dispatch(setToken(token));

        const checkUser = async () => {
            try {
                const res = await axios.get(
                    `${API}/user/check-user`,
                    {
                        headers: {
                            'Authorization': `${token}`
                        },
                        withCredentials: true  // Send cookies with cross-origin requests
                    }
                );

                const data = res.data;
                console.log(data);

                if (data.success === false) {
                    navigate("/user/signup", { replace: true });
                }
            } catch (error) {
                console.error("Error occurred while checking user:", error);
                navigate("/user/signup", { replace: true });
            }
        };

        checkUser();
    }, [dispatch, navigate]);

    return children;
};

export default UserRoutes;
