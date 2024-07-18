import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/token";
import Cookies from 'js-cookie';

const AdminRoutes = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get('token');
        console.log("Retrieved token from cookie:", token);

        if (!token) {
            navigate("/admin", { replace: true });
            return;
        }

        dispatch(setToken(token));

        const checkUser = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:3000/api/v1/admin/check-admin",
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
                    navigate("/admin", { replace: true });
                }
            } catch (error) {
                console.error("Error occurred while checking user:", error);
                navigate("/admin", { replace: true });
            }
        };

        checkUser();
    }, [dispatch, navigate]);

    return children;
};

export default AdminRoutes;
