import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';
import randomColor from 'randomcolor';

function ActivitiesLinechart(props){
  const activities = props.activities;

  let dateTracker = {};
  const dateData = [];
  let uniqueActivities = {};
  //format activites for linechart data
  activities.forEach(activity => {
    const date = activity.date;
    const name = activity.activityName;

    //add activity name to uniqueactivities if it doesn't exist there
    if(!(name in uniqueActivities)){
      uniqueActivities[name] = 0;
    }

    // look for date in date tracker and sum activity if it exists
    if(date in dateTracker){
      if(name in dateData[dateTracker[date]]) {
        dateData[dateTracker[date]][name] += activity.totalMinutes;
      } else {
        dateData[dateTracker[date]][name] = activity.totalMinutes;
      }
    } else {
      const addedIndex = dateData.push({date: date}) - 1;
      dateData[addedIndex][name] = activity.totalMinutes;
      dateTracker[date] = addedIndex;
    }
  })

  // at end of formatting dateData, sort it by date
  dateData.sort((a, b) => {
    if(a.date < b.date) {
      return -1;
    } else if(a.date > b.date){
      return 1;
    } else {
      return 0;
    }
  });

  //create lines for chart
  const lines = [];
  for(let key in uniqueActivities){
    lines.push(
      <Line type="monotone" dataKey={key} 
            stroke={randomColor({luminosity: 'bright'})} key={key}
      />
    )
  }

  //this is currently an example from recharts.org
  return (
    <LineChart width={730} height={400} data={dateData}
               margin={{ top: 20, right: 10, left: 10, bottom: 20 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {lines}
    </LineChart>
  )
}

export default ActivitiesLinechart;