import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      Swal.fire('Login failed', error.response?.data?.message || 'Unable to sign in', 'error');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-20">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Admin Access</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Sign in to dashboard</h1>
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full rounded-2xl border px-4 py-3" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full rounded-2xl border px-4 py-3" />
          <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-white">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
