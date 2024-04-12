import PropsWinnerItem from "../../../types/PropsWinnerItem";
import CarImage from "../../car/CarImage";

function WinnerItem({
  number,
  color,
  name,
  winsAmount,
  bestTime,
}: PropsWinnerItem) {
  return (
    <li className="win-item">
      <div className="win-content win-item-number">{number}</div>
      <div className="win-content win-item-image">
        <CarImage className="car-svg" color={color} />
      </div>
      <div className="win-content win-item-name">{name}</div>
      <div className="win-content win-item-quantity">{winsAmount}</div>
      <div className="win-content win-item-time">{bestTime}</div>
    </li>
  );
}

export default WinnerItem;
