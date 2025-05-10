import { createContext, useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axiosInstance.get("/api/user/me/");
                setUser(response.data);
                setIsLoggedIn(true);
            } catch (error) {
                console.error("인증 체크 실패:", error);
                setUser(null);
                setIsLoggedIn(false);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (isLoading) return null; 

    return (
        <AuthContext.Provider value={{ isLoggedIn, user , setIsLoggedIn, setUser, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
    
    
}
