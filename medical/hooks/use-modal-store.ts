import { Disease, Remedy } from "@prisma/client";
import { Bacteria_JaundiceWithClassify, QuestionWithSubQuestionWithLookListenFeel, SymptomWithRemediesWithDisease } from "@/types";
import {create }from"zustand"
export type ModalType="createSymptom"|"editSymptom"|"deleteSymptom"|"createPatient"|"createDoctor"|"createPatient2"|"createQuestion"|"members"|"messageFile"|"deleteMessage";
interface ModalData{
    symptom?:SymptomWithRemediesWithDisease;
    questions:QuestionWithSubQuestionWithLookListenFeel;
    bacteriawithjaundice:Bacteria_JaundiceWithClassify;
    disease?:Disease;
    remedy?:Remedy;
    apiUrl?:string;
    query?:Record<string,any>;
}
interface ModalStore{
    type:ModalType|null;
    data:ModalData;
    isOpen:boolean;
    onOpen:(type:ModalType,data?:ModalData)=>void;
    onClose:()=>void;
}
export const useModal=create<ModalStore>((set)=>({
    type:null,
    data:{},
    isOpen:false,
    onOpen:(type,data={})=>set({isOpen:true,type,data}),
    onClose:()=>set({type:null,isOpen:false})
}));