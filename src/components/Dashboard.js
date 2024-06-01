import React, { useState } from 'react';
import EventTypesChart from './EventTypesChart';
import EventCountsOverTimeChart from './EventCountsOverTimeChart';
import EventCategoriesChart from './EventCategoriesChart';
import SourceIPDestIPChart from './SourceIPDestIPChart';
import data from './dummy_data.json';

const Dashboard = () => {
  const [selectedSeverity, setSelectedSeverity] = useState('2');
  const [selectedEventType, setSelectedEventType] = useState(null);

  const filteredData = data.filter(event => event.severity === selectedSeverity && (!selectedEventType || event.event_type === selectedEventType));

  const eventTypes = {};
  filteredData.forEach(event => {
    eventTypes[event.event_type] = (eventTypes[event.event_type] || 0) + 1;
  });
  const eventTypeData = {
    x: Object.keys(eventTypes),
    y: Object.values(eventTypes),
    type: 'bar',
    marker: {
      color: '#1f77b4'
    }
  };

  const eventCountsOverTime = {};
  filteredData.forEach(event => {
    const date = event.timestamp.split('T')[0];
    eventCountsOverTime[date] = (eventCountsOverTime[date] || 0) + 1;
  });
  const eventCountsOverTimeData = {
    x: Object.keys(eventCountsOverTime),
    y: Object.values(eventCountsOverTime),
    type: 'scatter',
    mode: 'lines+markers',
    line: {
      color: '#ff7f0e'
    }
  };

  const eventCategories = {};
  filteredData.forEach(event => {
    eventCategories[event.category] = (eventCategories[event.category] || 0) + 1;
  });
  const eventCategoriesData = {
    labels: Object.keys(eventCategories),
    values: Object.values(eventCategories),
    type: 'pie',
    marker: {
      colors: ['#2ca02c', '#d62728', '#9467bd']
    }
  };

  const scatterData = {
    x: filteredData.map(event => event.src_ip),
    y: filteredData.map(event => event.dest_ip),
    mode: 'markers',
    type: 'scattergl',
    marker: {
      color: '#ffbb78'
    }
  };

  return (
    <div style={{ backgroundColor: 'rgb(1 5 29)', color: 'rgb(220 199 173)', padding: '20px' }}>
      <h1>Network Security Events Dashboard</h1>
      
      <label>Select Severity Level:</label>
      <select value={selectedSeverity} onChange={e => setSelectedSeverity(e.target.value)}>
        {[...new Set(data.map(event => event.severity))].sort().map(severity => (
          <option key={severity} value={severity}>{severity}</option>
        ))}
      </select>

      <label>Select Event Type:</label>
      <select value={selectedEventType} onChange={e => setSelectedEventType(e.target.value)}>
        <option value="">All</option>
        {[...new Set(data.map(event => event.event_type))].sort().map(eventType => (
          <option key={eventType} value={eventType}>{eventType}</option>
        ))}
      </select>
      
      <EventTypesChart eventTypeData={eventTypeData} />
      <EventCountsOverTimeChart eventCountsOverTimeData={eventCountsOverTimeData} />
      <EventCategoriesChart eventCategoriesData={eventCategoriesData} />
      <SourceIPDestIPChart scatterData={scatterData} />
    </div>
  );
};

export default Dashboard;
