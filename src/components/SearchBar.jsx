import React from "react";

export function SearchBarModule({title, label, barText, dividerText}) {

    return (
        <>
            <div className="search">
                <h1>{title}</h1>
                <div>
                    <form className="search-field" action="#">
                        <label for="search-field" className="sr-only">{label}</label>   
                        <input id="search-field" className="masthead-search-field" type="text" name="q"
                            placeholder={barText} aria-label={barText}
                        />
                        <button type="submit" aria-label="Search"><i className="material-icons">search</i></button>
                    </form>
                </div>
                <div className="divider">
                    <p>{dividerText}</p>
                </div>
            </div>
        </>
    )
}