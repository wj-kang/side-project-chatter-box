import { database } from './firebase';
import { nanoid } from 'nanoid';

class DbService {
  syncRoomsInfo(roomId, cb) {
    const ref = database.ref(`rooms/${roomId}`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && cb(value);
    });
  }

  syncUsersInfo(uid, cb) {
    const ref = database.ref(`users/${uid}`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && cb(value);
    });
  }

  async createNewChat(cb1, cb2) {
    const roomId = nanoid(12);
    // If the roomId already exist... create id again
    await database.ref(`rooms/`).once('value', (snapshot) => {
      if (snapshot.val()[roomId]) {
        return this.createNewChat();
      }
    });

    // Otherwise, create new room Info
    const ref = await database.ref(`rooms/${roomId}`);
    await ref.set({
      createdAt: Date.now(),
      users: null,
      userCount: 0,
    });

    // callback setState setRoomId, setCreated
    cb1(roomId);
    cb2(true);
  }

  joinToChat(uid, roomId, nickname) {
    database.ref(`users/${uid}/${roomId}`).set(true);
    database.ref(`rooms/${roomId}/users/${uid}`).set({
      time: Date.now(),
      status: true,
      nickname,
    });

    // increment user counter
    const countRef = database.ref(`rooms/${roomId}/userCount`);
    countRef.once('value', (snap) => {
      countRef.set(snap.val() + 1);
    });
  }

  newMessage() {}

  leaveRoom() {}
}
export default DbService;
