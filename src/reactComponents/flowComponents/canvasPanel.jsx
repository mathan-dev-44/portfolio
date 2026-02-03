/* eslint-disable */
import { AnimatePresence, motion } from "motion/react";
import { memo, useMemo, useState } from "react";
import { MiniMap, Panel, useReactFlow, useViewport } from "reactflow";

import { convertToPx } from "../../lib/utils";
import {
  ChevronDownCircle,
  ChevronLeftCircle,
  Expand,
  Fullscreen,
  ZoomInIcon,
  ZoomOut,
} from "lucide-react";
const MINIMAPWIDTH = convertToPx("32%");
const MINIMAPHEIGHT = convertToPx("20%");
const CanvasPanel = () => {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const { zoom } = useViewport();
  const zoomPercentage = useMemo(() => Math.round(zoom * 50), [zoom]);
  const [minimapExpand, setMinimapExpand] = useState(false);

  const handleZoom = (type) => {
    if (type === "In") {
      zoomIn();
    }
    if (type === "Out") {
      zoomOut();
    }
  };

  const handleFullScreen = () => {
    const elem = document.documentElement;
    if (document.fullscreenEnabled) {
      if (!document.fullscreenElement) {
        elem.requestFullscreen().catch((err) => {
          console.error(
            "Error attempting to enable full-screen mode:",
            err.message
          );
        });
      } else {
        document.exitFullscreen();
      }
    } else {
      console.error("Fullscreen mode is not supported");
    }
  };

  return (
    <>
      <AnimatePresence>
        <Panel
          position="bottom-right"
          className="flex h-[5%] w-[20%]  justify-end gap-2 bg-transparent "
        >
          {minimapExpand && (
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex  h-full  w-[100%] items-center justify-between rounded-lg"
            >
              <div
                className="h-full w-[74%] items-center  rounded-[0.52vw]  border "
                style={
                  {
                    // backgroundColor: `${theme?.bg}`,
                    // borderColor: `${theme?.border}`,
                  }
                }
              >
                <div className="grid h-full w-full grid-cols-6 items-center justify-between gap-1">
                  <div onClick={handleFullScreen}>
                    <Fullscreen />
                  </div>

                  <div onClick={fitView}>
                    <Expand />
                  </div>

                  <div onClick={() => handleZoom("Out")}>
                    <ZoomOut />
                  </div>

                  <span className="font-inter flex items-center text-amber-100   justify-center p-1 text-[1.04vw] font-bold">
                    {Number(zoomPercentage)}%
                  </span>

                  <div onClick={() => handleZoom("In")}>
                    <ZoomInIcon />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div
            className="flex h-full w-[12%]  items-center justify-center rounded-[0.52vw] border  "
            style={
              {
                // backgroundColor: `${theme?.bg}`,
                // borderColor: `${theme?.border}`,
              }
            }
          >
            <div onClick={() => setMinimapExpand(!minimapExpand)}>
              {!minimapExpand ? <ChevronLeftCircle /> : <ChevronDownCircle />}
            </div>
          </div>
        </Panel>
        {minimapExpand && (
          <motion.div>
            <MiniMap
              position="bottom-right"
              style={{
                // bottom: "8%",
                height: MINIMAPHEIGHT,
                width: MINIMAPWIDTH,
              }}
              zoomable
              pannable
              nodeColor={"#0736C4"}
              zoomStep={0.1}
              maskColor="transparent"
              className="scale-up rounded-lg border "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(CanvasPanel);
