import React from 'react';

interface InitialsAvatarProps {
  initials: string;
  className?: string;
}

const InitialsAvatar: React.FC<InitialsAvatarProps> = ({ initials, className }) => {
  return (
    <div className={`rounded-full bg-gray-200 text-xl text-white p-2 ${className}`}>
      {initials}
    </div>
  );
};

export default InitialsAvatar;