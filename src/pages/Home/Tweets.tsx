import { useEffect, useState } from "react";
import { dummyTweets } from "../../datas/dummyTweets"
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { socket } from "../../service/notificationSocket";


const Tweets = () => {
  const [tweets, setTweets] = useState(dummyTweets)
  const [dataFromWS, setDataFromWS] = useState<any>("")

  useEffect(() => {
    //Connect to socket
    socket.connect()

    //authenticate and pass like
    socket.on("connect", () => {
      socket.emit("auth", { userId: "user1" })

      socket.emit("like", {
        targetUserId: "user1",
        fromUser: "emmanuel"
      })
    })

    //listin for notification
    // const onNotif = (n: string) => {
    //   console.log(n);
    // }

    socket.on("notification:new",  (n: string) => {
      console.log(n);
    })

    return () => {
      socket.off("notification:new",  (n: string) => {
      console.log(n);
    });
      socket.disconnect();
    };
  }, [])


  //Like tweet
  const handleLikeTweet = (idx: number) => {
    setTweets(prev =>
      prev.map((tweet, i) =>
        i === idx
          ? {
            ...tweet,
            liked: !tweet.liked,
            likes: tweet.liked ? tweet.likes-- : tweet.likes++,
          }
          : tweet
      )
    );
  };


  return (
    <main className="">
      {tweets.map((tweet, idx) => (
        <section className="border-b border-borderColor px-4 py-3 flex items-start space-x-3" key={idx}>

          <div className="w-[40px]">
            <img src={tweet.profileImg} alt={tweet.profileName} loading="eager" className="w-10 h-10 rounded-full" />
          </div>


          <div className="flex flex-col space-y-4 w-[calc(100%-40px)]">
            <span className="flex items-center space-x-2">
              <h1 className="font-semibold tracking-tight">{tweet.profileName}</h1>
              <h3 className="text-[13px] text-gray-400">{tweet.username}</h3>
              <p className="text-gray-400 pl-3">· {tweet.time}</p>
            </span>

            <span className="">
              <h3>{tweet.tweetMsg}</h3>
            </span>

            <span className="flex space-x-3 items-center">
              {
                !tweet.liked
                  ?
                  <IoMdHeartEmpty className="text-2xl text-gray-400 cursor-pointer" onClick={() => handleLikeTweet(idx)} />
                  :
                  <IoMdHeart className="text-2xl text-red-600 cursor-pointer hover:animate-[ping_0.2s_ease-out_1]" onClick={() => handleLikeTweet(idx)} />

              }

              <p className={`text-gray-400 ${tweet.liked && "text-red-600"}`}>{tweet.likes}</p>
            </span>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Tweets