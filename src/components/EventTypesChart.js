import React from 'react';
import Plot from 'react-plotly.js';

const EventTypesChart = ({ eventTypeData }) => {
  return (
    <div>
      <h2>Event Types</h2>
      <Plot
        data={[eventTypeData]}
        layout={{ title: 'Event Types', paper_bgcolor: '#111', plot_bgcolor: '#111', font: { color: '#fff' } }}
      />
    </div>
  );
};

export default EventTypesChart;
