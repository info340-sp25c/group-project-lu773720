import React from "react";

export function SULILayout({mainClass, heading, children}) {



    return(
        <main className={mainClass}>
            <div className="border_region">
                <h1 className="login_label">{heading}</h1>
                {children}
            </div>
            
        </main>
    )
}