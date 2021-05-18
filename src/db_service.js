import { database } from './firebase';

class DbService {
  syncRoomsInfo(roomId, callback) {
    const ref = database.ref(`rooms/${roomId}`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && callback(value);
    });
  }

  syncUsersInfo(uid, callback) {
    const ref = database.ref(`users/${uid}`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && callback(value);
    });
  }
}
export default DbService;
