import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useContext } from "react";

import { LampDemo } from "@/components/ui/lamp";
import { AnimatedButton } from "@/components/AnimatedButton";
import { RpsContext } from "@/context/RpsContext";

export default function Home() {
  const { hash, hashLoad } = useContext(RpsContext);
  const router = useRouter();

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
