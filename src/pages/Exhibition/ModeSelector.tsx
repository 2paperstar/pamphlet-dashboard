import { ChangeEvent } from 'react';
import useModeStore, { Mode, modes } from './useModeStore';

const ModeSelector = () => {
  const { setType, type } = useModeStore();

  const handleModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value as Mode);
  };

  return (
    <div>
      {modes.map((mode) => (
        <label key={mode}>
          <input
            type="radio"
            name="mode"
            value={mode}
            checked={type === mode}
            onChange={handleModeChange}
          />
          {mode}
        </label>
      ))}
    </div>
  );
};

export default ModeSelector;
