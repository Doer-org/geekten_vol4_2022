import { TwitterShareButton, TwitterIcon } from "react-share";
import { FC } from "react";

export const Twitter: FC<{ url: string; title: string }> = ({
  url,
  title,
}) => {
  return (
    <div className="px-10">
      <TwitterShareButton url={url} title={title} hashtags={["DITA"]}>
        <TwitterIcon size={50} round={true} />
      </TwitterShareButton>
    </div>
  );
};
