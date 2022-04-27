import Home from './Home';

const NFTMint = ({
  candyMachineId,
  connection,
  startDateSeed,
  txTimeoutInMilliseconds,
  rpcHost,
}: any) => {
  return (
    <>
      <Home
        candyMachineId={candyMachineId}
        connection={connection}
        startDate={startDateSeed}
        txTimeout={txTimeoutInMilliseconds}
        rpcHost={rpcHost}
      />
    </>
  );
};

export default NFTMint;
