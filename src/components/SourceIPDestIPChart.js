import React from 'react';
import Plot from 'react-plotly.js';

const SourceIPDestIPChart = ({ scatterData }) => {
  return (
    <div>
      <h2>Source IP vs Destination IP</h2>
      <Plot
        data={[scatterData]}
        layout={{ title: 'Source IP vs Destination IP', xaxis: { title: 'Source IP' }, yaxis: { title: 'Destination IP' }, paper_bgcolor: '#111', plot_bgcolor: '#111', font: { color: '#fff' } }}
      />
    </div>
  );
};

export default SourceIPDestIPChart;
