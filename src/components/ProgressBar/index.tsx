import React from 'react';

interface iProgressBar {
  bgcolor: string;
  completed: any;
}

const ProgressBar: React.FC<iProgressBar> = ({ bgcolor, completed }) => {
  const containerStyles = {
    position: 'relative',
    overflow: 'hidden',
    height: '5px',
    width: '165px',
    backgroundColor: '#F6F7F9',
    borderRadius: 8,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed / 10}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
    </div>
  );
};

export default ProgressBar;
