import React from 'react';
import './Login.css';
export default function Login() {

    const login = () => {
        alert("Succssfully login to SDMP Website")
        document.getElementById('mainbody').innerHTML = `<a href='https://www.sdmpolytechnic.in/'>Click here to view site</a>`;
    }

    return (
        <body id='mainbody'>
            <h1 className='h1tage'>Login to SDMP College website</h1>
            <div className='maindiv'>

                <form >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={login}>Submit</button>
                </form>


            </div >
        </body>
    )
}


