import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const ReplySection = ({ data }) => {
  const [tweetData, setTweetData] = useState(data);

  const handleGenIds = (withoutIdData) => {
    return {
      ...withoutIdData,
      id: Math.random(),
      comments: withoutIdData.comments.map((element) => handleGenIds(element)),
    };
  };

  useEffect(() => {
    setTweetData(handleGenIds(tweetData));
  }, []);

  return (
    <div>
      <RenderTweet tData={tweetData} />
    </div>
  );
};
const RenderTweet = ({ tData }) => {
  const [tweetData, setTweetData] = useState(tData);
  const [shouldReply, setShouldReply] = useState(0);
  const [reply, setReply] = useState("");

  const onAddData = (comment) => {
    console.log(tweetData);
    let commentItem = {
      msg: comment,
      id: Math.random(),
      comments: [],
    };
    setTweetData((prevData) => ({
      ...prevData,
      comments: [...prevData.comments, commentItem],
    }));
    setShouldReply(0);
  };

  return (
    <div>
      <div key={tweetData?.id} className="main">
        <div className="titleBtn">
          <span className="title">{tweetData.msg}</span>
          {shouldReply != tweetData?.id ? (
            <span
              className="replyBtn"
              onClick={() => setShouldReply(tweetData?.id)}
            >
              Add a reply
            </span>
          ) : (
            <div style={{ padding: "12px" }}>
              <input onChange={(e) => setReply(e.target.value)} />
              <button
                onClick={() => {
                  onAddData(reply);
                }}
              >
                submit
              </button>
            </div>
          )}
        </div>
        {tweetData.comments.map((ele) => {
          return (
            <div className="comments" key={ele.id}>
              <RenderTweet key={tweetData?.id} tData={ele} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

ReplySection.propTypes = {
  data: PropTypes.any,
};
RenderTweet.propTypes = {
  tData: PropTypes.any,
  onAddData: PropTypes.func,
};
export default ReplySection;
