import React from "react";

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f0daae' }}>
            {children}
        </div>
    );
};
export default Layout;