import React from 'react';
import NavBar from './components/Navbar';
import SignUpForm from './components/Signupform';
import UserCard from './components/Usercard';
import './index.css';

function App() {
  const [user, setUser] = React.useState(null);

  const handleSignUp = (formData) => {
    setUser(formData);
    // In a real app, you'd send data to your backend here
  };

  return (
    <div className="app">
      <NavBar />
      <main className="container">
        {!user ? (
          <SignUpForm onSubmit={handleSignUp} />
        ) : (
          <UserCard name={user.fullName} email={user.email} />
        )}
      </main>
    </div>
  );
}

export default App;