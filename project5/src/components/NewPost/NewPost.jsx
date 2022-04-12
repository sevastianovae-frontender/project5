import React from "react";


export const NewPost = ({children, title, buttonText, buttonAction}) => {
  return (
    <div className={s.notFound}>
        <img src={notFound} className={s.image} alt="" aria-hidden="true"/>
        <h2 className={s.title}>{title}</h2>
        {children}
        <button className="btn" onClick={buttonAction}>{buttonText}</button>
    </div>
  );
};
