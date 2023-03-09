import React from 'react';


export default function Login () {
    return (
        <>
                    <p>Log in </p>
                    <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
            
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="email" className="input input-bordered w-full max-w-xs" />
            
            </div>
</>

      )

}