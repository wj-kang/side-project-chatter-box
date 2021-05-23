import { firebaseAuth } from '../firebase';

class AuthService {
  guest() {
    return firebaseAuth.signInAnonymously();
  }

  logout() {
    firebaseAuth.signOut();
  }

  deleteAccount() {
    const user = firebaseAuth.currentUser;
    user
      .delete()
      .then(function () {
        console.log('account deleted');
      })
      .catch(function (error) {
        console.log('Error: failed to delete the account');
      });
  }

  onAuthChange(context) {
    firebaseAuth.onAuthStateChanged((user) => {
      context(user);
    });
  }
}

export default AuthService;
