import React, { useState } from 'react';

const users = [
  { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
  { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
  { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" }
];

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserError('');
    setPasswordError('');

    const user = users.find(u => u.email === email);

    setTimeout(() => {
      if (!user) {
        console.log("User not found");
        setUserError("User not found");
      } else if (user.password !== password) {
        console.log("Password Incorrect");
        setPasswordError("Password Incorrect");
      } else {
        console.log(user);
      }
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="input-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <div id="user-error" style={{ color: 'red' }}>{userError}</div>
      </div>

      <div>
        <input
          id="input-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div id="password-error" style={{ color: 'red' }}>{passwordError}</div>
      </div>

      <button id="submit-form-btn" type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
