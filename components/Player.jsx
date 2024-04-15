import React, { useContext, useState, useEffect } from "react";
import Choose from "./Choose";
import AvatarDemo from "./AvatarDemo";
import { Input } from "./ui/input";
import { RpsContext } from "@/context/RpsContext";

const Player = ({ address }) => {
  const { player2Addr, setPlayer2Addr } = useContext(RpsContext);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div>
          <div className='flex flex-row mt-[30px] items-center justify-center min-w-[650px] gap-[20px] mb-[30px]'>
            <AvatarDemo />
            <div className='flex flex-col gap-[5px]'>
              <div className='text-[18px] font-medium'>
                {address ? address : "No opponent selected"}
              </div>
              <div className='text-muted-foreground text-[14px]'>
                Total balance:{" "}
                <span className='font-semibold text-white/80'>INTX</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-[20px]'>
            <div className='min-w-[60%]'>
              <Choose />
            </div>
            <div>
              <Input
                placeholder="Enter opponent's address"
                className='w-[300px]'
                onChange={(e) => setPlayer2Addr(e.target.value)}
              />
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Player;
