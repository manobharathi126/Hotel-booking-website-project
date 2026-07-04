import axios from "axios";
import { useState } from 'react';
import '../styles/Login.css';


const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
  </svg>
);
const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  </svg>
);
const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>
  </svg>
);

const perks = [
  { img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=60&q=80', text: 'Exclusive member-only rates' },
  { img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=60&q=80', text: 'Priority check-in & late checkout' },
  { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=60&q=80', text: 'Complimentary welcome amenity' },
  { img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=60&q=80', text: 'Loyalty points on every stay' },
];

export default function Login({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', remember: false });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors(prev => ({ ...prev, [name]: '', general: '' }));
  };

  const validate = () => {
    const errs = {};
    if (isSignup && !form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Minimum 6 characters';
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    try {
      const url = isSignup
        ? "http://localhost:5000/register"
        : "http://localhost:5000/login";

      const response = await axios.post(url, {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("user", JSON.stringify(response.data.user));

      if (onLogin) {
        onLogin(response.data.user);
      }

    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong. Please try again.";
      const lower = message.toLowerCase();

      if (lower.includes("password")) {
        setErrors({ password: message });
      } else if (
        lower.includes("email") ||
        lower.includes("user") ||
        lower.includes("not found") ||
        lower.includes("account")
      ) {
        setErrors({ email: message });
      } else {
        setErrors({ general: message });
      }
    }
  };

  return (
    <div className="login-page">
      {/* Left Panel */}
      <div className="login-left">
        <div className="login-left-overlay" />
        <div className="login-left-content">
          <div className="login-brand">
            <div className="login-logo">Skypeak Resort</div>
            <div className="login-logo-sub">Luxury Hotel & Resort</div>
          </div>
          <div className="login-left-text">
            <h2>Welcome to a World of<br /><em>Timeless Elegance</em></h2>
            <p>Sign in to unlock exclusive member rates, manage your reservations, and enjoy a seamlessly personalised experience.</p>
          </div>
          <div className="login-perks">
            {perks.map(perk => (
              <div className="perk-item" key={perk.text}>
                <img src={perk.img} alt={perk.text} className="perk-img" />
                <span>{perk.text}</span>
              </div>
            ))}
          </div>
          <div className="login-stars">★★★★★ Five-Star Luxury</div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="login-right">
        <a href="/" className="back-home">← Back to Home</a>

        <div className="login-form-wrap">
          <div className="login-form-header">
            <div className="form-tag">{isSignup ? 'Create Account' : 'Welcome Back'}</div>
            <h1 className="form-title">{isSignup ? 'Join Skypeak' : 'Sign In'}</h1>
            <div className="form-divider" />
            <p className="form-subtitle">
              {isSignup
                ? 'Create your account to start enjoying exclusive benefits.'
                : 'Access your reservations and member privileges.'}
            </p>
          </div>

          {/* Social Login */}
          <div className="social-login">
            <button className="social-btn-google">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.413 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3L16.04 18.013Z"/>
                <path fill="#4A90D9" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
              </svg>
              Continue with Google
            </button>
            <button className="social-btn-fb">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>
          </div>

          <div className="divider-or"><span>or</span></div>

          {isSignup && (
            <div className="field-group">
              <label>Full Name</label>
              <div className={`field-wrap ${errors.name ? 'error' : ''}`}>
                <span className="field-icon"><UserIcon /></span>
                <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} />
              </div>
              {errors.name && <div className="field-error">{errors.name}</div>}
            </div>
          )}

          <div className="field-group">
            <label>Email Address</label>
            <div className={`field-wrap ${errors.email ? 'error' : ''}`}>
              <span className="field-icon"><MailIcon /></span>
              <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
            </div>
            {errors.email && <div className="field-error">{errors.email}</div>}
          </div>

          <div className="field-group">
            <label>Password</label>
            <div className={`field-wrap ${errors.password ? 'error' : ''}`}>
              <span className="field-icon"><LockIcon /></span>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder={isSignup ? 'Min. 6 characters' : 'Enter your password'}
                value={form.password}
                onChange={handleChange}
              />
              <span className="toggle-pw" onClick={() => setShowPassword(p => !p)}>
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>
            {errors.password && <div className="field-error">{errors.password}</div>}
          </div>

          {!isSignup && (
            <div className="form-extras">
              <label className="remember-me">
                <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
          )}

          {/* General error (fallback) */}
          {errors.general && (
            <div className="field-error" style={{ marginBottom: '10px' }}>
              {errors.general}
            </div>
          )}

          <button className="login-submit" onClick={handleSubmit}>
            {isSignup ? 'Create Account' : 'Sign In'} →
          </button>

          {!isSignup && (
            <div className="guest-option">
              <span>Booking as a guest?</span>
              <a href="#booking">Continue without account →</a>
            </div>
          )}

          <div className="toggle-mode">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
            <button onClick={() => { setIsSignup(p => !p); setErrors({}); }}>
              {isSignup ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}