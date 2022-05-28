export const convertTimestamptToTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = "0" + date.getHours();
  const minutes = "0" + date.getMinutes();
  const time = hours.substr(-2) + ":" + minutes.substr(-2);
  return time;
};

export const sortMessagesByTimestamp = (arr) => {
  const sortedMessages = arr.sort(function (a, b) {
    return a.time - b.time;
  });
  return sortedMessages;
};
