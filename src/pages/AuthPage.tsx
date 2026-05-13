import LoginForm from '../components/Authentification/LoginForm';
import illustrationAuth from '../assets/images/illustration-authentication.svg';
import logoLarge from '../assets/images/logo-large.svg';
import SignupForm from '../components/Authentification/SignupForm';
import { useState } from 'react';

export default function AuthPage() {
  const [authForm, setAuthForm] = useState('login');

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex relative flex-col w-140 shrink-0 p-6">
        <img src={logoLarge} alt="logo" className="absolute top-10 left-10" />
        <img
          src={illustrationAuth}
          alt=""
          className="rounded-xl flex-1 object-cover"
        />
        <div className="flex flex-col gap-6 absolute bottom-10 left-10 text-white max-w-120">
          <p className="font1">
            Keep track of your money and save for your future
          </p>
          <p className="font4-regular">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <div className="lg:hidden absolute top-0 left-0 right-0 bg-grey-900 flex items-center justify-center py-4">
        <img src={logoLarge} alt="logo" className="h-[21.76px]" />
      </div>

      <div className="flex flex-1 items-center justify-center">
        {authForm === 'login' ? (
          <LoginForm onClick={() => setAuthForm('signup')} />
        ) : (
          <SignupForm onClick={() => setAuthForm('login')} />
        )}
      </div>
    </div>
  );
}
