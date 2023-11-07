interface WavesVideoProps {
  className?: string;
}

const WavesVideo = ({ className }: WavesVideoProps) => {
  return (
    <video
      className={`${className} w-full h-full object-cover`}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
    >
      <source
        src="https://bobward-image-bucket.s3.ca-central-1.amazonaws.com/waves.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default WavesVideo;
