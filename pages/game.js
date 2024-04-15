import React, { useContext } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ConnectKitButton } from "connectkit";
import logo from "../assets/logo.svg";
import { convertToHex } from "@/utils/convertToHex";
import { bytesToUint256 } from "@/utils/bytesToUint256";
import Player from "@/components/Player";
import { RpsContext } from "@/context/RpsContext";
import { Loader2 } from "lucide-react";

const Game = () => {
  const { hash, moveNumber, hashLoad } = useContext(RpsContext);
  const { address } = useAccount();

  const handleClick = async () => {
    try {
      const res = await fetch("https://kleros-rps.lucidjoy.xyz/api/salt-hash");
      const data = await res.json();
      const hex = convertToHex(data.slice(5));
      const salt = bytesToUint256(hex);

      hash(moveNumber, salt);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] bg-black'>
      {/* <div className='absolute w-full h-full'>
        <SparklesPreview />
      </div> */}

      <div className='absolute border-b border-b-[#FFFFFF40] w-full px-[15px] py-[15px] flex items-center justify-between'>
        <div>
          <Image src={logo} height={40} />
        </div>

        <ConnectKitButton />
      </div>

      <div className='absolute mt-[70px] w-full h-[calc(100vh-70px)]'>
        <div className='flex flex-row text-white'>
          <div className='flex-1 h-[calc(100vh-70px)]'>
            <div className='flex flex-col items-center gap-[20px]'>
              <Player address={address} />

              {hashLoad ? (
                <Button disabled>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Please wait
                </Button>
              ) : (
                <Button
                  onClick={handleClick}
                  variant='outline'
                  className='w-fit'
                >
                  Start game
                </Button>
              )}
            </div>
          </div>

          <Separator
            orientation='vertical'
            className='absolute ml-[50%] mr-[50%] bg-[#FFFFFF40]'
          />

          <div className='flex-1'>{/* <Player address={""} /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
