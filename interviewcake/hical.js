
function mergeRanges(meetings) {

  // Merge meetings ranges
  const sortedMeetings = meetings.sort((a,b) => {
    return a.startTime*10 - b.startTime*10 + a.endTime - b.endTime;
  })
  
  var prevMeeting = null;
  var mergedMeetings = [];
  
  sortedMeetings.forEach(meeting => {
    if (!prevMeeting) {
      prevMeeting = meeting;
    } else if (meeting.startTime <= prevMeeting.endTime) {
      if (meeting.endTime > prevMeeting.endTime) { // extend if meeting is longer than current meeting
        prevMeeting.endTime = meeting.endTime;
      }
    } else {
      mergedMeetings.push(prevMeeting);
      prevMeeting = meeting;
    }
  })
  mergedMeetings.push(prevMeeting);

  return mergedMeetings;
}