import StarRateIcon from "@material-ui/icons/StarRate";

export function Rate(rate: number) {
  const Stars = [];

  for (let i = 0; i < rate; i++) {
    Stars.push(<StarRateIcon htmlColor="#f2c832" />);
  }

  for (let i = 0; i < 5 - rate; i++) {
    Stars.push(<StarRateIcon htmlColor="#cccccc" />);
  }

  return <div>{Stars}</div>;
}