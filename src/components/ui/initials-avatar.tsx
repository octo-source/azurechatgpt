import React from 'react';

interface InitialsAvatarProps {
  name: string;
  className?: string;
}

// Returns the initials based on the name
const getInitials = (name: string) => {
  if (!name) return "N/A";

  // Split the name into pieces by spaces
  const nameParts = name.split(' ');

  // If there is only one name, return the first two letters
  if (nameParts.length === 1) return nameParts[0].slice(0,2).toUpperCase();

  // Otherwise set the last initial to the first letter of the first part
  const lastInitial = nameParts[0][0];

  // Tentatively set the first initial to the first letter of the last part
  let firstInitial = nameParts[nameParts.length - 1][0];

  // If the firstInitial is a '(' and there are more than two parts, set the first initial to the
  // first letter of the next to last part
  if (firstInitial === '(' && nameParts.length > 2) {
    firstInitial = nameParts[nameParts.length - 2][0];
  }

  // Return the initials
  return `${firstInitial}${lastInitial}`.toUpperCase();
};

const InitialsAvatar: React.FC<InitialsAvatarProps> = ({ name, className }) => {
  const initials = getInitials(name);

  return (
    <div className={`rounded-full bg-gray-200 text-xl text-white p-2 ${className}`}>
      {initials}
    </div>
  );
};

export default InitialsAvatar;