// Shared TypeScript types for FitLog
import type React from 'react';

export interface Workout {
  id: number;
  name: string;
  description: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  sets: number;
  reps: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  instructions: string[];
}

export interface ContextValue {
  todaysPlan: Workout[];
  settodaysplan: React.Dispatch<React.SetStateAction<Workout[]>>;
  savePlan: Workout[];
  setsaveplan: React.Dispatch<React.SetStateAction<Workout[]>>;
  active: boolean;
  setactive: React.Dispatch<React.SetStateAction<boolean>>;
}
