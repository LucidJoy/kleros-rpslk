import React, { useContext } from "react";
import {
  faHandRock,
  faHandScissors,
  faHandPaper,
  faHandSpock,
  faHandLizard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RpsContext } from "@/context/RpsContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function Choose() {
  const { moveNumber, setMoveNumber } = useContext(RpsContext);

  const handleSelectMove = (num, move) => {
    try {
      setMoveNumber(num);
      toast.success(`${move} selected.`);
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <Card className='bg-[#262626] text-white'>
      <CardHeader>
        <CardTitle>Choose your move</CardTitle>
      </CardHeader>

      <CardContent className='grid gap-8'>
        <div className='flex items-center gap-4'>
          <FontAwesomeIcon icon={faHandRock} size='2xl' color='' />
          <div>
            <p className='text-sm font-medium leading-none ml-[2px]'>Rock</p>
          </div>
          <div className='ml-auto font-medium'>
            <Button
              variant='outline'
              onClick={() => handleSelectMove(1, "Rock")}
            >
              Select
            </Button>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <FontAwesomeIcon icon={faHandPaper} size='2xl' color='' />
          <div>
            <p className='text-sm font-medium leading-none'>Paper</p>
          </div>
          <div className='ml-auto font-medium'>
            <Button
              variant='outline'
              onClick={() => handleSelectMove(2, "Paper")}
            >
              Select
            </Button>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <FontAwesomeIcon icon={faHandScissors} size='2xl' color='' />
          <div>
            <p className='text-sm font-medium leading-none'>Scissors</p>
          </div>
          <div className='ml-auto font-medium'>
            <Button
              variant='outline'
              onClick={() => handleSelectMove(3, "Scissors")}
            >
              Select
            </Button>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <FontAwesomeIcon icon={faHandLizard} size='2xl' color='' />
          <div>
            <p className='text-sm font-medium leading-none'>Lizard</p>
          </div>
          <div className='ml-auto font-medium'>
            <Button
              variant='outline'
              onClick={() => handleSelectMove(4, "Lizard")}
            >
              Select
            </Button>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <FontAwesomeIcon icon={faHandSpock} size='2xl' color='' />
          <div>
            <p className='text-sm font-medium leading-none -ml-[4px]'>Spock</p>
          </div>
          <div className='ml-auto font-medium'>
            <Button
              variant='outline'
              onClick={() => handleSelectMove(5, "Spock")}
            >
              Select
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
