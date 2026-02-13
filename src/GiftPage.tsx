import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";

export default function GiftPage() {
  const [openedGifts, setOpenedGifts] = useState<Set<number>>(new Set());
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [isValentine, setIsValentine] = useState(false);

  // Check if all gifts are opened
  useEffect(() => {
    if (openedGifts.size === 3) {
      // Delay the envelope appearance for dramatic effect
      setTimeout(() => setShowEnvelope(true), 500);
    }
  }, [openedGifts]);

  const markGiftAsOpened = (giftNumber: number) => {
    setOpenedGifts((prev) => new Set(prev).add(giftNumber));
  };

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center min-h-screen p-4 sm:p-6 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/bg-image.gif')",
      }}
    >
      <Dialog onOpenChange={(open) => open && markGiftAsOpened(1)}>
        <DialogTrigger asChild>
          <img
            src="/assets/gift1.png"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain cursor-pointer hover:scale-110 transition"
            alt="Gift 1"
          />
        </DialogTrigger>

        <DialogContent className="bg-[#9EB3F4] border-none">
          <h2 className="text-xl font-bold text-center font-pix text-[#701018]">
            MY DEDICATED SONG TO YOU
          </h2>
          <iframe
            data-testid="embed-iframe"
            className="border-none rounded-2xl"
            src="https://open.spotify.com/embed/track/1krtpYeZDIzFVLiVfJdmXQ?utm_source=generator"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </DialogContent>
      </Dialog>

      <Dialog onOpenChange={(open) => open && markGiftAsOpened(2)}>
        <DialogTrigger asChild>
          <img
            src="/assets/gift3.png"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain cursor-pointer hover:scale-110 transition"
            alt="Gift 2"
          />
        </DialogTrigger>

        <DialogContent className="max-w-5xl max-h-[95vh] overflow-auto p-6 bg-[#FB5EA1] border-none">
          <h2 className="text-xl font-bold mb-4 text-center font-pix">
            OUR MEMORABLE PHOTOS
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <img
              src="/assets/first-pic.png"
              className="w-full sm:w-[48%] h-auto max-h-[70vh] object-contain rounded"
              alt="First picture"
            />
            <img
              src="/assets/second-pic.png"
              className="w-full sm:w-[48%] h-auto max-h-[70vh] object-contain rounded"
              alt="Second picture"
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog onOpenChange={(open) => open && markGiftAsOpened(3)}>
        <DialogTrigger asChild>
          <img
            src="/assets/gift2.png"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain cursor-pointer hover:scale-110 transition"
            alt="Gift 3"
          />
        </DialogTrigger>

        <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto overflow-x-hidden p-6 bg-[#FE4502] border-none">
          <h2 className="text-xl font-bold text-center font-pix text-white mb-4">
            You just earned..
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 items-start justify-center">
            <div className="flex flex-col items-center gap-2 w-full sm:w-[48%]">
              <div className="w-full h-64 sm:h-80 flex items-center justify-center">
                <img
                  src="/assets/curry.png"
                  className="max-w-full max-h-full object-contain rounded"
                  alt="Curry"
                />
              </div>
              <p className="text-white font-pix text-center text-sm sm:text-base">
                Breakfast Curry! 🍛
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 w-full sm:w-[48%]">
              <div className="w-full h-64 sm:h-80 flex items-center justify-center">
                <img
                  src="/assets/cookie.png"
                  className="max-w-full max-h-full object-contain rounded"
                  alt="Cookie"
                />
              </div>
              <p className="text-white font-pix text-center text-sm sm:text-base">
                Unlimited cookies for a lifetime! 🍪
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Envelope that appears after all gifts are opened */}
      {showEnvelope && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-700">
          <p className="text-white font-pix text-lg sm:text-xl mb-4 animate-pulse">
            💌 Someone sent you a message!
          </p>

          <Dialog open={envelopeOpen} onOpenChange={setEnvelopeOpen}>
            <DialogTrigger asChild>
              <button className="relative animate-bounce hover:scale-110 transition-transform focus:outline-none">
                <div className="text-9xl sm:text-[12rem]">💌</div>
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-md bg-linear-to-br from-[#FFFCFB] to-[#FFFCFB] border-4 border-red-300">
              {!isValentine ? (
                // Initial question
                <div className="flex flex-col items-center gap-6 py-6">
                  <div className="text-6xl animate-pulse">💝</div>
                  <h2 className="text-4xl font-bold text-center font-pix text-red-600">
                    Will you be my Valentine?
                  </h2>
                  <p className="text-center text-gray-700 font-pix">
                    You've unlocked all my gifts... now unlock my heart? 💕
                  </p>
                  <Button
                    className="bg-pink-500 hover:bg-pink-600 text-white font-pix text-lg px-8 py-6 cursor-pointer"
                    onClick={() => setIsValentine(true)}
                  >
                    Yes! 💖
                  </Button>
                </div>
              ) : (
                // Confirmation message
                <div className="flex flex-col items-center gap-6 py-6">
                  <img src="/assets/valentine-confirm.gif"></img>
                  <h2 className="text-4xl font-bold text-center font-pix text-red-600">
                    You are officially my Valentine!
                  </h2>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
