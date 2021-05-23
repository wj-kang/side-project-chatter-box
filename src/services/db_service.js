import { database } from '../firebase';
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
    await ref.set(
      {
        createdAt: Date.now(),
        users: null,
        userCount: 0,
      },
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );

    // callback setState setRoomId, setCreated
    cb1(roomId);
    cb2(true);
  }

  joinToChat(uid, roomId, nickname) {
    this.newMessage(roomId, 'join', nickname);

    database.ref(`users/${uid}/${roomId}`).set(true);
    database.ref(`rooms/${roomId}/users/${uid}`).set(
      {
        time: Date.now(),
        status: true,
        nickname,
      },
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );

    // increment user counter
    const countRef = database.ref(`rooms/${roomId}/userCount`);
    countRef.once('value', (snap) => {
      countRef.set(snap.val() + 1, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  newMessage(roomId, uid, nickname, msg = ' ') {
    const newMsgRef = database.ref(`messages/${roomId}`).push();
    newMsgRef.set(
      {
        message: msg,
        sender: uid,
        nickname,
        time: Date.now(),
      },
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  }

  syncMessageData(roomId, uid, cb) {
    let timeFrom;
    database.ref(`rooms/${roomId}/users/${uid}/time`).once('value', (snapshot) => (timeFrom = snapshot.val()));

    const msgRef = database.ref(`messages/${roomId}`);
    msgRef.on('value', (snapshot) => {
      const messages = snapshot.val();
      if (messages) {
        const res = Object.keys(messages) //
          .filter((mid) => {
            return messages[mid].time > timeFrom;
          })
          .map((mid) => messages[mid]);

        cb(res);
      }
    });
  }

  leaveRoom(roomId, uid, nickname) {
    this.newMessage(roomId, 'leave', nickname);

    database.ref(`users/${uid}/${roomId}`).set(false);
    database.ref(`rooms/${roomId}/users/${uid}/status`).set(false);

    const countRef = database.ref(`rooms/${roomId}/userCount`);
    countRef.once('value', (snap) => {
      countRef.set(snap.val() - 1, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }
}
export default DbService;
