import React from "react";

export function LiSUForm({category, type = "text", label, value, onChange}) {

    return (
        <div className={`${category}_block`}>
                <label htmlFor={`id_${category}`}>{label}</label>
                <input type={type} name={category} required="" id={`id_${category}`} value={value} onChange={onChange} />
            </div>
    )
}
