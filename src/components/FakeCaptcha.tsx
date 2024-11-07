"use client";

import {
  IconCheck,
  IconHeadphonesFilled,
  IconInfoCircle,
  IconRefresh,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

type FakeCaptchaProps = {
  image: string; // URL of the image to display
  title: string; // Title of the captcha task
  onSubmit: (selected: number[]) => boolean; // Function to call on successful verification
};

enum State {
  unchecked,
  loading,
  verified,
  unverified,
}

const FakeCaptcha: React.FC<FakeCaptchaProps> = ({
  image,
  title,
  onSubmit,
}) => {
  const [checked, setChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [state, setState] = useState(State.unchecked);

  const [selectedSquares, setSelectedSquares] = useState<number[]>([]);

  // Set up the grid (3x3 grid, 9 squares in total)
  const gridSize = 4;
  const totalSquares = gridSize * gridSize;

  const handleCheckboxClick = () => {
    setState(State.loading);
    setTimeout(() => {
      setShowPopup(true);
      setChecked(false);
      setState(State.unchecked);
    }, 500); // 0.5 second loading spinner
  };

  const handleSquareClick = (index: number) => {
    if (selectedSquares.includes(index)) {
      setSelectedSquares(selectedSquares.filter((i) => i !== index));
    } else {
      setSelectedSquares([...selectedSquares, index]);
    }
  };

  const handleVerifyClick = () => {
    setShowPopup(false);
    const result = onSubmit(selectedSquares);

    if (result) {
      setChecked(true);
      setState(State.verified);
    } else {
      setChecked(false);
      setState(State.unverified);
    }
  };

  return (
    <>
      <div className="relative flex w-80 items-center gap-4 rounded border border-zinc-300 bg-zinc-100 p-2">
        {/* Checkbox */}
        <div className="flex items-center">
          {state == State.unchecked && (
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
                if (!checked) handleCheckboxClick();
              }}
              className="h-6 w-6 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
              disabled={showPopup}
            />
          )}
          {state == State.loading && (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
          )}
          {state == State.verified && (
            <IconCheck className="h-8 w-8 text-green-500" />
          )}
          {state == State.unverified && (
            <IconX className="h-8 w-8 text-red-500" />
          )}
        </div>
        <label className="text-gray-700">I&apos;m not a robot</label>

        <div className="ml-auto flex flex-col items-center">
          <Image
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            width={32}
            height={32}
            alt="reCAPTCHA"
          />
          <span className="mt-1 text-[10px] text-gray-600">reCAPTCHA</span>
          <span className="text-[10px] text-gray-600">Privacy - Terms</span>
        </div>

        {showPopup && (
          <div className="absolute -left-8 md:-left-96 -top-40 z-50 -ml-1 flex w-96 flex-col items-center rounded-md border bg-white p-2 shadow-lg">
          {/* <div className="-top-50 absolute -left-8 z-40 flex w-96 flex-col items-center rounded-md border bg-white p-2 shadow-lg"> */}
            <div className="h-24 w-full bg-blue-600 p-4">
              <p className="text-lg font-semibold leading-tight text-white">
                Select all squares with
              </p>
              <p className="text-2xl font-bold leading-tight text-white">
                {title}
              </p>
            </div>
            <div className="relative mt-2 overflow-hidden bg-gray-200">
              {/* Image */}
              <Image
                src={image}
                alt="Captcha"
                className="aspect-square h-full w-full object-cover"
                width={1000}
                height={1000}
              />

              {/* Squares overlay */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                {Array.from({ length: totalSquares }, (_, i) => (
                  <div
                    key={i}
                    onClick={() => handleSquareClick(i)}
                    className={`relative aspect-square border border-white transition-all ${
                      selectedSquares.includes(i)
                        ? "border-8 bg-white bg-opacity-20"
                        : "bg-transparent"
                    }`}
                  >
                    {selectedSquares.includes(i) && (
                      <div className="absolute -left-1 -top-1 h-6 w-6 rounded-full bg-blue-600">
                        <IconCheck size={24} stroke={2} color="white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 w-full border border-zinc-200"></div>
            <div className="mt-2 flex w-full justify-between">
              <div className="flex gap-2">
                <button
                  className="p-2 text-gray-500 transition hover:text-gray-700"
                  onClick={() => {
                    setSelectedSquares([]);
                    setState(State.unchecked);
                    setShowPopup(false);
                  }}
                >
                  <IconRefresh />
                </button>
                <button className="p-2 text-gray-500 transition hover:text-gray-700">
                  <IconHeadphonesFilled />
                </button>
                <button className="p-2 text-gray-500 transition hover:text-gray-700">
                  <IconInfoCircle />
                </button>
              </div>
              <button
                onClick={handleVerifyClick}
                className="bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-600"
              >
                Verify
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Popup */}
    </>
  );
};

export default FakeCaptcha;
