import { GetCardsPacksType } from 'api/cardsPacks-api'
import { ReactComponentElement, ReactNode } from 'react'
import style from './Modal.module.css'

type ModalPropsType = {
  active: boolean
  setActive: (active: boolean) => void
  children?: ReactNode
}

export default function Modal({ active, setActive, children }: ModalPropsType) {

  const modalActive = style.modal + ' ' + (active ? style.active : style.modal);
  const modalContentActive = style.modalContent + ' ' + (active ? style.active : style.modalContent);

  return (
    <div className={modalActive} onClick={() => setActive(false)}>
      <div className={modalContentActive} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

