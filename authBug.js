const unsubscribe = onAuthStateChanged(auth, (user) => { if (user) { // User is signed in, see docs for a list of available properties https://firebase.google.com/docs/auth/web/user-properties console.log('user is signed in', user); } else { // User is signed out // ... } });
// unsubscribe(); // This line was missing to prevent memory leak