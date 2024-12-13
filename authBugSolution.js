const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties https://firebase.google.com/docs/auth/web/user-properties
    console.log('user is signed in', user);
  } else {
    // User is signed out
    // ...
  }
});

// Clean up the listener when it's no longer needed
// For example, in a component's `componentWillUnmount` lifecycle method (React) or when the user navigates away from the relevant section of the application.
unsubscribe();