import { Box } from "@mui/system";



const Bar = (props: any) => {
  const propsArr = Object.values(props)

  const barProps = [
    "w-32", "mb-2", "h-4"
  ]


  return (
    <Box
      className={`${[...propsArr]}  ${barProps.join(" ")}`}
    />
  );
};

export default Bar;
