import css from './Modal.module.css';

export const Modal = ({ url, closeModal }) => {
  return (
    <div onClick={closeModal} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
};
