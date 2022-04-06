import './App.css';
import app from './firebase.init';
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {user.uid ? (
        <>
          <div className='flex justify-center items-center h-[100vh]'>
            <div className='w-1/2 h-96 bg-slate-100 rounded-3xlr'>
              <button
                className='block px-5 py-3 bg-red-500 text-white rounded-lg mt-3 mb-8 mx-auto'
                onClick={handleSignOut}>
                Sign Out
              </button>
              <div className='flex justify-center items-center'>
                <div className='flex items-center bg-gray-800 text-white p-10 rounded-3xl'>
                  <div className='w-24 h-24 mr-8'>
                    <img
                      src={user.photoURL}
                      alt=''
                      className='w-full rounded-full'
                    />
                  </div>
                  <div>
                    <h4 className='text-2xl font-bold mb-2'>
                      {user.displayName}
                    </h4>
                    <p className='text-xl font-semibold'>{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='flex justify-center items-center h-[100vh]'>
          <div className='w-1/2 h-96 bg-slate-100 rounded-3xl'>
            <button
              className='block px-5 py-3 bg-blue-400 rounded-lg my-2 mx-auto mt-10'
              onClick={handleGoogleSignIn}>
              Google Sign In
            </button>
            <button
              className='block px-5 py-3 bg-green-400 rounded-lg my-2 mx-auto'
              onClick={handleGithubSignIn}>
              Github Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
