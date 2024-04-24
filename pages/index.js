import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

import { LampDemo } from "@/components/ui/lamp";
import { AnimatedButton } from "@/components/AnimatedButton";
import { RpsContext } from "@/context/RpsContext";

export default function Home() {
  const {
    tieModal,
    setTieModal,
    solveLoad,
    winnerP1Modal,
    winnerP2Modal,
    setWinnerP1Modal,
    setWinnerP2Modal,
    setPlayer1Move,
    setPlayer2Move,
    setStakeP1,
    setMoveNumber,
  } = useContext(RpsContext);
  const router = useRouter();

  useEffect(() => {
    setTieModal(false);
    setWinnerP1Modal(false);
    setWinnerP2Modal(false);
    setPlayer1Move(0);
    setPlayer2Move(0);
    setStakeP1(0);
    setMoveNumber(0);

    localStorage.removeItem("rpsContractAddr");
    localStorage.removeItem("c1Hash");
    localStorage.removeItem("saltValue");
    localStorage.removeItem("player2Move");
    localStorage.removeItem("stakeP1");
    localStorage.removeItem("player1Addr");
  }, []);

  return (
    <div>
      <div className='relative w-full h-full'>
        <div className='absolute w-full h-full'>
          <LampDemo />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='absolute top-[600px] w-full flex justify-center'
        >
          <AnimatedButton
            btnName='Enter game'
            onClick={() => router.push("/game")}
          />
        </motion.div>
      </div>
    </div>
  );
}
