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
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-[#252424] font-roboto">
          <Dialog.Title className={"flex items-center justify-between px-3 py-2"}>
            <h3 className='text-[1.3em] font-medium'>{modalTitle}</h3>
            <i className="bi bi-x-lg hover:text-purple-600 cursor-pointer text-[1.1em] duration-75" onClick={()=>setIsOpen(false)}></i>
          </Dialog.Title>
          <Dialog.Description>
            <div className="px-3">
                <h4 className='text-slate-400 mt-1 mb-3'>{modalDescription}</h4>
            </div>
            <div className="bg-[#1e1e1e] px-3 py-2">{children}</div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  )

}

export default Modal