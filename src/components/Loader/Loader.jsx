import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
