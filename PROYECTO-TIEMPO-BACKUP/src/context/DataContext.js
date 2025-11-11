import React, { createContext, useContext, useState } from 'react';
import {
  users,
  categories,
  moods,
  habits,
  timeRecords,
  moodRecords,
  awards,
  alerts,
  weeklyAssignments,
  infoProgress,
  emotes,
  addTimeRecord,
  addMoodRecord,
  getUserTimeRecords,
  getUserMoodRecords,
  calculatePoints,
} from '../helper/db';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [currentUserId] = useState('u1'); // Current logged-in user
  const [dataVersion, setDataVersion] = useState(0); // Used to trigger re-renders

  // Data getters
  const getCurrentUser = () => {
    dataVersion; // Access to trigger re-render
    return users.find(u => u.id === currentUserId);
  };
  
  const getUserTimeRecordsData = (userId = currentUserId) => {
    dataVersion; // Access to trigger re-render
    return getUserTimeRecords(userId);
  };
  
  const getUserMoodRecordsData = (userId = currentUserId) => {
    dataVersion; // Access to trigger re-render
    return getUserMoodRecords(userId);
  };

  // Data mutations
  const createTimeRecord = (categoryId, habitId, duration, notes = '') => {
    const points = calculatePoints(duration, categoryId);
    const record = addTimeRecord(currentUserId, categoryId, habitId, duration, points, notes);
    setDataVersion(v => v + 1); // Trigger re-render
    return record;
  };

  const createMoodRecord = (moodId, note = '') => {
    const record = addMoodRecord(currentUserId, moodId, note);
    setDataVersion(v => v + 1); // Trigger re-render
    return record;
  };

  // Weekly assignment progress
  const getWeeklyAssignmentProgress = () => {
    dataVersion; // Access to trigger re-render
    return weeklyAssignments.map(assignment => {
      const category = categories.find(c => c.id === assignment.categoryId);
      const completed = timeRecords.filter(
        r => r.userId === currentUserId && r.categoryId === assignment.categoryId
      ).length;
      
      return {
        ...assignment,
        ...category, // Merge category data (icon, title, etc.)
        phase: completed,
        progress: Math.min(100, Math.round((completed / assignment.countRequirement) * 100)),
        completed,
        isCompleted: completed >= assignment.countRequirement,
      };
    });
  };

  // Redeem award
  const redeemAward = (awardId) => {
    const user = getCurrentUser();
    const award = awards.find(a => a.id === awardId);
    
    if (!award) {
      return { success: false, message: 'Premio no encontrado' };
    }
    
    if (user.points < award.points) {
      return { success: false, message: 'No tenés suficientes puntos para canjear este premio' };
    }
    
    // Deduct points
    user.points -= award.points;
    setDataVersion(v => v + 1); // Trigger re-render
    
    return { success: true, message: '¡Premio canjeado exitosamente!' };
  };

  const value = {
    // Static data
    users,
    categories,
    moods,
    habits,
    timeRecords,
    moodRecords,
    awards,
    alerts,
    weeklyAssignments,
    infoProgress,
    emotes,
    
    // Current user
    currentUserId,
    getCurrentUser,
    
    // Data getters
    getUserTimeRecordsData,
    getUserMoodRecordsData,
    getWeeklyAssignmentProgress,
    
    // Data mutations
    createTimeRecord,
    createMoodRecord,
    calculatePoints,
    redeemAward,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;