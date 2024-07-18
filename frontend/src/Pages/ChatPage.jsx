import React from 'react'

const ChatPage = () => {

    const fetchChats = async () => {
        const { data } = await axios.get('/api/chat');

        console.log(data);

    }

  return (
    <div>
      Chats
    </div>
  )
}

export default ChatPage
