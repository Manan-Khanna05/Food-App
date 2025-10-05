import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [foodPartner, setFoodPartner] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if user is logged in on app start
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            // Try to get user info by making a request to a protected endpoint
            const response = await axios.get('http://localhost:3000/api/auth/user/me', { 
                withCredentials: true 
            });
            setUser(response.data.user);
        } catch (error) {
            // User not logged in or invalid token - this is expected
            setUser(null);
        }

        try {
            // Try to get food partner info
            const response = await axios.get('http://localhost:3000/api/auth/food-partner/me', { 
                withCredentials: true 
            });
            setFoodPartner(response.data.foodPartner);
        } catch (error) {
            // Food partner not logged in or invalid token - this is expected
            setFoodPartner(null);
        }

        setLoading(false);
    };

    const loginUser = (userData) => {
        setUser(userData);
        setFoodPartner(null);
    };

    const loginFoodPartner = (foodPartnerData) => {
        setFoodPartner(foodPartnerData);
        setUser(null);
    };

    const logout = () => {
        setUser(null);
        setFoodPartner(null);
    };

    const value = {
        user,
        foodPartner,
        loading,
        loginUser,
        loginFoodPartner,
        logout,
        isAuthenticated: !!(user || foodPartner)
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
