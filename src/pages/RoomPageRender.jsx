import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WaitPage from './WaitPage';
import ChatPage from './ChatPage';
import PageNotFound from './PageNotFound';

const RoomPageRender = ({ dbService, uid }) => {
  const { roomId } = useParams();
  const [roomsInfo, setRoomsInfo] = useState(null);
  const [usersInfo, setusersInfo] = useState(null);

  useEffect(() => {
    // console.log('* roomId: ', roomId);
    const handleRoomInfo = (value) => {
      setRoomsInfo(value);
      // console.log('*** roomsInfo: ', value);
    };
    dbService.syncRoomsInfo(roomId, handleRoomInfo);
  }, []);

  useEffect(() => {
    // console.log('* uid: ', uid);
    if (uid !== null) {
      const handleUsersInfo = (value) => {
        setusersInfo(value);
        // console.log('*** usersInfo: ', value);
      };

      // get user's rooms info, and callback function to setState
      dbService.syncUsersInfo(uid, handleUsersInfo);
    }
  }, [uid]);

  return (
    <>
      {!roomsInfo ? (
        <PageNotFound />
      ) : usersInfo?.[roomId] ? (
        <ChatPage dbService={dbService} uid={uid} roomId={roomId} />
      ) : (
        <WaitPage handleJoinChat={() => console.log('asdf')} />
      )}
    </>
  );
};

export default RoomPageRender;
