import {create} from "zustand";

interface useSelectedTemplateIdProps {
    id: string;
    setSelectedTemplateId: (id: string) => void;
}

const useSelectedTemplateId = create<useSelectedTemplateIdProps>((set)=>({
    id:"64bd67a89ab2ec41a4343b94",
    setSelectedTemplateId:(id: string)=>set({id:id}),
}));

export default useSelectedTemplateId;