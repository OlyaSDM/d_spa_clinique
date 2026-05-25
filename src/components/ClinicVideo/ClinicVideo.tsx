import "./ClinicVideo.css";

export default function ClinicVideo() {
  return (
    <section className="clinic">
      <video
        className="clinic-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video/video.MP4" type="video/mp4" />
      </video>

      <div className="clinic-overlay" />

      <div className="clinic-content">
        <h2>THE SPACE</h2>
        <p>A private room designed for deep restoration</p>
      </div>
    </section>
  );
}