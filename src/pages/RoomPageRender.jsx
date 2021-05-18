import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WaitPage from './WaitPage';
import ChatPage from './ChatPage';
import PageNotFound from './PageNotFound';

const RoomPageRender = ({ dbService, uid }) => {
  const { roomId } = useParams();
  const [roomsInfo, setRoomsInfo] = useState(null);
  const [usersInfo, setusersInfo] = useState(null);

  const handleJoinChat = (nickname) => {
    dbService.joinToChat(uid, roomId, nickname);
  };

  useEffect(() => {
    const handleRoomInfo = (value) => {
      setRoomsInfo(value);
    };
    dbService.syncRoomsInfo(roomId, handleRoomInfo);
  }, []);

  useEffect(() => {
    if (uid !== null) {
      const handleUsersInfo = (value) => {
        setusersInfo(value);
      };
      // get user's rooms info, and callback setState
      dbService.syncUsersInfo(uid, handleUsersInfo);
    }
  }, [uid]);

  return (
    <>
      {!roomsInfo ? (
        <PageNotFound />
      ) : usersInfo?.[roomId] ? (
        <ChatPage //
          dbService={dbService}
          uid={uid}
          roomId={roomId}
          roomsInfo={roomsInfo}
        />
      ) : (
        <WaitPage //
          handleJoinChat={handleJoinChat}
          userCount={roomsInfo.userCount}
        />
      )}
    </>
  );
};

export default RoomPageRender;
