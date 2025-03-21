import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Instance } from '../services/ec2Service';
import { Repository } from '../services/githubService';

interface DevOpsContextType {
  ec2Instances: Instance[];
  repositories: Repository[];
  loading: boolean;
  error: string | null;
  setEc2Instances: (instances: Instance[]) => void;
  setRepositories: (repos: Repository[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const DevOpsContext = createContext<DevOpsContextType | undefined>(undefined);

export const DevOpsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ec2Instances, setEc2Instances] = useState<Instance[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <DevOpsContext.Provider
      value={{
        ec2Instances,
        repositories,
        loading,
        error,
        setEc2Instances,
        setRepositories,
        setLoading,
        setError
      }}
    >
      {children}
    </DevOpsContext.Provider>
  );
};

export const useDevOps = (): DevOpsContextType => {
  const context = useContext(DevOpsContext);
  if (context === undefined) {
    throw new Error('useDevOps must be used within a DevOpsProvider');
  }
  return context;
};