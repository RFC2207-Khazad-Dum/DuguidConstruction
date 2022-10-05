import styles from '../styles/PreviewGallery.module.css';

export default function PreviewGallery({ photos }) {
  return (
    <div>
      {photos.map((url, index) => (
        <>
        <img src={url} alt="Uploaded Image Preview" key={index} className={styles.previewImg}/>
        </>
      ))}
    </div>
  );
}
