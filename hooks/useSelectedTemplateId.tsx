import {create} from "zustand";

interface useSelectedTemplateIdProps {
    id: string;
    setSelectedTemplateId: (id: string) => void;
}

const useSelectedTemplateId = create<useSelectedTemplateIdProps>((set)=>({
    id:"",
    setSelectedTemplateId:(id: string)=>set({id:id}),
}));

export default useSelectedTemplateId;