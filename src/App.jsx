import React from "react";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
};

export default App;