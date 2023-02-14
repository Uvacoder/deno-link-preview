import LinkIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/link.tsx";
import TrashXIcon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/trash-x.tsx"
import CameraIcon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/camera.tsx"

import LinkButton from "../components/LinkButton.tsx";
import { Link } from "../types/index.ts";
import { downloadImg } from "../utils/downloadImg.ts";

interface Props {
  link: Link;
  removeLink?: (link: Link) => void;
}

export default function LinkCard({ link, removeLink }: Props) {
  const { url, title, description, image } = link;

  const handleDownload = () => {
    downloadImg(`div[data-url="${url}"]`, title + '.png');
  };

  const handleRemove = () => {
    removeLink?.(link);
  }

  return (
    <>
      <div class="w-full relative flex flex-col bg-white rounded-lg shadow-md p-6 group " data-url={url}>
        <TrashXIcon class="absolute -top-2 -right-3 
           text-sm text-red-500 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100 cursor-pointer"  onClick={handleRemove}></TrashXIcon>
        <img class="h-32 object-cover self-center" src={image} alt="" />
        <div class="flex flex-col">
          <h2 class="text-xl font-bold mt-4">{title}</h2>
          <div class="text-gray-600 my-2 flex-1">{description}</div>
          <span class="inline-flex items-center text-gray-300 font-xs "><LinkIcon size={16} /><a href={url} target="_blank">{url}</a></span>
        </div>
        <CameraIcon class="absolute -bottom-2 -right-3 
           text-sm transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100 cursor-pointer" onClick={handleDownload}></CameraIcon>
      </div>
    </>
  );
}
