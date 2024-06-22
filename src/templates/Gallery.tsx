'use client';

import axios from 'axios';
import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface PhotoPageProps {
  photos: { src: string; width: number; height: number }[];
  error?: string | null;
}

const Gallery = ({ photos }: PhotoPageProps) => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div
      id="gallery"
      className="flex h-screen w-full flex-row gap-20 bg-primary-400 p-4 md:p-16"
    >
      <h1 className="mb-20 text-[24px] font-semibold text-white md:text-[32px]">
        GALLERIE
      </h1>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={300}
        onClick={({ index: clickedIndex }: { index: number }) =>
          setIndex(clickedIndex)
        }
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export async function getServerSideProps(ctx: any) {
  try {
    const folder: string = ctx?.query?.id?.toLowerCase?.() || '';
    const res = await axios.get(
      `${process.env.APP_LINK}/api/photo?folder=${folder}`,
    );

    const photos = res.data.photos.map((photo: any) => ({
      src: photo.url.replace('/upload/', '/upload/w_1080,f_auto/'),
      width: 1080,
      height: photo.height / (photo.width / 1080),
    }));

    return {
      props: {
        photos,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        photos: [],
        error: 'Failed to fetch photos',
      },
    };
  }
}

export { Gallery };
