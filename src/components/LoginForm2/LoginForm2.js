import React, { useEffect, useRef } from 'react';
import './LoginForm2.css';

function LoginForm2() {
    const signUpOverlay = useRef()
    const signInOverlay = useRef()
    const signUpForm = useRef()
    const signInForm = useRef()

    // When clicked on SignUp Button 
    const signUpSlide = () => {
        // signUpverlay - Right / Moved to the left and make it dissapear
        signUpOverlay.current.style.transform = 'translateX(-100%)';
        signUpOverlay.current.style.zIndex = '0';
        signUpOverlay.current.style.opacity = '0';
        // signInOverlay - Left / Made it visibble with sliding effect
        signInOverlay.current.style.transform = 'translateX(0%)'
        signInOverlay.current.style.opacity = '1';
        signInOverlay.current.style.zIndex = '1';
        // signInForm - Left  /  Moved to right and make it dissapear
        signInForm.current.style.transform = 'translateX(100%)';
        signInForm.current.style.opacity = '0';
        // signUpForm - Right  /  Made it visible with sliding effect
        signUpForm.current.style.transform = 'translateX(0%)'
        signUpForm.current.style.opacity = '1';
        signUpForm.current.style.zIndex = '1';
    }

    // When clicked on SignIn Button 
    const signInSlide = () => {
        // signInOverlay - Left / Moved to right and make it dissapear
        signInOverlay.current.style.transform = 'translateX(100%)';
        signInOverlay.current.style.opacity = '0';
        // SignUpForm - right / Moved to left and make it dissapear
        signUpForm.current.style.transform = 'translateX(-100%)';
        signUpForm.current.style.opacity = '0';
        signUpForm.current.style.zIndex = '0';
        // SignUpOverlay - left / Moved to right and make it visible
        signUpOverlay.current.style.transform = 'translateX(0%)';
        signUpOverlay.current.style.opacity = '1';
        signUpOverlay.current.style.zIndex = '1';
        // SignUpOverlay - / Made it visible with sliding effect
        signInForm.current.style.transform = 'translateX(0%)';
        signInForm.current.style.opacity = '1';
        signInForm.current.style.zIndex = '1';
    }





    return (
        <React.Fragment>
            <div className="parent-block">
                <div className="flex-main">
                    <div ref={signInForm} className="flex-sign-in-left">
                        <h2>Sign In</h2>
                        {/* Sign-in-left form */}
                        <form action="#" className="sign-in-form">
                            <div className="icons-container">
                                <a href="https://www.facebook.com/login" className="social" ><i className="fab fa-facebook-f"></i></a>
                                <a href="https://accounts.google.com/signin" className="social" ><i className="fab fa-google-plus-g"></i></a>
                                <a href="https://www.linkedin.com/login" className="social" ><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <h5>Or use your account</h5>
                            <input name="name" placeholder="Name" />
                            <input name="password" placeholder="Password" />
                        </form>
                        <h5>Forgot your password?</h5>
                        <button className="button">Sign in</button>
                    </div>
                    {/* Sign-up-right form */}
                    <div ref={signUpForm} className="flex-sign-up-right">
                        <h2>Create Account</h2>
                        <form action="#" className="sign-up-form">
                            <div className="icons-container">
                                <a href="https://www.facebook.com/login" className="social" ><i className="fab fa-facebook-f"></i></a>
                                <a href="https://accounts.google.com/signin" className="social" ><i className="fab fa-google-plus-g"></i></a>
                                <a href="https://www.linkedin.com/login" className="social" ><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <h5>Or use your email for registration</h5>
                            <input name="name" placeholder="Name" />
                            <input name="email" placeholder="Email" />
                            <input name="password" placeholder="Password" />
                        </form>
                        <button className="button">Sign Up</button>
                    </div>
                    {/* Overlay */}
                    <div className="overlay-container">
                        <div className="overlay">
                            <div ref={signInOverlay} className="overlay-panel sign-in-overlay">
                                <h2>Welcome Back</h2>
                                <h5>Enter your personal details and start journey with us</h5>
                                <button
                                    onClick={signInSlide}
                                    className="button overlay-sign-in-button">Sign In</button>
                            </div>

                            <div ref={signUpOverlay} className="overlay-panel sign-up-overlay">
                                <h2>Hello Friend</h2>
                                <h5>To keep connected with us please login with your personal info</h5>
                                <button
                                    onClick={signUpSlide}
                                    className="button overlay-sign-up-button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    {/* End of overlay */}
                </div>
            </div>
        </React.Fragment>
    )
}
export default LoginForm2