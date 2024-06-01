import React from 'react';
import Plot from 'react-plotly.js';

const EventCategoriesChart = ({ eventCategoriesData }) => {
  return (
    <div>
      <h2>Event Categories</h2>
      <Plot
        data={[eventCategoriesData]}
        layout={{ title: 'Event Categories', paper_bgcolor: '#111', plot_bgcolor: '#111', font: { color: '#fff' } }}
      />
    </div>
  );
};

export default EventCategoriesChart;
