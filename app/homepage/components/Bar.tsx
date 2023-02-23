import { Box } from "@mui/system";

interface Props {
  color?: string;
}


const Bar = (props: Props) => {
    const barProps = [
        "w-32", "mb-2", "h-6"
    ]

  return (
    <Box
      className={`${props.color === 'Dark' ? "bg-darkish" : "bg-creamish"}  ${barProps.join(" ")}`}
    />
  );
};

export default Bar;
