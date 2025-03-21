import React from 'react';
import { Instance } from '../services/ec2Service';

interface InstanceListProps {
  instances: Instance[];
  onSelect?: (instance: Instance) => void;
}

const InstanceList: React.FC<InstanceListProps> = ({ instances, onSelect }) => {
  return (
    <div className="border border-[#33FF00]/30 p-2">
      <div className="text-center mb-2 border-b border-[#33FF00]/30 pb-1">EC2 INSTANCES</div>
      <div className="grid grid-cols-1 gap-1">
        {instances.length === 0 ? (
          <div className="text-[#33FF00]/70">No instances found</div>
        ) : (
          instances.map((instance) => (
            <button
              key={instance.id}
              onClick={() => onSelect?.(instance)}
              className="text-left px-2 py-1 hover:bg-[#33FF00]/20 transition-colors text-sm flex justify-between"
            >
              <span>{instance.id}</span>
              <span className="text-[#33FF00]/70">{instance.state}</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default InstanceList;