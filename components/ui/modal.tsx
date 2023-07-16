"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

interface ModalProps {
    modalTitle: string;
    modalDescription?: string;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({modalTitle,modalDescription,children}) => {
    const [isOpen, setIsOpen] = useState(true);


  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-[#252424] py-2 px-3 font-roboto">
          <div className={"flex items-center"}>
            <Dialog.Title className='text-[1.3em] font-medium text-white'>
              {modalTitle}
            </Dialog.Title>
            <i className="ml-auto bi bi-x-lg hover:text-purple-600 text-white cursor-pointer text-[1.1em] duration-75" onClick={()=>setIsOpen(false)}></i>
          </div>  
          <div className="">
            <Dialog.Description className='text-slate-400 mt-1 mb-3 text-[.85em]'>
                {modalDescription}
            </Dialog.Description>
            <div className="bg-[#1e1e1e] px-3 py-2">{children}</div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )

}

export default Modal