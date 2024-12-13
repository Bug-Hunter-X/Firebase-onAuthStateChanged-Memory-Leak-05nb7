# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common error in Firebase Authentication, specifically a memory leak caused by forgetting to unsubscribe from the `onAuthStateChanged` listener.  The `authBug.js` file shows the erroneous code, while `authBugSolution.js` provides the corrected version.

The problem arises when the `onAuthStateChanged` listener is attached but never detached. This results in the listener continuously running in the background, consuming resources and potentially leading to memory issues. The solution is simple:  always call the unsubscribe function returned by `onAuthStateChanged` when you're finished with the listener.

This is a crucial aspect of responsible Firebase development.  Always clean up your listeners to avoid unexpected behavior and maintain application performance.