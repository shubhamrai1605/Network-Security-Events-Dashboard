import React from 'react';
import Plot from 'react-plotly.js';

const EventCountsOverTimeChart = ({ eventCountsOverTimeData }) => {
  return (
    <div>
      <h2>Event Counts Over Time</h2>
      <Plot
        data={[eventCountsOverTimeData]}
        layout={{ title: 'Event Counts Over Time', paper_bgcolor: '#111', plot_bgcolor: '#111', font: { color: '#fff' } }}
      />
    </div>
  );
};

export default EventCountsOverTimeChart;
